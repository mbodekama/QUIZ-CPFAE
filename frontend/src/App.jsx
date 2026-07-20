import { useEffect, useReducer, useState } from "react";
import { ALL } from "./data.js";
import {
  getCurrentUser,
  setCurrentUser,
  clearCurrentUser,
  rememberUser,
  seedProgress,
} from "./store.js";
import { apiUpsertUser } from "./api.js";
import { pullAll } from "./lib/sync.js";
import { buildQuestionList, buildFromQuestions } from "./lib/quiz.js";
import { toast } from "./lib/toast.js";

import { Home } from "./screens/Home.jsx";
import { Modules } from "./screens/Modules.jsx";
import { ModuleDetail } from "./screens/ModuleDetail.jsx";
import { Quiz } from "./screens/Quiz.jsx";
import { Results } from "./screens/Results.jsx";
import { Review } from "./screens/Review.jsx";

const DEFAULT_CFG = { difficulte: "mixte", count: 10, timer: false };

export default function App() {
  const [user, setUser] = useState(null);
  const [screen, setScreen] = useState("home");
  const [moduleName, setModuleName] = useState(null);
  const [cfg, setCfg] = useState(DEFAULT_CFG);
  const [quiz, setQuiz] = useState(null); // { list, cfg }
  const [result, setResult] = useState(null);
  const [booted, setBooted] = useState(false);
  const [, forceRerender] = useReducer((x) => x + 1, 0);

  // Récupère la progression serveur pour un pseudo, puis rafraîchit l'affichage.
  async function pullServer(name) {
    const server = await pullAll(name);
    if (server) {
      seedProgress(name, server);
      forceRerender();
    }
  }

  // Amorçage : reprend le pseudo enregistré s'il existe.
  useEffect(() => {
    const saved = getCurrentUser();
    if (saved) {
      setUser(saved);
      setScreen("modules");
      apiUpsertUser(saved);
      pullServer(saved);
    }
    setBooted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loginAs(name) {
    setUser(name);
    setCurrentUser(name);
    rememberUser(name);
    setScreen("modules");
    apiUpsertUser(name);
    pullServer(name);
  }

  function changeUser() {
    if (
      window.confirm(
        `Changer d'utilisateur ? Votre progression reste enregistrée sous « ${user} ».`
      )
    ) {
      clearCurrentUser();
      setUser(null);
      setModuleName(null);
      setScreen("home");
    }
  }

  function openModule(name) {
    setModuleName(name);
    setScreen("module");
  }

  // Retour à l'accueil (liste des modules) depuis le logo de l'en-tête.
  function goHome() {
    setModuleName(null);
    setQuiz(null);
    setResult(null);
    setScreen("modules");
  }

  function startQuiz(list, quizCfg, { silent } = {}) {
    if (!list.length) {
      if (!silent) toast(quizCfg.onlyWrong ? "Aucune question ratée à réviser 🎉" : "Aucune question pour ce choix.");
      return;
    }
    setQuiz({ list, cfg: quizCfg, id: Date.now() });
    setResult(null);
    setScreen("quiz");
  }

  function onComplete(res) {
    setResult(res);
    setScreen("results");
  }

  function reviewWrong() {
    const wrongQuestions = result.list
      .filter((it, i) => !result.answers[i]?.isCorrect)
      .map((it) => it.q);
    if (!wrongQuestions.length) {
      toast("Aucune question ratée 🎉");
      return;
    }
    startQuiz(buildFromQuestions(wrongQuestions), { ...quiz.cfg, onlyWrong: true });
  }

  function retry() {
    const list = buildQuestionList(moduleName, quiz.cfg, quiz.cfg.onlyWrong, user);
    startQuiz(list, quiz.cfg);
  }

  // ---- Rendu ----
  if (!booted) return <div className="app" />;

  if (!ALL.length) {
    return (
      <div className="app">
        <main className="screen">
          <div className="empty">
            <div className="em">📭</div>
            <p>
              Aucune question chargée. Vérifiez les fichiers <code>data/*.js</code>.
            </p>
          </div>
        </main>
      </div>
    );
  }

  let view = null;
  if (screen === "home") {
    view = <Home onLogin={loginAs} />;
  } else if (screen === "modules") {
    view = (
      <Modules
        user={user}
        onOpenModule={openModule}
        onChangeUser={changeUser}
        onHome={goHome}
      />
    );
  } else if (screen === "module") {
    view = (
      <ModuleDetail
        user={user}
        moduleName={moduleName}
        cfg={cfg}
        setCfg={setCfg}
        onBack={() => setScreen("modules")}
        onStartQuiz={startQuiz}
        onChangeUser={changeUser}
        onHome={goHome}
      />
    );
  } else if (screen === "quiz") {
    view = (
      <Quiz
        key={quiz.id}
        user={user}
        moduleName={moduleName}
        list={quiz.list}
        cfg={quiz.cfg}
        onComplete={onComplete}
        onChangeUser={changeUser}
        onQuit={() => setScreen("module")}
        onHome={goHome}
      />
    );
  } else if (screen === "results") {
    view = (
      <Results
        result={result}
        user={user}
        onReviewWrong={reviewWrong}
        onRetry={retry}
        onDetail={() => setScreen("review")}
        onToModule={() => setScreen("module")}
        onChangeUser={changeUser}
        onHome={goHome}
      />
    );
  } else if (screen === "review") {
    view = (
      <Review
        session={result}
        user={user}
        onBack={() => setScreen("results")}
        onToModule={() => setScreen("module")}
        onChangeUser={changeUser}
        onHome={goHome}
      />
    );
  }

  return <div className="app">{view}</div>;
}
