
//where add
const mainSection = document.getElementById("main-section");
//what add
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My shopping";
section.appendChild(h1);

const ul = document.createElement("ul");
const li = document.createElement("li");
li.innerText = "Shirt 5"
const li2 = document.createElement("li");
li2.innerText = "T-shirt 5"
const li3 = document.createElement("li");
li3.innerText = "Boxer 5";
ul.appendChild(li);
ul.appendChild(li2);
ul.appendChild(li3);

section.appendChild(ul);

mainSection.appendChild(section);

//by inner html
const section2 = document.createElement("section");
section2.innerHTML = `
    <h1>My beg</h1>
    <ul>
    <li> book </li>
    <li> pen </li>
    <li> pencil </li>
    </ul>
`;
mainSection.appendChild(section2);

//css design by js
section.style.border = "2px solid black";
section.style.textAlign = "center";
section.style.backgroundColor = "pink";
// ul.style.listStyle = "none";
li.style.fontSize = "20px";
