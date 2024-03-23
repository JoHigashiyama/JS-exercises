"use strict";
// 0:グー 1:チョキ 2:パー

let rand = Math.floor(Math.random() * 3);

let janken = ["グー", "チョキ", "パー"];
let me;
const btn = document.querySelector('.btn');
const first = document.querySelector('#first');
let result = document.getElementById('result');
let rival = document.getElementById('rival');
let own = document.getElementById('own');

function judge() {
    // 勝ち
    if (rand === 0 && me === 2 || rand === 1 && me === 0 || rand === 2 && me === 1) {
        result.innerHTML = `あなたの勝ちです`;
    // 負け
    } else if(rand === 0 && me === 1 || rand === 1 && me === 2 || rand === 2 && me === 0) {
        result.innerHTML = `あなたの負けです`;
    // 引き分け
    } else {
        result.innerHTML = `引き分けです`;
    }
    rival.innerHTML = janken[rand];
    own.innerHTML = janken[me];
    btn.innerHTML = '';
    first.innerHTML = '';
}

function btnGu() {
    me = 0;
    judge();
}

function btnChoki() {
    me = 1;
    judge();
}

function btnPa() {
    me = 2;
    judge();
}
