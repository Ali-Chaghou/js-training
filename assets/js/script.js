"use strict"

const section = document.getElementById('gallery');
section.innerHTML = createFigure('Fig.1', 'assets/img/coding.png');
section.innerHTML += createFigure('Fig.2', 'assets/img/coding1.png ', '#716cab');
section.innerHTML += createFigure('Fig.3', 'assets/img/coding2.png ', '#fc466b');


function createFigure(titel, src, borderColor = '#6cab7c') {
    return '<figure style="border-color: ' + borderColor + '">' +
        '<img src="' + src + '" alt="Wald-Wandbild">' +
        '<figcaption>' + titel + '</figcaption>' +
        '</figure>';
}