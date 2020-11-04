function openCity(evt, workerName, workerSkills) {
  var i, teamTabContent, workSotBtn, workSkillsItem;

  teamTabContent = document.getElementsByClassName("teamTabContent");
  for (i = 0; i < teamTabContent.length; i++) {
    teamTabContent[i].style.display = "none";
  }

  workSkillsItem = document.getElementsByClassName("workSkillsItem");
  for (i = 0; i < workSkillsItem.length; i++) {
    workSkillsItem[i].style.display = "none";
  }

  workSotBtn = document.getElementsByClassName("workSotBtn");
  for (i = 0; i < workSotBtn.length; i++) {
    workSotBtn[i].className = workSotBtn[i].className.replace(" active", "");
  }

  document.getElementById(workerName).style.display = "block";
  evt.currentTarget.className += " active";

  document.getElementById(workerSkills).style.display = "block";
}