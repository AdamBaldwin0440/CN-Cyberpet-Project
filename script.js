const Feedback = document.getElementById("InteractionsFeedback");
const NamePet = document.getElementById("NamePet");
const NameSub = document.getElementById("NameSub");
const TypeDrag = document.getElementById("TypeDrag");
const TypeGob = document.getElementById("TypeGob");
const NameHeader = document.getElementById("NameHeader");

let PetName

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
    Feedback.innerText = `${this.name} is drinking`
    //interval/timeout to reset it back to blank?
    return this
   } 
   Devour(){
    this.hunger += 20;
    this.thirst -= 10;
    console.log(`${this.name} has devoured a princess/maiden/knight`);
    Feedback.innerText = `${this.name} has devoured someone`;
    return this
   }
   Sleep(){
    this.energy += 20;
    this.hunger -= 10;
    console.log(`${this.name} is sleeping on their hoard of gold`)
    Feedback.innerText = `${this.name} is sleeping on their hoard of gold`;    
    return this;
   }
   BurnVillage(){
    this.happiness += 20;
    this.hunger +10;
    this.energy -= 20;
    this.thirst -= 10;
    console.log(`${this.name} is having fun rampaging across the land. How lovely`);
    Feedback.innerText = `${this.name} is burning a village, bless them`;    
    return this
   }
}
