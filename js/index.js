const shortSkillArray = ["Php", "Laravel", "CodeIgniter", "Node JS", "Express JS"];
const shortSkillArrayLength = shortSkillArray.length;
const shortSkillSpan = document.getElementById('short-skill-span');
/* Start show randomly skill */
const setShortSkill = function (index) {
    shortSkillSpan.innerHTML = shortSkillArray[index];
}
/* End show randomly skill */
/* Get random index */
const getRandomIndex = function () {
    return Math.floor((Math.random() * shortSkillArrayLength));
}
const setTime = () => {
    setInterval(function () {
        var indexOfArray = getRandomIndex();
        //shortSkillSpan.classList.toggle('fade');
        setShortSkill(indexOfArray);
    }, 1500);
}
setTime();
