window.addEventListener("load", function () {
  const sliderMain = this.document.querySelector(".content");

  const buttonList = [];
  const btn__home = this.document.getElementById("btn__home");
  buttonList.push(btn__home);
  const btn__education = this.document.getElementById("btn__education");
  buttonList.push(btn__education);
  const btn__skill = this.document.getElementById("btn__skill");
  buttonList.push(btn__skill);
  const btn__project = this.document.getElementById("btn__project");
  buttonList.push(btn__project);
  const btn__another = this.document.getElementById("btn__another");
  buttonList.push(btn__another);
  const btn__perInfo = this.document.getElementById("btn__perInfo");
  buttonList.push(btn__perInfo);

  const contentsList = [];
  const content__home = this.document.getElementById("content__home");
  contentsList.push(content__home);
  const content__education = this.document.getElementById("content__education");
  contentsList.push(content__education);
  const content__skill = this.document.getElementById("content__skill");
  contentsList.push(content__skill);
  const content__project = this.document.getElementById("content__project");
  contentsList.push(content__project);
  const content__another = this.document.getElementById("content__another");
  contentsList.push(content__another);
  const content__personal = this.document.getElementById(
    "content__personal-info"
  );
  contentsList.push(content__personal);
  let currContent = content__home;
  let currButton = btn__home;

  btn__home.addEventListener("click", () => {
    currContent = content__home;
    currContent.style.display = "flex";
    // currButton = btn__home;
    // currButton.style.color = "#dd6a3d";
    setupContent();
  });
  btn__education.addEventListener("click", () => {
    currContent = content__education;
    currContent.style.display = "flex";
    // currButton = btn__education;
    // currButton.style.color = "#dd6a3d";
    setupContent();
  });
  btn__skill.addEventListener("click", () => {
    currContent = content__skill;
    currContent.style.display = "flex";
    // currButton = btn__skill;
    // currButton.style.color = "#dd6a3d";
    setupContent();
  });
  btn__project.addEventListener("click", () => {
    currContent = content__project;
    currContent.style.display = "flex";
    // currButton = btn__project;
    // currButton.style.color = "#dd6a3d";
    setupContent();
  });
  btn__another.addEventListener("click", () => {
    currContent = content__another;
    currContent.style.display = "flex";
    // currButton = btn__another;
    // currButton.style.color = "#dd6a3d";
    setupContent();
  });
  btn__perInfo.addEventListener("click", () => {
    currContent = content__personal;
    currContent.style.display = "flex";
    // currButton = btn__perInfo;
    // currButton.style.color = "#dd6a3d";
    setupContent();
  });

  const setupContent = () => {
    contentsList.forEach((val) => {
      if (val !== currContent) {
        val.style.display = "none";
      }
    });
  };

  const setupStageButton = () => {
    buttonList.forEach((val) => {
      if (val !== currButton) {
        val.style.color = "white";
      }
    });
  };
});
