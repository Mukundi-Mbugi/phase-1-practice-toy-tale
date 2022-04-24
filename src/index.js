let addToy = false;

const postToyBtn = document.querySelector("#new-toy-btn");
const toyContainer = document.querySelector(".container");

//fetch method
function getToys() {
  fetch("http://localhost:3000/toys")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((toy) => displayToy(toy));
    });
}

function displayToy(toy) {
  let toyCard = document.createElement("div");
  toyCard.className = "card";

  toyCard.innerHTML = `    
      <h2>${toy.name}</h2>
      <img src="${toy.image}" class="toy-avatar" />
      <p><span id='likes'>${toy.likes}</span> Likes </p>
      <button class="like-btn" id="like">Like</button>
    `;

  toyCard.querySelector("#like").addEventListener("click", (e) => {
    e.preventDefault;
    toy.likes += 1;
    toyCard.querySelector("span").textContent = toy.likes;
    updateLikes(toy);
  });
  document.getElementById("toy-collection").appendChild(toyCard);
}

function initializetoys() {
  getToys();
}
initializetoys();

//Post method

const form = document.querySelector(".add-toy-form");
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  let name= document.getElementById("#toyName").value;
  let image = document.querySelector("#toyImage").value
  let likes = 0
  
  console.log(name);
})

function postToys(toy) {
  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toy),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

postToyBtn.addEventListener("click", () => {
  addToy = !addToy;
  if (addToy) {
    toyContainer.style.display = "block";
  } else {
    toyContainer.style.display = "none";
  }
});

//Patch method
function addLikes(toy) {
  fetch(`http://localhost:3000/toys/${toy.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(toy),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
