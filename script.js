document.querySelector("#heart").onclick = function () {
    document.querySelector("#emptyHeart").classList.toggle("hidden");
    document.querySelector("#fullHeart").classList.toggle("hidden");
};
document.querySelector('#buttonMore').onclick = function () {
    let div = document.querySelector("#closeMore");
    div.classList.toggle("hidden");
    div.animate(
        [
            //keyframes
            { transform: 'translateY(100%' },
            { transform: 'translateY(-5%' }, //Ajout d'un rebont
            { transform: 'translateY(0' },
        ],
        {  //timing options
            duration: 2000,
            iterations: 1
        }
    )

}

document.querySelector('#closedArrow').onclick = function () {
    document.querySelector('#closeMore').classList.toggle("hidden");
}