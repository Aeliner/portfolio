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
      //projects
    } else {
      //contact
    }
  }