console.log('3class')

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

class Game {
    constructor(teamOneInfo, teamTwoInfo, resetButtonID, numResetsID){

        this.resets = 0;

        this.firstTeam = new Team(...teamOneInfo);
        this.secondTeam = new Team(...teamTwoInfo);

        this.resetButton = document.querySelector(resetButtonID);
        this.resetNumElement = document.querySelector(numResetsID);
    }

    reset(){
        this.resets = this.resets + 1;
        this.resetNumElement.innerHTML = this.resets;

        this.firstTeam.reset();
        this.secondTeam.reset();
    }
}



let teamOneInfo = [
    "#teamone-shoot-button",
    "#teamone-numshots",
    "#teamone-numgoals"
]

let teamTwoInfo = [
    "#teamtwo-shoot-button",
    "#teamtwo-numshots",
    "#teamtwo-numgoals"
]

let myGame = new Game(teamOneInfo, teamTwoInfo, "#reset-button", "#num-resets");

myGame.firstTeam.shootButton.addEventListener('click', function () {
    myGame.firstTeam.shoot();
})

myGame.secondTeam.shootButton.addEventListener('click', function () {
    myGame.secondTeam.shoot();
})

myGame.resetButton.addEventListener('click', function () {
    myGame.reset();
})