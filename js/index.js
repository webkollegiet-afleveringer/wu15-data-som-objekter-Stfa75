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
let hsection = document.createElement("div");
hsection.classList.add("herotext")
let heroHead = document.createElement("h2");
heroHead.textContent = `${hero.headline}`;
let heroCopy = document.createElement("p");
heroCopy.textContent = `${hero.copy}`;
let heroIcon = document.createElement("img");
heroIcon.setAttribute("src", hero.icon);
let heroButton = document.createElement("button")
heroButton.textContent = "Eksplore"
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
    faDiv.append(facImg,facHeadline,facText);
    flexDiv.append(faDiv); 
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
footerSection.append(footerDiv, footerHeadlineOne, footerText0)

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
    footerSection.append(footerDiv, footerHeadline2, firstText, secondText, thirdText, textFour, textFive)

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






