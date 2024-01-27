"use strict";

async function skillSet() {
  try {
    const skillData = await fetch("skill.json");
    if (!skillData.ok) {
      throw new Error("Failed to fetch data");
    }

    const newSkillData = await skillData.json();
    const sortByLevel = newSkillData.sort((a, b) => b.level - a.level);
    console.log(sortByLevel);
  } catch (error) {
    console.error(error);
    console.log(skillData);
    console.log(newSkillData);
    console.log(error);
  }
}
skillSet();