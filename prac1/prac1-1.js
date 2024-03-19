"use strict";

let height = window.prompt(`身長を入力してください`);
let judge = height / height;

if (height === "" || height === null) {
    window.alert("入力がないと判定できません");
}

if (height >= 100) {
    const ticket = window.confirm("プレミアムチケットを持っていますか？");
    if (ticket === true) {
        window.alert("プレミアムシートに乗車可能です");
    } else {
        window.alert("通常のシートに乗車可能です");
    }
} else if (height >= 90) {
    alert("付き添いありで乗車可能です");
} else if (height < 90 && height !== null && height !== "") {
    window.alert("乗車できません");
} else if (height !== null && height !== "") {
    window.alert("半角数字で入力してください");
}

