var typed = new Typed('#typed', {
    strings: [
        'Data Engineer',
        'Data Scientist',
        'Data Analyst'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

const counter = document.querySelector(".counter-number");

async function updateCounter() {
    let response = await fetch(
        "https://2enkh4qj5c7dztp2mp76q3ugkq0ldlxm.lambda-url.ca-central-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `Hello ${data.city} <br />
    👀 Views: ${data.overall_view_count}`;
}

updateCounter();
