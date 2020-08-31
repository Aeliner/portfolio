new fullpage("#container", {
    //options here
    autoScrolling: true,
    css3: true,
    anchors: ["home", "about", "projects", "contact"],
    lazyLoading: true,
    afterLoad: function(origin, destination, direction){
      animate(origin, destination, direction);
    },
  });
  var alreadyAnimated = [];
  function animate(origin, destination, direction) {
    let index = destination.index;
    if (alreadyAnimated) {
      if (alreadyAnimated.includes(index)) return;
      else alreadyAnimated.push(index);
    }
    if (index == 0) {
      let content = document.getElementById("homeContent");
      content.style.display = "block";
      let h1home = document.getElementById("h1home");
      let h3home = document.getElementById("h3home");
      let github = document.getElementById("link2home");
      let linkedin = document.getElementById("link1home");
      let resume = document.getElementById("link3home");
      h1home.classList.add(
        "animate__animated",
        "animate__fadeInDown",
        "animate__delay-1s"
      );
      h3home.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-2s");
      github.classList.add(
        "animate__animated",
        "animate__fadeIn",
        "github"
      );
      linkedin.classList.add(
        "animate__animated",
        "animate__fadeIn",
        "linkedin"
      );
      resume.classList.add(
        "animate__animated",
        "animate__fadeIn",
        "resume"
      );
    } else if (index == 1) {
      let content = document.getElementById("aboutContent");
      content.style.display = "block";
      let h3 = document.getElementById("h3About");
      let h3_2 = document.getElementById("h3About2");
      h3_2.classList.add(
        "animate__animated",
        "animate__fadeIn",
        "animate__delay-2s"
      );
      h3.classList.add("animate__animated", "animate__fadeIn");
      let p1 = document.getElementById("p1About");
      let p2 = document.getElementById("p2About");
      p1.classList.add(
        "animate__animated",
        "animate__fadeIn",
        "animate__delay-1s"
      );
      p2.classList.add(
        "animate__animated",
        "animate__fadeIn",
        "animate__delay-1s"
      );
      let imgList = document.getElementsByClassName("imgSkills");
      for (let i = 0; i < imgList.length; i++) {
        let img = imgList[i];
        let delay = 2.25 + 0.25 * i;
        img.classList.add("animate__animated", "animate__fadeInUp");
        img.style.animationDelay = delay + "s";
      }
    } else if (index == 2) {
      let content = document.getElementById("projectsContent");
      content.style.display = "block";
      let h3 = document.getElementById("h3Projects");
      h3.classList.add("animate__animated",
      "animate__fadeIn", "delay-05");
      let lArrow = document.getElementById("prev");
      let rArrow = document.getElementById("next");
      let controls = document.getElementById("controlsDiv");
      controls.classList.add("animate__animated", "animate__fadeIn", "animate__delay-1s");
      lArrow.classList.add("leftArrow","animate__animated", "animate__shakeX", "animate__delay-2s");
      rArrow.classList.add("rightArrow","animate__animated", "animate__shakeX", "animate__delay-2s");

      let project1 = document.getElementById("project1");
      let project2= document.getElementById("project2");
      let project3= document.getElementById("project3");
      let project4=document.getElementById("project4");
      let project5=document.getElementById("project5");

      project1.classList.add("animate__animated", "animate__fadeInUp", "delay-125");
      project2.classList.add("animate__animated", "animate__fadeInUp", "delay-15");
      project3.classList.add("animate__animated", "animate__fadeInUp", "delay-175");
      project4.classList.add("animate__animated", "animate__fadeInUp", "delay-2");
      project5.classList.add("animate__animated", "animate__fadeInUp", "delay-225");
      
      let sliderContainer = document.getElementById("sliderContainer");
      sliderContainer.classList.add("animate__animated", "animate__fadeIn", "animate__delay-1s");
      let sliderUl = document.getElementById("pagination-ul");
      sliderUl.classList.add("animate__animated", "animate__fadeIn", "animate__delay-1s");

      let h3Bottom = document.getElementById("projectsBottomH3");
      h3Bottom.classList.add("animate__animated", "animate__fadeIn", "animate__delay-3s")

    } else {
      //contact
    }
  }