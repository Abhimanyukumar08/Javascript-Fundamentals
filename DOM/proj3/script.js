var courses = [
    {
        name : "Complete ReactJs course",
        price: 10,
    },
    {
        name : "Complete Python course",
        price: 12,
    },
    {
        name : "Complete Java course",
        price: 8,
    },
    {
        name : "Complete AWS course",
        price: 20,
    }
];

function generateList() {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( (course) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$" + course.price);
        span.appendChild(price)

        li.appendChild(span);
        ul.appendChild(li);
    });
};


window.addEventListener("load", generateList());

const button = document.querySelector(".sort-btn");

button.addEventListener("click", () => {
    courses.sort( (a,b) => a.price - b.price )
    generateList();
})