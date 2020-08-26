// Get Slider Items: Array.from[ES6 feature]
let sliderProjects = Array.from(
    document.querySelectorAll(".slider-container .project")
  );
  
  // Get Number of Slides
  let slidesCount = sliderProjects.length;
  
  // Set the Current Slide
  let currentSlide = 1;
  
  //Previious and Next Buttons
  let nextButton = document.getElementById("next");
  let prevButton = document.getElementById("prev");
  
  //Handle Click on Previous and Next Buttons
  nextButton.ontouchstart = nextSlide;
  prevButton.ontouchstart = prevSlide;
  /*
     let anchors =  document.getElementsByTagName("a");
     for(let i = 0; i < anchors.length; i++)
     {
         
         let a = anchors[i];
         if(!a.href.includes("#"))
         {
         a.ontouchstart = redirect(a.href);
        }
     }

     function redirect(href)
     {
         return function(){
            window.open(href, "_blank");
        }
     }
            */
  //Create The Main UL Element
  let paginationElement = document.createElement("ul");
  
  //Set ID on Created UL Element
  paginationElement.setAttribute("id", "pagination-ul");
  
  //Create List Items Based on Slides Count
  for (let i = 1; i <= slidesCount; i++) {
    // Create The li
    let paginationItem = document.createElement("li");
  
    // Set Custom Attribute
    paginationItem.setAttribute("data-index", i);
  
    // Append Items to the main ul list
    paginationElement.appendChild(paginationItem);
  }
  
  // Add The Created ul element to the page
  document.getElementById("indicators").appendChild(paginationElement);
  
  // Get the new created Ul
  let paginationCreatedUl = document.getElementById("pagination-ul");
  
  // Get the new created Items [ES6 feauture]
  let paginationBullets = Array.from(
    document.querySelectorAll("#pagination-ul li")
  );
  
  // Loop through the bullets Items
  for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].ontouchstart = function () {
      currentSlide = parseInt(this.getAttribute("data-index"));
      theChecker();
    };
  }
  
  // Trigger the checker function
  theChecker();
  
  // Next Slide Fuunction
  function nextSlide() {
    if (nextButton.classList.contains("disabled")) {
      // Do nothing
      return false;
    } else {
      currentSlide++;
      theChecker();
    }
  }
  // Previous Slide Fuunction
  function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
      // Do nothing
      return false;
    } else {
      currentSlide--;
      theChecker();
    }
  }
  
  //create The checker function
  function theChecker() {
    //Remove All Active Classes
    removeAllActive();
    // Set Active Class on Current Slide
    sliderProjects[currentSlide - 1].classList.add("active");
    // Set Active Class on Current Pagaination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");
  
    // Check if current slide is the first
    if (currentSlide == 1) {
      //Add disabled class on previous button
      prevButton.classList.add("disabled");
    } else {
      //Remove disabled class from the previous button
      prevButton.classList.remove("disabled");
    }
    // Check if current slide is the last
    if (currentSlide == slidesCount) {
      //Add disabled class on next button
      nextButton.classList.add("disabled");
    } else {
      //Remove disabled class from the next button
      nextButton.classList.remove("disabled");
    }
  }
  //Remove All Active Classes from the images and pagination bullets
  function removeAllActive() {
    sliderProjects.forEach(function (project) {
      project.classList.remove("active");
    });
    // loop through pagination bullets
    paginationBullets.forEach(function (bullet) {
      bullet.classList.remove("active");
    });
  }
  