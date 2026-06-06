const gallery = document.querySelector(".gallery");

function displayTemples(filteredTemples) {

    gallery.innerHTML = "";

    filteredTemples.forEach(temple => {

        const card = document.createElement("section");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.textContent = `Location: ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const area = document.createElement("p");
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        gallery.appendChild(card);
    });
}

// Mostra todos os templos ao abrir a página
displayTemples(temples);

// Footer
document.querySelector("#year").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;