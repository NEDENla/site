<button id="showMessage">Arkadaşlarıma Mesajım Var!</button>
<p id="message" style="display:none;">Merhaba arkadaşlar! Burası benim harika sitem!</p>

<script>
    document.getElementById("showMessage").addEventListener("click", function() {
        document.getElementById("message").style.display = "block";
    });
</script>
