/* Notification éphémère « toast », déclenchable de façon impérative depuis
 * n'importe où (comme dans la version vanilla). Le composant <Toaster/> écoute. */
export function toast(message) {
  window.dispatchEvent(new CustomEvent("cpfae-toast", { detail: message }));
}
