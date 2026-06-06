document.querySelector("#home").addEventListener("click", () => {
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    displayTemples(
        temples.filter(temple =>
            Number(temple.dedicated.slice(0, 4)) < 1900
        )
    );
});

document.querySelector("#new").addEventListener("click", () => {
    displayTemples(
        temples.filter(temple =>
            Number(temple.dedicated.slice(0, 4)) > 2000
        )
    );
});

document.querySelector("#large").addEventListener("click", () => {
    displayTemples(
        temples.filter(temple => temple.area > 90000)
    );
});

document.querySelector("#small").addEventListener("click", () => {
    displayTemples(
        temples.filter(temple => temple.area < 10000)
    );
});