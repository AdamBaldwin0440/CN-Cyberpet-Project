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
const Moodlets = document.getElementsByClassName("Moodlets");
const IntButton = document.getElementsByClassName ("IntButton");
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
        this.name = name;
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
    testDragonName.hunger -= 10;
    testDragonName.thirst -= 10;
    testDragonName.energy -= 10;
    testDragonName.happiness -= 0;
    console.log(testDragonName);
    

    if(testDragonName.hunger <= 50 && testDragonName.hunger > 25){
        Moodlets[0].innerText ="Dragon is hungry";
        document.getElementById("HungerBar").value = testDragonName.hunger;
    } else if(testDragonName.hunger <= 25 && testDragonName.hunger > 0){
        Moodlets[0].innerText ="Dragon is RAVENOUS";
        document.getElementById("HungerBar").value = testDragonName.hunger;
    } else if(testDragonName.hunger == 0){
        clearInterval(Timer);
        Moodlets[0].innerText ="Dragon is now a Skeletal Dragon. You lose!";
        document.getElementById("HungerBar").value = 0
    } else {
        Moodlets[0].innerText ="Dragon is fine";
        document.getElementById("HungerBar").value = testDragonName.hunger;
    }

    if (testDragonName.thirst <= 50 && testDragonName.thirst > 25){
        Moodlets[1].innerText ="Dragon is thirsty";
        document.getElementById("ThirstBar").value = testDragonName.thirst;
    } else if(testDragonName.thirst <= 25 && testDragonName.thirst > 0){
        Moodlets[1].innerText ="Dragon is PARCH";
        document.getElementById("ThirstBar").value = testDragonName.thirst;
    } else if(testDragonName.thirst == 0){
        clearInterval(Timer);
        Moodlets[1].innerText ="Even fire-lizards need hydration! You lose!";
        document.getElementById("ThirstBar").value = 0
    } else {
        Moodlets[1].innerText ="Dragon is fine";
        document.getElementById("ThirstBar").value = testDragonName.thirst;
    }

    if (testDragonName.energy <= 50 && testDragonName.energy > 25){
        Moodlets[2].innerText ="Dragon is tired";
        document.getElementById("EnergyBar").value = testDragonName.energy;
    } else if(testDragonName.energy <= 25 && testDragonName.energy > 0){
        Moodlets[2].innerText ="Dragon is EXHAUSTED";
        document.getElementById("EnergyBar").value = testDragonName.energy;
    } else if(testDragonName.energy == 0){
        clearInterval(Timer);
        Moodlets[2].innerText ="Dragon will never wake up again! You lose!";
        document.getElementById("EnergyBar").value = 0
    } else {
        Moodlets[2].innerText ="Dragon is fine";
        document.getElementById("EnergyBar").value = testDragonName.energy;
    }
    if (testDragonName.happiness <= 50 && testDragonName.energy > 25){
        Moodlets[3].innerText ="Dragon is sad";
        document.getElementById("HappinessBar").value = testDragonName.happiness;
    } else if(testDragonName.happiness <= 25 && testDragonName.happiness > 0){
        Moodlets[3].innerText ="Dragon is DEPRESSED";
        document.getElementById("HappinessBar").value = testDragonName.happiness;
    } else if(testDragonName.happiness == 0){
        clearInterval(Timer); //isn't stopping at zero, can't understand why!
        Moodlets[3].innerText ="Dragon has left this cruel world! You lose!";
        document.getElementById("HappinessBar").value = 0
    } else {
        Moodlets[3].innerText ="Dragon is fine";
        document.getElementById("HappinessBar").value = testDragonName.happiness;
    }

    //must be a less clunky way...
    if(testDragonName.hunger <= 50 && testDragonName.hunger < testDragonName.thirst && testDragonName.hunger < testDragonName.energy && testDragonName.hunger < testDragonName.happiness){
        DragImg[0].style.display = "none";
        DragImg[1].style.display = "block"; //hungry
        DragImg[2].style.display = "none";
        DragImg[3].style.display = "none";
        DragImg[4].style.display = "none";
        DragImg[5].style.display = "none";
    } 
    else if(testDragonName.thirst <= 50 && testDragonName.thirst < testDragonName.hunger && testDragonName.thirst < testDragonName.energy && testDragonName.thirst < testDragonName.happiness){
        DragImg[0].style.display = "none";
        DragImg[1].style.display = "none";
        DragImg[2].style.display = "Block"; //thirsty
        DragImg[3].style.display = "none";
        DragImg[4].style.display = "none";
        DragImg[5].style.display = "none"; 
    }
    else if (testDragonName.energy <= 50 && testDragonName.energy < testDragonName.hunger && testDragonName.energy < testDragonName.thirst && testDragonName.energy < testDragonName.happiness){
        DragImg[0].style.display = "none";
        DragImg[1].style.display = "none";
        DragImg[2].style.display = "none";
        DragImg[3].style.display = "block"; //sleepy
        DragImg[4].style.display = "none";
        DragImg[5].style.display = "none";  
    }
    else if (testDragonName.happiness <= 50 && testDragonName.happiness < testDragonName.hunger && testDragonName.happiness < testDragonName.thirst && testDragonName.happiness < testDragonName.energy){
        DragImg[0].style.display = "none";
        DragImg[1].style.display = "none";
        DragImg[2].style.display = "none";
        DragImg[3].style.display = "none";
        DragImg[4].style.display = "block"; //sad
        DragImg[5].style.display = "none";
    }
    else if (testDragonName.hunger == 0 || testDragonName.thirst == 0 || testDragonName.energy == 0 || testDragonName.happiness == 0){
        DragImg[0].style.display = "none";
        DragImg[1].style.display = "none";
        DragImg[2].style.display = "none";
        DragImg[3].style.display = "none";
        DragImg[4].style.display = "none";
        DragImg[5].style.display = "block"; //dead
    } 
    else {
        DragImg[0].style.display = "block"; //normal
        DragImg[1].style.display = "none";
        DragImg[2].style.display = "none";
        DragImg[3].style.display = "none";
        DragImg[4].style.display = "none";
        DragImg[5].style.display = "none";
    }
}
IntButton[0].addEventListener("click", () => {
    testDragonName.Eats()
})
IntButton[1].addEventListener("click", () => {
    testDragonName.Drinks()
})
IntButton[2].addEventListener("click", () => {
    testDragonName.Sleeps()
})
IntButton[3].addEventListener("click", () => {
    testDragonName.BurnVillage()
})



// testDragonName.Drinks()
// testDragonName.Eats()
// testDragonName.Sleeps()
// testDragonName.BurnVillage()
// testDragonName.Stats();