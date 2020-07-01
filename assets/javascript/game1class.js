console.log('1class')

class Team {
    constructor() {
        this.shots = 0;
        this.goals = 0;
    }

    shoot() {
        this.shots = this.shots + 1;
        if (Math.random() > 0.5){
            this.goals = this.goals + 1;
        }
    }

    reset() {
        this.shots = 0;
        this.goals = 0;
    }
}

const teamOneShootButton = document.querySelector("#teamone-shoot-button");
const teamOneNumShotsElement = document.querySelector("#teamone-numshots");
const teamOneNumGoalsElement = document.querySelector("#teamone-numgoals");

const teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");
const teamTwoNumShotsElement = document.querySelector("#teamtwo-numshots");
const teamTwoNumGoalsElement = document.querySelector("#teamtwo-numgoals");

const resetButton = document.querySelector("#reset-button");
const resetNumElement = document.querySelector("#num-resets");

let teamOne = new Team();
let teamTwo = new Team()

teamOneShootButton.addEventListener('click', function() {
    teamOne.shoot();
    teamOneNumShotsElement.innerHTML = teamOne.shots;
    teamOneNumGoalsElement.innerHTML = teamOne.goals;
})

teamTwoShootButton.addEventListener('click', function() {
    teamTwo.shoot();
    teamTwoNumShotsElement.innerHTML = teamTwo.shots;
    teamTwoNumGoalsElement.innerHTML = teamTwo.goals;
})

resetButton.addEventListener('click', function() {
    let newResetCount = Number(resetNumElement.innerHTML) + 1;
    resetNumElement.innerHTML = newResetCount;

    teamOne.reset();
    teamTwo.reset();

    teamOneNumShotsElement.innerHTML = teamOne.shots;
    teamOneNumGoalsElement.innerHTML = teamOne.goals;

    teamTwoNumShotsElement.innerHTML = teamTwo.shots;
    teamTwoNumGoalsElement.innerHTML = teamTwo.goals;
})