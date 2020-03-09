const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// navigation bar edits
let nav = document.querySelector("nav");
let navLinks = document.querySelectorAll("a");
navLinks.forEach(
  (link, i) => (
    navLinks[i].textContent = siteContent["nav"][`nav-item-${i+1}`]
  ))
  navLinks.forEach(
    (link, i) => (
      navLinks[i].style.color = "green"
    )
  )

  let steve = document.createElement("a");
  steve.textContent = "Steve";
  nav.prepend(steve);
  steve.style.color = "green";

  let mcqueen = document.createElement("a");
  mcqueen.textContent = "Mcqueen";
  nav.append(mcqueen);
  mcqueen.style.color = "green";

// main header

const title = document.querySelector("h1");
title.textContent = siteContent["cta"]["h1"]
title.style.transform = "rotate(105deg)"

//button

const buttonStyle = document.querySelector("button");
buttonStyle.textContent = siteContent["cta"]["button"]
buttonStyle.style.width = "95%"

const imgStyle = document.getElementById("cta-img");
imgStyle.setAttribute('src', siteContent["cta"]["img-src"])


// main content

// top content
let topContentTitles = document.querySelectorAll(".text-content h4");
topContentTitles[0].textContent = siteContent["main-content"]["features-h4"]
topContentTitles[1].textContent = siteContent["main-content"]["about-h4"]

let topContentPara = document.querySelectorAll(".text-content p");
topContentPara[0].textContent = siteContent["main-content"]["features-content"]
topContentPara[0].style.transform = "rotate(50deg)"
topContentPara[1].textContent = siteContent["main-content"]["about-content"]
topContentPara[1].style.color = "hotpink"

// main content image

document.getElementById("middle-img").setAttribute('src', siteContent["main-content"]["middle-img-src"])

// bottom content

let bottomContentTitle = document.querySelectorAll(".text-content h4");
bottomContentTitle[2].textContent = siteContent["main-content"]["services-h4"]
bottomContentTitle[3].textContent = siteContent["main-content"]["product-h4"]
bottomContentTitle[4].textContent = siteContent["main-content"]["vision-h4"]

let bottomContentPara = document.querySelectorAll(".text-content p");
bottomContentPara[2].textContent = siteContent["main-content"]["services-content"]
bottomContentPara[3].textContent = siteContent["main-content"]["product-content"]
bottomContentPara[4].textContent = siteContent["main-content"]["vision-content"]


// contact

let contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"]

let contactContent = document.querySelectorAll(".contact p");
contactContent[0].textContent = siteContent["contact"]["address"]
contactContent[1].textContent = siteContent["contact"]["phone"]
contactContent[2].textContent = siteContent["contact"]["email"]

// footer

let footerContent = document.querySelector("footer p");
footerContent.textContent = siteContent["footer"]["copyright"]