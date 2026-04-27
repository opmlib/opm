document.addEventListener("DOMContentLoaded", () => {

  fetch("toggle.html")
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById("toggle-container");
      if (!container) return;

      container.innerHTML = html;

      // bind AFTER HTML is injected
      const toggle = document.getElementById("input");
      if (toggle) {
        toggle.addEventListener("change", () => {
          document.body.classList.toggle("dark", toggle.checked);
        });
      }
    });

});
