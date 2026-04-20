    <script>
      const toggle = document.getElementById("input");
      toggle.addEventListener("change", () => {
        document.body.classList.toggle("dark", toggle.checked);
      });
    </script>
