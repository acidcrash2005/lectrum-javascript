class Robot {
    #energy = null;

    constructor(initialEnergy = 0) {
        this.#energy = initialEnergy;
    }

    getEnergy() {
        return this.#energy;
    }

    setEnergy(energy) {
        this.#energy = energy;
    }
}

class CleanerRobot extends Robot {
    constructor(model, initialEnergy = 0) {
        super(initialEnergy);

        // console.log(this.#energy);

        this.model = model;
    }

    getModel() {
        // console.log(this.#energy);
        return this.model;
    }
}

const cleanerRobot = new CleanerRobot('Mark II');

console.log(cleanerRobot.getModel());
console.log(cleanerRobot.getEnergy());
cleanerRobot.setEnergy(100);
console.log(cleanerRobot.getEnergy());
console.log(cleanerRobot.energy);
// console.log(cleanerRobot.#energy);