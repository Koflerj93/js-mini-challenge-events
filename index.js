/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}
const header = document.querySelector("h1#header");
header.addEventListener("mouseover", function(e) {
  e.target.style.cursor = "pointer";
}) 

header.addEventListener("click", function(e) {
  toggleColor(header);
})

/***** Deliverable 2 *****/

function createPlayer() {
  
  const form = document.querySelector('#new-player-form');

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const submitForm = e.target; //gives us the form and its children
    const playerNumber = submitForm[0].value;
    const playerName = submitForm[1].value;
    const playerNickname = submitForm[2].value;
    const playerPhoto = submitForm[3].value;
   

    const playerObject = {
      number: `${playerNumber}`,
      name: `${playerName}`,
      nickname: `${playerNickname}`,
      photo: `${playerPhoto}`,
      likes: 0,
    }
    renderPlayer(playerObject);
  })
};

createPlayer();
/***** Deliverable 3 *****/

function likeButton(){
  const likeButtons = document.querySelectorAll('.like-button');

  for(let button of likeButtons) {
    button.addEventListener('click', function(event) {
      const button = event.target;
      const likes = button.parentElement.querySelector('p');
      const split = likes.textContent.split(' ');
      const likeNumber = parseInt(split[0]);
      const newLikeNumber = likeNumber + 1;
      likes.innerHTML = `${newLikeNumber} likes`

    })
  }
}

likeButton()