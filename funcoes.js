const app = {
    pages: [],
    show: new Event('show'),
    init: function () {
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg) => {
            pg.addEventListener('show', app.pageShown);
        })
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', app.nav);
        })
        history.replaceState({}, 'Home', '#home');
        window.addEventListener('popstate', app.poppin);
    },
    nav: function (ev) {
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        console.log(currentPage)
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);
    },
    pageShown: function (ev) {
        console.log('Page', ev.target.id, 'just shown');
        let h1 = ev.target.querySelector('h1');
        h1.classList.add('big')
        setTimeout((h) => {
            h.classList.remove('big');
        }, 1200, h1);
    },
    poppin: function (ev) {
        console.log(location.hash, 'popstate event');
        let hash = location.hash.replace('#', '');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        console.log(hash)
        document.getElementById(hash).dispatchEvent(app.show);
    }
}

function base64() {
    var result = document.getElementById('base64').value;
    var base64Cri = window.btoa(unescape(encodeURIComponent(result)))
    console.log(window.btoa(unescape(encodeURIComponent(result))));
    alert("Valor em Base64 codificado é '" + base64Cri + "'.");

    var base64Des = window.atob(unescape(encodeURIComponent(base64Cri)))
    console.log(base64Des);
    alert("Valor em Base64 descodificado é '" + base64Des + "'.");
}

function upperCase() {
    var result = document.getElementById('upperCase').value;
    console.log(result.toUpperCase());
    alert("Valor em UpperCase é '" + result.toUpperCase() + "'.");
}

function lowerCase() {
    var result = document.getElementById('lowerCase').value;
    console.log(result.toUpperCase());
    alert("Valor em LowerCase é '" + result.toLowerCase() + "'.");
}

function capitalCase() {
    var result = document.getElementById('capitalCase').value;
    var resultF;

    for (var i = 0; i < result.length; i++)
    {
        if (i == 0 || result[i-1] == " ") {
            resultF = resultF + result[i].toUpperCase();
        }
        else {
            resultF = resultF + result[i].toLowerCase();
        }
    }

    console.log(resultF);
    alert("Valor em CapitalCase é '" + resultF + "'.");
}

function properCase() {
    var result = document.getElementById('properCase').value;
    console.log(result.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) { return $1.toUpperCase(); }));
    alert("Valor em ProperCase é '" + result.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) { return $1.toUpperCase(); }) + "'");
}

document.addEventListener('DOMContentLoaded', app.init);