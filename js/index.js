// slå dig løs her... 
let heroSection = document.querySelector(".hero");
let serviceSection = document.querySelector(".services");
let facilitiesSection = document.querySelector(".facilities");
let sitesSection = document.querySelector(".sites");
let advSection = document.querySelector(".advantages");
let footerSection = document.querySelector(".footer");

/*****Hero sektionen*******/

let heroDiv = document.createElement("div");
let heroImg = document.createElement("img");
heroImg.setAttribute("src", hero.image);
let hsection = document.createElement("div");
hsection.classList.add("herotext")
let heroHead = document.createElement("h2");
const orangeWords = ["save", "your", "time"];

heroHead.innerHTML = hero.headline.split(' ').map(word => {
    // Fjerner punktum/komma så ordet bliver fundet korrekt
    let cleanWord = word.replace(/[.,]/g, ""); 
    
    if (orangeWords.includes(cleanWord)) {
        return `<span class="orange-text">${word}</span>`;
    }
    return word;
}).join(' ');
let heroCopy = document.createElement("p");
heroCopy.textContent = `${hero.copy}`;
let heroIcon = document.createElement("img");
heroIcon.setAttribute("src", hero.icon);
let heroButton = document.createElement("button")
heroButton.textContent = "Explore"
heroButton.style.fontSize = "40px"
heroButton.classList.add("knaptext")
heroButton.append(heroIcon)
heroSection.append(heroDiv, hsection);
heroDiv.append(heroImg);
hsection.append(heroHead, heroCopy, heroButton);

/****Services sektionen********/



services.forEach(service => {

    let serviceDiv = document.createElement("div");
    let serviceIll = document.createElement("img")
    serviceIll.setAttribute("src", service.illustration);
    let serviceBox = document.createElement("div")
    serviceBox.classList.add("sertext")
    let serviceHeadline = document.createElement("h2");
    serviceHeadline.textContent = `${service.headline}`;
    let servicetxt = document.createElement("p");
    servicetxt.textContent = `${service.text}`;
    let serviceLink = document.createElement("a");
    serviceLink.textContent = `${service.linktext}`;
    serviceSection.append(serviceBox);
    serviceDiv.append(serviceIll);
    serviceBox.append(serviceDiv, serviceHeadline, servicetxt, serviceLink)
})

/*********Facilities sektion********/

let facilityHeadline = document.createElement("h1");
facilityHeadline.textContent = `${facilities.headline}`;
let flexDiv = document.createElement("div");
flexDiv.classList.add("flexwrapper");
facilitiesSection.append(facilityHeadline, flexDiv);

facilities.options.forEach(facility => {

    let faDiv = document.createElement("div")
    faDiv.classList.add("faoptions")
    let facImg = document.createElement("img");
    facImg.setAttribute("src", facility.icon);
    let facHeadline = document.createElement("h2");
    facHeadline.textContent = `${facility.headline}`;
    let facText = document.createElement("p");
    facText.textContent = `${facility.text}`;
    faDiv.append(facImg, facHeadline, facText);
    flexDiv.append(faDiv);
})
/******Sites sektionen*****/

let community = document.createElement("div")
community.classList.add("join")
let siteHeadline = document.createElement("h2");
siteHeadline.textContent = `${sites.headline}`;
let siteText = document.createElement("p");
siteText.textContent = `${sites.text}`;
let siteIcon = document.createElement("img");
siteIcon.setAttribute("src", sites.btnicon);
// sitesSection.append(siteHeadline, siteText, siteIcon)

const joinString =/*html*/
    `
    <section class="join">
        <h2>${sites.headline}</h2>
        <p>${sites.text}</p>
        <button class="join-button">
            Join Now
            <img src="${sites.btnicon}" alt="Arrow icon"></button>
    </section>
`

sitesSection.insertAdjacentHTML("afterbegin", joinString)

// sites.places.forEach(container => {

//     let destination = document.createElement("div")
//     destination.classList.add("places")
//     let siteImg = document.createElement("img");
//     siteImg.setAttribute("src", container.img);
//     /*husk at det altid er parameteret (når tingene skal lokaliseres)
//      du skal referere til når foreach udfyldes*/
//     let cityName = document.createElement("h3");
//     cityName.textContent = `${container.name}`;
//     let city = document.createElement("p");
//     city.textContent = `${container.city}`;
//     // destination.append(siteImg, cityName, city)
//     // community.append(destination)

