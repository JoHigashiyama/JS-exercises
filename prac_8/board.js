"use strict";


function btnPost() {
    const name = document.getElementById('name').value;
    const text = document.getElementById('text').value;
    const board = document.getElementById('board');
    const date = new Date();
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `<h3>${name}の投稿</h3><p>${text}</p><p>${date.toLocaleString()}</p>`
    board.prepend(createDiv);
}