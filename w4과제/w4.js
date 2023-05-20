"use strict";
const like = document.querySelector(".like")
const modalOpen = document.getElementById('modal_open');
const modalClose = document.getElementById('modal_close');
const modal = document.querySelector('.modal-wrapper');

let count = 0;
modalOpen.onclick = () => {
    count = count + 1;
    modal.style.display = "flex";
    like.innerText = `likes ${count}.0k`;
    if (count == 9) {
        alert("인기스타가 되었습니다.")
    }
}

modalClose.onclick = () => {
    modal.style.display = "none";
}

