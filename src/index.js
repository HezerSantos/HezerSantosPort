import './style.css'

import spaceAgencyImage from './images/spaceagency.png'
import delightsDailyImage from './images/dd1.png'
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
        "Python",
        "Django"
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
    "A mock up for a travel site, highlighting the main features of each destination. Built with basic Website Development Languages.",
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
    "A site that utilizes the Poke API that allows to create a team of SIX Pokemon. Add and delete functions with proper error handling.",
    pokePickerImage
)


const languageImageMap = new Map()

languageImageMap.set("HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg")
languageImageMap.set("CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg")
languageImageMap.set("JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg")
languageImageMap.set("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg")
languageImageMap.set("Django", "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg")

/* HTML
INSIDE SVG viewBox="0 0 128 128"
Inside path one fill="#E44D26 d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"
Inside path two fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076H64z"
Inside path three fill="#EBEBEB" d="M64 66.978H49.359l-1.01-11.331H64V44.583H36.257l.264 2.969 2.72 30.489H64zm0 28.733l-.049.013-12.321-3.328-.788-8.823H39.735l1.55 17.372 22.664 6.292.051-.015z"></path><path d="M28.034 1.627h5.622v5.556H38.8V1.627h5.623v16.822H38.8v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.591V1.627z"></path><path fill="#fff" d="M63.962 66.978v11.063h13.624L76.302 92.39l-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zm0-22.395v11.064h26.725l.221-2.487.505-5.608.265-2.969z"
*/


const projectDisplay = document.querySelector("#project-display");
const languageContainer = document.querySelector(".language-container")
const projectTitle = document.querySelector(".project-title");
const projectDescription = document.querySelector(".description")

const nextButton = document.querySelector("#next-button")
const backButton = document.querySelector("#back-button")

const projectsList = [spaceAgency, delightsDaily, travelMockUp, pokePicker]

projectDisplay.addEventListener("mouseenter", () => {
    const linkTo = document.querySelector("#link-to");
    linkTo.classList.remove("hide");
})
projectDisplay.addEventListener("mouseleave", () => {
    const linkTo = document.querySelector("#link-to");
    linkTo.classList.add("hide");
})


let counter = 0

const createImage = () => {
    const image = document.createElement("img")
    image.src = projectsList[counter].image;
    return image;
}

const returnLanguageImage = () => {
    projectsList[counter].languages.forEach(language => {
        const languageImageURL = languageImageMap.get(language);
        const image = document.createElement("img");
        image.src = languageImageURL
        languageContainer.appendChild(image);
    })
}

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

const rotateImage = () => {
    const image = createImage();
    projectDisplay.append(image, createLinkSVG());
}


const clearContainers = () => {
    projectDisplay.textContent = '';
    languageContainer.textContent = ""
}
const rotateDescription = () => {
    projectTitle.textContent = projectsList[counter].name
    projectDescription.textContent = projectsList[counter].description
}

const rotateProject = (func) => {
    clearContainers();
    func
    rotateImage();
    returnLanguageImage();
    rotateDescription();
}

const createLinkSVG = () => {
    const a = document.createElement("a")

    a.href = projectsList[counter].gitLink
    a.classList.add("hide")
    a.id = "link-to"
    a.setAttribute("target", "_blank")
    a.setAttribute("rel", "noopener noreferrer")

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 24 24');

    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = 'open-in-new';

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z');

    svg.appendChild(title);
    svg.appendChild(path);

    a.appendChild(svg)
    return a;

}

nextButton.addEventListener('click', () => {
    rotateProject(checkNextCounter())
})
backButton.addEventListener('click', () => {
    rotateProject(checkBackCounter())
})