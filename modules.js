if (window.fetch) {
    fetch('https://eielson.pacaf.net/test.json')
        .then(response => response.json())
        .then(data => {
            document.body.innerHTML += JSON.stringify(data)
        });
} else {
    alert("Your browser does not support fetch. Fetch is used in common browsers that replaces XMLHttpRequest")
}
