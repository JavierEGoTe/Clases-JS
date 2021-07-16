
class Pokemon {

    name = "";
    type = "";
    evolutions = [];
    
    constructor(name,type,evolutions) {
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;
    }
    attack (){
        return `${this.name}, esta atacando`;
    }
    evolve(evolution = 0){
        const EVOLVE = this.evolutions[evolution] || "";
        let message = "No puedo evolucionar";

        if(EVOLVE){
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }

    }
}

const charmander = new Pokemon('Charmander','Fuego',['Charmaleon','Charizard']);

charmander.evolve();
charmander.evolve(10);