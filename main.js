const health = document.querySelector('.health');
const attackHeand = document.querySelector('.attack-heand');
const attackLeg = document.querySelector('.attack-leg');
const healing = document.querySelector('.healing');
const hitBlock = document.querySelector('.health-block');
const swordStrike = document.querySelector('.sword-strike');
let  healthValue = 100;
health.innerHTML = healthValue;

attackHeand.addEventListener('click', ()=>{
    const hit = getRandomNumber(1,5);
    healthValue = healthValue - hit;
    console.log(healthValue);
    upValue();
    showDamage(hit);
    gameOver();
    
})

attackLeg.addEventListener('click', ()=>{
    const hit = getRandomNumber(5,10);
    healthValue = healthValue - hit;
    console.log(healthValue);
    upValue();
    showDamage(hit);
    gameOver();
})
swordStrike.addEventListener('click',()=>{
    const hit = getRandomNumber(5,10);
    healthValue = healthValue - hit;
    console.log(healthValue);
    upValue();
    showDamage(hit);
    gameOver();
})

function upValue(){
    health.innerHTML = healthValue;
}

function gameOver(){
    if(healthValue<= 0){
        alert('GameOver')
        resetGame();
    }
}
function resetGame(){
    healthValue = 100;
    upValue();
}

function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

healing.addEventListener('click', ()=>{
    healthValue = healthValue + getRandomNumber(1,5);
    if (healthValue > 100){
       healthValue = 100;
       
    } 
    upValue();
 
    
    
})

function showDamage(damage){
    const hitDamage = document.createElement('p');
    hitDamage.className = 'damage';
    hitDamage.textContent = `-${damage}`;
    hitBlock.appendChild(hitDamage);
    hitDamage.addEventListener('animationend', ()=>{
        hitDamage.remove;
    })
}

