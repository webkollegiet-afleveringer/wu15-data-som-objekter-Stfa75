// slå dig løs her... 
let heroSection = document.querySelector(".hero");
let serviceSection = document.querySelector(".services");
let facilitiesSection = document.querySelector(".facilities");
let sitesSection = document.querySelector(".sites");
let advantage = document.querySelector(".advantages");
let footerSection = document.querySelector(".footer");

/*****Hero sektionen*******/

let heroDiv = document.createElement("div");
let heroImg = document.createElement("img");
heroImg.setAttribute("src", hero.image);
let heroHeadline = document.createElement("h2");
heroHeadline.textContent = `${hero.headline}`;
let heroCopy = document.createElement("p");
heroCopy.textContent = `${hero.copy}`;
let heroIcon = document.createElement("icon");
heroIcon.setAttribute("src", hero.icon);
heroSection.append(heroDiv, heroHeadline, heroCopy, heroIcon);
heroDiv.append(heroImg);

/****Services sektionen********/

let serviceDiv = document.createElement("div");

services.forEach(service => {

    let serviceIll = document.createElement("img")
    serviceIll.setAttribute("src", service.illustration);
    let serviceHeadline = document.createElement("h2");
    serviceHeadline.textContent = `${services.headline}`;
    let servicetxt = document.createElement("p");
    servicetxt.textContent = `${services.copy}`;
    let serviceLink = document.createElement("a")
    serviceLink.setAttribute("src", service.linkText)
    serviceSection.append(serviceDiv, serviceLink, serviceHeadline, servicetxt)
    serviceDiv.append(serviceIll);
})

/*********Facilities sektion********/

let facilityDiv = document.createElement("div");

let facHeadline = document.createElement("h2");
facHeadline.textContent = `${facilities.headline}`;

facilities.options.forEach(facility => {
    let facImg = document.createElement("img");
    facImg.setAttribute("src", facility.icon);
    let facHeadline = document.createElement("h2");
    facHeadline.textContent = `${facility.headline}`;
    let facText = document.createElement("p");
    facText.textContent = `${facility.text}`;
    facilitiesSection.append(facilityDiv, facHeadline, facText)
    facilityDiv.append(facImg);

})
/******Sites sektionen*****/

let sitesDiv = document.createElement("div");

let siteHeadline = document.createElement("h2");
siteHeadline.textContent = `${sites.headline}`;
let siteText = document.createElement("p");
siteHeadline.textContent = `${sites.text}`;
let siteIcon = document.createElement("img");
siteIcon.setAttribute("src", sites.btnicon);

sites.places.forEach(container => {


    let siteImg = document.createElement("img");
    siteImg.setAttribute("src", container.img);
    /*husk at det altid er parameteret (når tingene skal lokaliseres)
     du skal referere til når foreach udfyldes*/
    let cityName = document.createElement("h3");
    cityName.textContent = `${container.name}`;
    let city = document.createElement("p");
    city.textContent = `${container.city}`;
    sitesSection.append(sitesDiv, siteHeadline, siteText, siteIcon, cityName, city)
    sitesDiv.append(siteImg);

})
/***********Advantage Sektionen******/

let advantageDiv = document.createElement("div");

advantages.forEach(container2 => {

    let advIcon = document.createElement("img")
    advIcon.setAttribute("src", container2.icon);
    let advantageHeadline = document.createElement("h2");
    advantageHeadline.textContent = `${container2.headline}`;
    let advText = document.createElement("p");
    advText.textContent = `${container2.text}`;
    advantage.append(advantageDiv, advantageHeadline, advText)
    advantageDiv.append(advIcon);
})

/********Footer***********/

let footerDiv = document.createElement("div");

let footerHeadlineOne = document.createElement("h3");
footerHeadlineOne.textContent = `${footer.headline}`;
let footerText0 = document.createElement("h1"); 
footerText0.textContent = `${footer.text0}`;
footerSection.append(footerDiv,footerHeadlineOne,footerText0)

footer.info.forEach(container3 => {

    let footerHeadline2 = document.createElement("h3");
    footerHeadline2.textContent = `${container3.headline1}`;
    let firstText = document.createElement("p");
    firstText.textContent = `${container3.text}`;
    let secondText = document.createElement("p");
    secondText.textContent = `${container3.text2}`;
    let thirdText = document.createElement("p");
    thirdText.textContent = `${container3.text3}`;
    let textFour = document.createElement("p");
    textFour.textContent = `${container3.text4}`;
    let textFive = document.createElement("p");
    textFive.textContent = `${container3.text5}`;
    footerSection.append(footerDiv, footerHeadline2,firstText, secondText, thirdText,textFour,textFive)
    
    let ulOne = document.createElement("ul");

    
    ulOne.appendChild(footerHeadline2);/* her sættes variablerne ind i en ul*/

    // Lægger alle  li'er ind i UL kassen - li er child af UL derfor bruges appendChild
    ulOne.appendChild(firstText);
    ulOne.appendChild(secondText);
    ulOne.appendChild(thirdText);
    ulOne.appendChild(textFour);
    ulOne.appendChild(textFive); /* set på w3 schools*/

    // 4. Sæt hele kassen (ul) ind i din FooterDiv
    footerDiv.appendChild(ulOne)
    document.querySelector("footer").appendChild(ulOne)/* check w3 for mere info*/

})






