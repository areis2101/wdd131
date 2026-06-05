const gallery = document.querySelector(".gallery");
const title = document.querySelector("#title");

function displayTemples(filteredTemples) {

    gallery.innerHTML = "";

    filteredTemples.forEach(temple => {

        const card = document.createElement("section");

        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const img = document.createElement("img");

        name.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.templeName);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        gallery.appendChild(card);
    });
}

displayTemples(temples);

document.querySelector("#home").addEventListener("click", () => {
    title.textContent = "Home";
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", () => {
    title.textContent = "Old Temples";
    displayTemples(
        temples.filter(temple =>
            parseInt(temple.dedicated) < 1900
        )
    );
});

document.querySelector("#new").addEventListener("click", () => {
    title.textContent = "New Temples";
    displayTemples(
        temples.filter(temple =>
            parseInt(temple.dedicated) > 2000
        )
    );
});

document.querySelector("#large").addEventListener("click", () => {
    title.textContent = "Large Temples";
    displayTemples(
        temples.filter(temple =>
            temple.area > 90000
        )
    );
});

document.querySelector("#small").addEventListener("click", () => {
    title.textContent = "Small Temples";
    displayTemples(
        temples.filter(temple =>
            temple.area < 10000
        )
    );
});

document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;