const teamOneShootButton = document.querySelector("#teamone-shoot-button");
const teamOneNumShotsElement = document.querySelector("#teamone-numshots");
const teamOneNumGoalsElement = document.querySelector("#teamone-numgoals");

const teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");
const teamTwoNumShotsElement = document.querySelector("#teamtwo-numshots");
const teamTwoNumGoalsElement = document.querySelector("#teamtwo-numgoals");

const resetButton = document.querySelector("#reset-button");
const resetNumElement = document.querySelector("#num-resets");

teamOneShootButton.addEventListener('click', function() {
    let newShotsCount = Number(teamOneNumShotsElement.innerHTML) + 1;
    teamOneNumShotsElement.innerHTML = newShotsCount;

    if (Math.random() > 0.5){
        let newGoalsCount = Number(teamOneNumGoalsElement.innerHTML) + 1;
        teamOneNumGoalsElement.innerHTML = newGoalsCount;
    }
})

teamTwoShootButton.addEventListener('click', function() {
    let newShotsCount = Number(teamTwoNumShotsElement.innerHTML) + 1;
    teamTwoNumShotsElement.innerHTML = newShotsCount;

    if (Math.random() > 0.5){
        let newGoalsCount = Number(teamTwoNumGoalsElement.innerHTML) + 1;
        teamTwoNumGoalsElement.innerHTML = newGoalsCount;
    }
})

resetButton.addEventListener('click', function() {
    let newResetCount = Number(resetNumElement.innerHTML) + 1;
    resetNumElement.innerHTML = newResetCount;

    teamOneNumShotsElement.innerHTML = 0;
    teamOneNumGoalsElement.innerHTML = 0;

    teamTwoNumShotsElement.innerHTML = 0;
    teamTwoNumGoalsElement.innerHTML = 0;
})