const containerElement = document.querySelector(".container");
const popupContainerElement = document.querySelector(".popup-container");

const joinButton = document.querySelector(".btn");

const closeIcon = document.querySelector(".close-icon");

joinButton.addEventListener("click", () => {
    containerElement.classList.add("active");
    popupContainerElement.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
    popupContainerElement.classList.add("active");
    containerElement.classList.remove("active");
});