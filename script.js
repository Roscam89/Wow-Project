"use strict";

const charClass = document.querySelector(".character-Class");
const charSpec = document.querySelector(".character-Spec");
const mainButton = document.querySelector(".main-Button");
const drop = document.getElementById("character-Class");
const resetButton = document.querySelector(".reset");

const characterArr = [
  {
    name: "Death Kninght",
    specialization: ["Blood", "Frost", "Unholy"],
  },
  {
    name: "Demon Hunter",
    specialization: ["Havoc", "Vengeance"],
  },

  {
    name: "Druid",
    specialization: ["Balance", "Feral", "Guardian", "Restoration"],
  },

  {
    name: "Evoker",
    specialization: ["Devastation", "Preservation", "Augmentation"],
  },

  {
    name: "Hunter",
    specialization: ["Beast Mastery", "Marksmanship", "Survival"],
  },

  { name: "Mage", specialization: ["Arcane", "Fire", "Frost"] },
  { name: "Monk", specialization: ["Brewmaster", "Mistweaver", "Windwalker"] },
  { name: "Paladin", specialization: ["Holy", "Protection", "Retribution"] },
  { name: "Priest", specialization: ["Discipline", "Holy", "Shadow"] },
  { name: "Rogue", specialization: ["Assasination", "Sublety", "Outlaw"] },
  {
    name: "Shaman",
    specialization: ["Elemental", "Enhancement", "Restoration"],
  },
  {
    name: "Warlock",
    specialization: ["Affliction", "Demonology", "Destruction"],
  },
  { name: "Warrior", specialization: ["Arms", "Fury", "Protection"] },
];

for (let i = 0; i < characterArr.length; i++) {
  drop[drop.length] = new Option(characterArr[i].name);
}

drop.addEventListener("change", function () {
  charClass.innerHTML = drop.value;

  for (let i = 0; i < characterArr.length; i++) {
    if (drop.value === characterArr[i].name) {
      let specArr = characterArr[i].specialization;
      let iSpec = Math.floor(Math.random() * specArr.length);
      charSpec.innerHTML = specArr[iSpec];
    }
    console.log(characterArr[i].name);
  }
});

const randomCharacterSelect = function () {
  let iChar = Math.floor(Math.random() * characterArr.length);
  let specArr = characterArr[iChar].specialization;
  let iSpec = Math.floor(Math.random() * specArr.length);

  charClass.innerHTML = characterArr[iChar].name;
  charSpec.innerHTML = specArr[iSpec];
};

mainButton.addEventListener("click", randomCharacterSelect);
resetButton.addEventListener("click", function () {
  charClass.innerHTML = "";
  charSpec.innerHTML = "";
  drop.value = "";
});
