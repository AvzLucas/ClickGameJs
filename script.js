//Variables wich makes the clicks work
let clicks       = 0; //Number of clicks
let baseClicks   = 1; //Initial Value of the click
let upgradePrice = 50;
let upgrades     = 0;

const div              = document.querySelector('#div');
const displayContador  = document.querySelector('#contador');
const intimidation     = document.querySelector('#intimidation')
const reset            = document.querySelector('#reset');
const buttonMoreClicks = document.querySelector('#moreClicks');

function incrementClick(){

    clicks = baseClicks + clicks;
    displayContador.innerHTML = '<center>'+ clicks + '</center>';

}
function showIntimidatiton(){

    if(clicks == 10){ //vai mostrar quand chegar em 10
        intimidation.innerHTML = '<center> There are too many clicks going on here plz stop </center>';
    }else if(clicks == 50){ //vai mostrar quando chegar em 50
        intimidation.innerHTML = '<center> Stop it man, are you nuts? </center>';
    }else if(clicks == 100){ //vai mostrar quando chegar em 50
        intimidation.innerHTML = '<center> If you click again ill beat your ass </center>';
    }else if(clicks == 101){ //vai mostrar quando chegar em 50
        intimidation.innerHTML = '<center> HAVE YOU LOST YOUR MIND BASTARD??? </center>';
    }
}
function Reset(){
    
    clicks = 0;
    moreClicks = 0;
    baseClicks = 0;
    displayContador.innerHTML = '<center>'+ clicks + '</center>';
    intimidation.innerHTML = '<center></center>';

}
function calculateUpgradePrice(){

    clicks = clicks - upgradePrice;
    upgradePrice = 50 * baseClicks;
    console.log(upgradePrice);
    console.log(clicks);

}

div.onclick = ()=>{
    
    incrementClick();
    showIntimidatiton();
    
};
reset.addEventListener('click',()=>{

    Reset();

});
buttonMoreClicks.addEventListener('click',()=>{

    if(clicks >= upgradePrice){ 
        
        baseClicks++;
        upgrades++;
        calculateUpgradePrice()
        displayContador.innerHTML = '<center>'+ clicks + '</center>';
       
    }
   

});