const placeString = /*html*/
    `
    <section class= "place">
   ${sites.places.map(place => `
        <div class="place-card">
            <img src="${place.img}" alt="${place.name}">
            <h3>${place.name}</h3>
            <h4>${place.city}</h4>
        </div>
    `).join('')}
</section>
`
sitesSection.insertAdjacentHTML("afterbegin", placeString);


/***********Advantage Sektionen******/

// let advantageDiv = document.createElement("div");
// let advheadline = document.createElement("h2");
// advheadline.textContent = "Advantages";


// advantages.forEach(container2 => {

//     let advIcon = document.createElement("img")
//     advIcon.setAttribute("src", container2.icon);
//     let advantageHeadline = document.createElement("h2");
//     advantageHeadline.textContent = `${container2.headline} `;
//     let advText = document.createElement("p");
//     advText.textContent = `${container2.text} `;
//     // advSection.append(advheadline, advIcon, advantageHeadline, advText)
// })

// const advString = /*html*/`
// <section class = "fordele">
// <h2> Our Advantages</h2>
// </section>
// `

const advString = /*html*/`
<h2 class="fordele">Our Advantages</h2>
`

const advList = /*html*/`

<div class = "liste">

${advantages.map(advantages => `
<div class= "adv-card">
<img src="${advantages.icon}" alt ="${advantages.headline}">
<h2>${advantages.headline}</h2>
<p>${advantages.text}</p> </div>
`).join("")}
</div>
`
advSection.insertAdjacentHTML("afterbegin", advList);
advSection.insertAdjacentHTML("afterbegin", advString)

/********Footer***********/

// let footerDiv = document.createElement("div");

// let footerHeadlineOne = document.createElement("h3");
// footerHeadlineOne.textContent = `${footer.headline} `;
// let footerText0 = document.createElement("h1");
// footerText0.textContent = `${footer.text0} `;
// // footerSection.append(footerDiv, footerHeadlineOne, footerText0)

// footer.info.forEach(container3 => {

//     let footerHeadline2 = document.createElement("h3");
//     footerHeadline2.textContent = `${container3.headline1} `;
//     let firstText = document.createElement("p");
//     firstText.textContent = `${container3.text} `;
//     let secondText = document.createElement("p");
//     secondText.textContent = `${container3.text2} `;
//     let thirdText = document.createElement("p");
//     thirdText.textContent = `${container3.text3} `;
//     let textFour = document.createElement("p");
//     textFour.textContent = `${container3.text4} `;
//     let textFive = document.createElement("p");
//     textFive.textContent = `${container3.text5} `;
//     // footerSection.append(footerDiv, footerHeadline2, firstText, secondText, thirdText, textFour, textFive)

//     let ulOne = document.createElement("ul");


//     ulOne.appendChild(footerHeadline2);/* her sættes variablerne ind i en ul*/

//     // Lægger alle  li'er ind i UL kassen - li er child af UL derfor bruges appendChild
//     ulOne.appendChild(firstText);
//     ulOne.appendChild(secondText);
//     ulOne.appendChild(thirdText);
//     ulOne.appendChild(textFour);
//     ulOne.appendChild(textFive); /* set på w3 schools*/

//     // 4. Sæt hele kassen (ul) ind i din FooterDiv
//     footerDiv.appendChild(ulOne)
//     document.querySelector("footer").appendChild(ulOne)/* check w3 for mere info*/

// })

const footerString = /*html*/
    `
<section class="first">
<h2>${footer.headline}</h2>
<h1>${footer.text0}</h1>
</section>
`
const infoString = /*html*/
    `
 <div class="info">
 
 ${footer.info.map(info => `
  <div class="footer-card">
  <h2>${info.headline1}</h2>
  <p>${info.text}</p>
  <p>${info.text2}</p>
  <p>${info.text3}</p>
  <p>${info.text4}</p>
  </div>    
    `).join("")
    }
</div>
`
const footerEnd = /*html*/
    `
<div class="bottom">
    <p class="line1">${footer.bottom.text}</p>
    <div class="line2">
        ${footer.bottom.links.map(link => `<span>${link}</span>`).join('')}
    </div>
</div>
`
footerSection.insertAdjacentHTML("afterbegin", footerEnd);
footerSection.insertAdjacentHTML("afterbegin", infoString);
footerSection.insertAdjacentHTML("afterbegin", footerString);




