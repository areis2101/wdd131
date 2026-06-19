const plans = [
    {
        name: "Personal Trainer",
        price: 100
    },
    {
        name: "Consultoria Online",
        price: 50
    }
];

function saveVisit() {

    let visits =
        Number(localStorage.getItem("visits")) || 0;

    visits++;

    localStorage.setItem("visits", visits);

    console.log(`Visits: ${visits}`);
}

saveVisit();

function showPlan(planName) {

    const selectedPlan =
        plans.find(
            plan => plan.name === planName
        );

    if (selectedPlan) {

        alert(
            `You selected ${selectedPlan.name} for €${selectedPlan.price}`
        );
    }
}

const cards =
    document.querySelectorAll(".price-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const planName =
            card.querySelector("h2").textContent;

        showPlan(planName);

    });

});

const form =
    document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", event => {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        if (name.length < 3) {

            alert(
                `Please enter a valid name`
            );

        } else {

            alert(
                `Thank you ${name}! We will contact you soon.`
            );

        }

    });

}
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});