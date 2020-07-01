console.log('2class')

class Team {
    constructor(shootButtonID, numShotsID, numGoalsID) {
        this.shots = 0;
        this.goals = 0;

        this.shootButton = document.querySelector(shootButtonID);
        this.numShotsElement = document.querySelector(numShotsID);
        this.numGoalsElement = document.querySelector(numGoalsID);
        
    }

    shoot() {
        this.shots = this.shots + 1;
        this.numShotsElement.innerHTML = this.shots
        if (Math.random() > 0.5) {
            this.goals = this.goals + 1;
            this.numGoalsElement.innerHTML = this.goals
        }

    }

    reset() {
        this.shots = 0;
        this.numShotsElement.innerHTML = this.shots
        this.goals = 0;
        this.numGoalsElement.innerHTML = this.goals
    }
}


const resetButton = document.querySelector("#reset-button");
const resetNumElement = document.querySelector("#num-resets");

let teamOne = new Team("#teamone-shoot-button", "#teamone-numshots", "#teamone-numgoals");
let teamTwo = new Team("#teamtwo-shoot-button", "#teamtwo-numshots", "#teamtwo-numgoals");

teamOne.shootButton.addEventListener('click', function () {
    teamOne.shoot();
})

teamTwo.shootButton.addEventListener('click', function () {
    teamTwo.shoot();
})

resetButton.addEventListener('click', function () {
    let newResetCount = Number(resetNumElement.innerHTML) + 1;
    resetNumElement.innerHTML = newResetCount;

    teamOne.reset();
    teamTwo.reset();
})