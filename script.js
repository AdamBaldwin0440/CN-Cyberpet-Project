const NamePet = document.getElementById("NamePet");
const NameSub = document.getElementById("NameSub");
const TypeDrag = document.getElementById("TypeDrag");
const TypeGob = document.getElementById("TypeGob");
const NameHeader = document.getElementById("NameHeader");
const DragImg = document.getElementsByClassName("DragImg");
const GobImg = document.getElementsByClassName("GobImg");
const PetTypeDis = document.getElementById("PetTypeDis");
const TalkBox = document.getElementById("TalkBox");
const InteractText = document.getElementById("InteractText");
const Moodbox = document.getElementById("Moodbox") 


NameSub.addEventListener("click", () => {
    NameHeader.innerText = NamePet.value;
    NamePet.style.display = "none";
    NameSub.style.display = "none";
    }
)
TypeDrag.addEventListener("click", () => {
    TypeGob.style.display = "none";
    DragImg[0].style.display = "block";
    PetTypeDis.style.display = "block";
    PetTypeDis.innerText = "Dragon";
    TypeDrag.style.display = "none";

})
TypeGob.addEventListener("click", () => {
    TypeDrag.style.display = "none";
    GobImg[0].style.display = "block";
    PetTypeDis.style.display = "block";
    PetTypeDis.innerText = "Goblin";
    TypeGob.style.display = "none";

})

>>>>>>> ff2701de0cf2bcc50fae7d6613c6ee40f9ff6cfa


class Pet{

    constructor(name, hunger, thirst, energy, happiness){
        this.name = name; //is ths repeating?
>>>>>>> ff2701de0cf2bcc50fae7d6613c6ee40f9ff6cfa
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
<<<<<<< HEAD
    // Feedback.innerText = `${this.name} is drinking`;
=======
    console.log(`${this.name} is drinking`);
    InteractText.innerText = `${this.name} is drinking`
>>>>>>> ff2701de0cf2bcc50fae7d6613c6ee40f9ff6cfa
    //interval/timeout to reset it back to blank?
    return this;
   } 
   Eats(){
    this.hunger += 20;
    this.thirst -= 10;
    console.log(`${this.name} has devoured a princess/maiden/knight`);
    InteractText.innerText = `${this.name} has devoured someone`;
    return this

   }
   Sleeps(){
    this.energy += 20;
    this.hunger -= 10;
    console.log(`${this.name} is sleeping on their hoard of gold`)
    InteractText.innerText = `${this.name} is sleeping on their hoard of gold`;    

    return this;
   }
   BurnVillage(){
    this.happiness += 20;
    this.hunger +10;
    this.energy -= 20;
    this.thirst -= 10;
<<<<<<< HEAD
    // Feedback.innerText = `${this.name} is burning a village, bless them`;    
    return this;
   }
  
=======
    console.log(`${this.name} is having fun rampaging across the land. How lovely`);
    InteractText.innerText = `${this.name} is burning a village, bless them`;    
    return this
>>>>>>> ff2701de0cf2bcc50fae7d6613c6ee40f9ff6cfa
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


const testDragonName = new Dragon()

setInterval(statDecay, 500);

function statDecay() {
    const 
}

testDragonName.Drinks()
testDragonName.Eats()
testDragonName.Sleeps()
testDragonName.BurnVillage()
testDragonName.Stats()

