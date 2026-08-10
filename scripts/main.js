const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/palm.jpg") {
    myImage.setAttribute("src", "images/palms.jpg");
  } else {
    myImage.setAttribute("src", "images/palm.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Rabbaniyyun online school welcomes you, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Rabbaniyyun online school welcomes you, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
