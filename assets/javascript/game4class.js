console.log('4class')


class Team {
    constructor(teamName) {
        this.shots = 0;
        this.goals = 0;
        this.name = teamName
        
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

    makeTeamElement(isLeft) {
        // parent
        let parentDiv = document.createElement('div');
        if (isLeft){
            parentDiv.className = 'left';
        } else {
            parentDiv.className = 'right';
        }
        
        // heading
        let teamNameElement = document.createElement('h2');
        parentDiv.append(teamNameElement);
        teamNameElement.append(this.name);
        
        // goal div (also shots)
        let shotsGoalsDiv = document.createElement('div');
        parentDiv.append(shotsGoalsDiv);
        shotsGoalsDiv.className = 'goals';

        shotsGoalsDiv.append('SHOTS TAKEN: ')

        // shots element
        this.numShotsElement = document.createElement('span');
        shotsGoalsDiv.append(this.numShotsElement);
        this.numShotsElement.append('0');

        // break
        shotsGoalsDiv.append(document.createElement('br'))

        shotsGoalsDiv.append('GOALS: ')

        // goals element
        this.numGoalsElement = document.createElement('span');
        shotsGoalsDiv.append(this.numGoalsElement);
        this.numGoalsElement.append('0');

        // button div
        let buttonDiv = document.createElement('div');
        parentDiv.append(buttonDiv);

        // button element
        this.shootButton = document.createElement('button');
        buttonDiv.append(this.shootButton);
        this.shootButton.append('SHOOT')

        return parentDiv;
    }
}

class Game {
    constructor(gameName, teamOneName, teamTwoName){

        this.resets = 0;

        this.resetButton
        this.resetNumElement

        this.name = gameName;
        
        this.firstTeam = new Team(teamOneName);
        this.secondTeam = new Team(teamTwoName);

        this.makeGameElement();

        
    }

    reset(){
        this.resets = this.resets + 1;
        this.resetNumElement.innerHTML = this.resets;

        this.firstTeam.reset();
        this.secondTeam.reset();
    }

    makeGameElement(){
        // parent
        let parentDiv = document.createElement('div');

        // title
        let gameTitleElement = document.createElement('h1');
        gameTitleElement.append(this.name);
        parentDiv.append(gameTitleElement);

        // reset area
        let resetDiv = document.createElement('div');
        resetDiv.className = "reset-container"
        parentDiv.append(resetDiv);

        this.resetButton = document.createElement('button');
        this.resetButton.append('SHOOT')
        resetDiv.append(this.resetButton)

        resetDiv.append(document.createElement('br'))
        resetDiv.append('NUMBER OF RESETS: ')

        this.resetNumElement = document.createElement('span')
        this.resetNumElement.append('0');
        resetDiv.append(this.resetNumElement);

        // clear div
        let clearDiv = document.createElement('div');
        clearDiv.className = 'clear';
        parentDiv.append(clearDiv);

        // team 1
        let teamOneElement = this.firstTeam.makeTeamElement(true)
        parentDiv.append(teamOneElement)

        // team 2

        let teamTwoElement = this.secondTeam.makeTeamElement(false)
        parentDiv.append(teamTwoElement)

        // new clear div
        clearDiv = document.createElement('div');
        clearDiv.className = 'clear';
        parentDiv.append(clearDiv);


        document.body.append(parentDiv)
    }
}

// "#reset-button", "#num-resets"

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

let myGame = new Game("Garden Arena","Tigers", "Bulls" );



myGame.firstTeam.shootButton.addEventListener('click', function () {
    myGame.firstTeam.shoot();
})

myGame.secondTeam.shootButton.addEventListener('click', function () {
    myGame.secondTeam.shoot();
})

myGame.resetButton.addEventListener('click', function () {
    myGame.reset();
})


let myNewGame = new Game("ZT&T Tower","Crowns", "Slippers" );

myNewGame.firstTeam.shootButton.addEventListener('click', function () {
    myNewGame.firstTeam.shoot();
})

myNewGame.secondTeam.shootButton.addEventListener('click', function () {
    myNewGame.secondTeam.shoot();
})

myNewGame.resetButton.addEventListener('click', function () {
    myNewGame.reset();
})