if (window.fetch) {
    fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
        .then(response => response.json())
        .then(data => {
            document.body.innerHTML += JSON.stringify(data)
        });
} else {
    alert("Your browser does not support fetch. Fetch is used in common browsers that replaces XMLHttpRequest")
}
