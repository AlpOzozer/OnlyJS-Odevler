const MAX_GOALS = 20;
let goalCount1 = 0;
let goalCount2 = 0;
const goalNumber1 = document.getElementById("goal-number-1");
const goalNumber2 = document.getElementById("goal-number-2");
const teamName1 = document.getElementById("team-name-1").innerText;
const teamName2 = document.getElementById("team-name-2").innerText;
const teamName1a = document.getElementById("team-name-1");
const teamName2a = document.getElementById("team-name-2");

function increaseGoal1() {
  if (goalCount1 >= MAX_GOALS) {
    alert(teamName1 + " Takımı Kazandı!");
    return;
  }
  goalCount1++;
  goalNumber1.textContent = String(goalCount1);
  if (goalCount1 === MAX_GOALS) alert(teamName1 + " Takımı Kazandı!");
}

function increaseGoal2() {
  if (goalCount2 >= MAX_GOALS) {
    alert(teamName2 + " Takımı Kazandı!");
    return;
  }
  goalCount2++;
  goalNumber2.textContent = String(goalCount2);
  if (goalCount2 === MAX_GOALS) alert(teamName2 + " Takımı Kazandı!");
}

function decreaseGoal1() {
  if (goalCount1 <= 0) return;
  goalCount1--;
  goalNumber1.textContent = String(goalCount1);
}

function decreaseGoal2() {
  if (goalCount2 <= 0) return;
  goalCount2--;
  goalNumber2.textContent = String(goalCount2);
}

function determineGoal1() {
  const value = Number(prompt("Gol Sayısı Kaç Olsun?"));

  if (!Number.isInteger(value) || value < 0) {
    alert("Lütfen geçerli bir sayı giriniz");
    return;
  }
  if (value > MAX_GOALS) {
    alert("20'den fazla gol girilemez");
    return;
  }

  goalCount1 = value;
  goalNumber1.textContent = String(goalCount1);
  if (goalCount1 === MAX_GOALS) alert(teamName1 + " Takımı Kazandı!");
}

function determineGoal2() {
  const value = Number(prompt("Gol Sayısı Kaç Olsun?"));

  if (!Number.isInteger(value) || value < 0) {
    alert("Lütfen geçerli bir sayı giriniz");
    return;
  }
  if (value > MAX_GOALS) {
    alert("20'den fazla gol girilemez");
    return;
  }

  goalCount2 = value;
  goalNumber2.textContent = String(goalCount2);
  if (goalCount2 === MAX_GOALS) alert(teamName2 + " Takımı Kazandı!");
}

function changeTeamName1() {
  const teamValue1 = prompt("Takım Adı Ne Olmalı?");

  teamName1a.textContent = teamValue1;
}

function changeTeamName2() {
  const teamValue2 = prompt("Takım Adı Ne Olmalı?");

  teamName2a.textContent = teamValue2;
}



