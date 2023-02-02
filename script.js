// *Commented out elements for JS testing sorry* - Lee
// const Feedback = document.getElementById("InteractionsFeedback");
// const NamePet = document.getElementById("NamePet");
// const NameSub = document.getElementById("NameSub");
// const TypeDrag = document.getElementById("TypeDrag");
// const TypeGob = document.getElementById("TypeGob");
// const NameHeader = document.getElementById("NameHeader");

let PetName

class Pet{
    constructor(name){
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
    // Feedback.innerText = `${this.name} is drinking`;
    //interval/timeout to reset it back to blank?
    return this;
   } 
   Eats(){
    this.hunger += 20;
    this.thirst -= 10;
    // Feedback.innerText = `${this.name} has devoured someone`;
    return this;
   }
   Sleeps(){
    this.energy += 20;
    this.hunger -= 10;
    // Feedback.innerText = `${this.name} is sleeping on their hoard of gold`;    
    return this;
   }
   BurnVillage(){
    this.happiness += 20;
    this.hunger +10;
    this.energy -= 20;
    this.thirst -= 10;
    // Feedback.innerText = `${this.name} is burning a village, bless them`;    
    return this;
   }
   Stats() {
    return console.table({
        name: this.name,
        hunger: this.hunger,
        thirst: this.thirst,
        energy: this.energy,
        happiness: this.happiness,
    });
   }
}

const testDragonName = new Dragon()

testDragonName.Drinks()
testDragonName.Eats()
testDragonName.Sleeps()
testDragonName.BurnVillage()
testDragonName.Stats()

