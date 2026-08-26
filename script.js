document.querySelectorAll(".projet").forEach(projet => {
    const ProjetInfos = document.getElementById(`${projet.id}-infos`);
    const ProjetMax = document.getElementsByClassName("max");

    projet.addEventListener("click", () => {

    if (ProjetMax.length !== 0 && ProjetMax[0] !== projet) {
        document.getElementById(`${ProjetMax[0].id}-infos`).classList.add("cache")
        ProjetMax[0].classList.remove("max")
    }

    projet.classList.toggle("max")
    ProjetInfos.classList.toggle("cache")
    })
})