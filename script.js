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
const MoodBox = document.getElementById("MoodBox"); 
let testDragonName = null;
let Timer = null;

NameSub.addEventListener("click", () => {
    NameHeader.innerText = NamePet.value;
    NamePet.style.display = "none";
    NameSub.style.display = "none";
    testDragonName = new Dragon(NamePet.value);
    
    }
)
TypeDrag.addEventListener("click", () => {
    TypeGob.style.display = "none";
    DragImg[0].style.display = "block";
    PetTypeDis.style.display = "block";
    PetTypeDis.innerText = "Dragon";
    TypeDrag.style.display = "none";
    Timer = setInterval(DecreaseStats, 1000);
})
TypeGob.addEventListener("click", () => {
    TypeDrag.style.display = "none";
    GobImg[0].style.display = "block";
    PetTypeDis.style.display = "block";
    PetTypeDis.innerText = "Goblin";
    TypeGob.style.display = "none";

})

class Pet{
    constructor(name){
        this.name = name; //is ths repeating?
        this.hunger = 100;
        this.thirst = 100;
        this.energy = 100;
        this.happiness = 100;
    }
}
class Dragon extends Pet{
    constructor(name) {
        super(name)
    }
   Drinks(){
    this.thirst += 20;
    console.log(`${this.name} is drinking`);
    InteractText.innerText = `${this.name} is drinking`
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
    console.log(`${this.name} is having fun rampaging across the land. How lovely`);
    InteractText.innerText = `${this.name} is burning a village, bless them`;    
    return this
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


const DecreaseStats = () =>{
    testDragonName.hunger -= 5;
    // testDragonName.thirst -= 10;
    // testDragonName.energy -=10;
    // testDragonName.happiness -= 10;
    console.log(testDragonName)

    if(testDragonName.hunger <= 50 && testDragonName.hunger > 25){
        MoodBox.innerText = "Dragon is hungry";
        document.getElementById("HungerBar").value = testDragonName.hunger;
    } else if(testDragonName.hunger <= 25 && testDragonName.hunger > 0){
        MoodBox.innerText = "Dragon is RAVENOUS";
        document.getElementById("HungerBar").value = testDragonName.hunger;
    }else if(testDragonName.hunger == 0){
        clearInterval(Timer);
        MoodBox.innerText = "Dragon is now a Skeletal Dragon. You lose!";
        document.getElementById("HungerBar").value = 0
    } else {
        // when pet is still alive
        document.getElementById("HungerBar").value = testDragonName.hunger
        MoodBox.innerText = "Dragon is fine"
    }
            
}

// setInterval(statDecay, 500);

// // function statDecay() {
// //     const 
// // }

// testDragonName.Drinks()
// testDragonName.Eats()
// testDragonName.Sleeps()
// testDragonName.BurnVillage()
// testDragonName.Stats()

