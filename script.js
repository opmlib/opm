document.addEventListener("DOMContentLoaded", () => {

  fetch("https://opmlib.github.io/opm/themetoggle.html")
    .then(res => res.text())
    .then(html => {

      document.getElementById("toggle-container").innerHTML = html;

      const toggle = document.getElementById("input");
      if (toggle) {
        toggle.addEventListener("change", () => {
          document.body.classList.toggle("dark", toggle.checked);
        });
      }

    })
    .catch(err => console.error("Toggle failed to load:", err));

});
