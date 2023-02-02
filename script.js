


class Pet{
    constructor(name, hunger, thirst, energy, happiness){
        this.name = name;
        this.hunger = 100;
        this.thirst = 100;
        this.energy = 100;
        this.happiness = 100;
    }
}
class Dragon extends Pet{
    constructor() {
        super ()
    }
   Drinks(){
    this.thirst += 20;
    console.log(`${this.name} is drinking`);
    //somewhere.innerText to display this onscreen (ask K where)
    return this
   } 
   Devour(){
    this.hunger += 20;
    this.thirst -= 10;
    console.log(`${this.name} has devoured a princess/maiden/knight`);
    //somewhere.innerText to display this onscreen (ask K where)
    return this
   }
   Sleep(){
    this.energy += 20;
    this.hunger -= 10;
    console.log(`${this.name} is sleeping on their hoard of gold`)
    //somewhere.innerText to display this onscreen (ask K where)
    return this;
   }
   BurnVillage(){
    this.happiness += 20;
    this.hunger +10;
    this.energy -= 20;
    this.thirst -= 10;
    console.log(`${this.name} is having fun rampaging across the land. How lovely`)
    //somewhere.innerText to display this onscreen (ask K where)
    return this
   }
}