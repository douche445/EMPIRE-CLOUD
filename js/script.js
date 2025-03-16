document.getElementById("language-selector").addEventListener("change", function() {
    let lang = this.value;
    fetch('translations.json')  // Carrega o arquivo JSON
        .then(response => response.json())
        .then(translations => {
            document.querySelector("h1").textContent = translations[lang].welcome;
            document.querySelector(".pricing h2").textContent = translations[lang].pricing;
            document.querySelector(".models h2").textContent = translations[lang].models;
        })
        .catch(error => console.error('Erro ao carregar as traduções:', error));
});
