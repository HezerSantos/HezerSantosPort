import './style.css'

import spaceAgencyImage from './images/spaceagency.png'
import delightsDailyImage from './images/delightsdaily.png'
import travelMockUpImage from './images/travelmock.png'
import pokePickerImage from './images/pokemonpicker.png'


if (module.hot) {
    module.hot.accept();
};


const project = (name, gitLink, languages = [], description, image) => {
    return {name, gitLink, languages, description, image};
}

const spaceAgency = project(
    "Space Agency", 
    "https://github.com/HezerSantos/space-agency", 
    [
        "HTML", 
        "CSS",
        "JavaScript",
        "Python"
    ],
    "Space Agency Management system using Django for the backend. Allows quick search look up and column sorting.",
    spaceAgencyImage
);

const delightsDaily = project(
    "Delights Daily", 
    "https://github.com/HezerSantos/delights-daily", 
    [
        "HTML", 
        "CSS",
        "JavaScript",
    ],
    "A mock up for a recipe site that includes three different recipes. Uses JavaScript and vanilla CSS to create a functional nav bar",
    delightsDailyImage
);

const travelMockUp = project(
    "Travel MockUp",
    "https://github.com/HezerSantos/travel-mockup",
    [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "A mock up for a travel site, highlighting the main features of each destination.",
    travelMockUpImage
)

const pokePicker = project(
    "Pokemon Team Picker",
    "https://github.com/HezerSantos/pokemon-picker",
    [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    "A site that utilizes the Poke API that allows to create a team of SIX Pokemon.",
    pokePickerImage
)

const projectDisplay = document.querySelector("#project-display");

const nextButton = document.querySelector("#next-button")
const backButton = document.querySelector("#back-button")

const projectsList = [spaceAgency, delightsDaily, travelMockUp, pokePicker]

const createImage = () => {
    const image = document.createElement("img")
    image.src = projectsList[counter].image;
    return image;
}


let counter = 0

const checkNextCounter = () => {
    counter ++;
    if (counter === projectsList.length){
        counter = 0;
    }
}
const checkBackCounter = () => {
    counter --;
    if (counter === -1){
        counter = (projectsList.length - 1);
    }
}

const rotateImage = (func) => {
    projectDisplay.textContent = '';
    func
    const image = createImage();
    projectDisplay.appendChild(image);
}

const rotateDescription = () => {

}

nextButton.addEventListener('click', () => {
    rotateImage(checkNextCounter())
})
backButton.addEventListener('click', () => {
    rotateImage(checkBackCounter())
})