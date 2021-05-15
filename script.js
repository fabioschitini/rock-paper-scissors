let scoreUser= 0
    let scoreComputer= 0
     let roundNumber= 1
    let scoreArray= []
    let result;
    
    let myArray = Array("rock", "paper", "scissors");

function computerPlay() { return myArray[Math.floor(Math.random() *myArray.length)]};
  
function playRound(playerSelection,computerSelection) {
    if (
        (playerSelection==='rock'&&computerSelection==='scissors')||
        (playerSelection==='paper'&&computerSelection==='rock') ||
        (playerSelection==='scissors'&&computerSelection==='paper')
    )
    {scoreUser++
        roundNumber++
       result=`You Won, "${playerSelection}" beats "${computerSelection}"`

         
         
    }
    else if (
        (playerSelection==="rock"&&computerSelection==="paper")||
        (playerSelection==="paper"&&computerSelection==="scissors")||
        (playerSelection==="scissors"&&computerSelection==="rock")
        )
        {
            scoreComputer++
            roundNumber++
            result=`You Lost,"${computerSelection}" beats "${playerSelection}"`
           
            
        }
        else {result='It was a draw!'
    }

}
let btn=document.querySelectorAll("button")
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
const content1 = document.createElement('div');
content1.classList.add('content1');
const content2 = document.createElement('div');
content2.classList.add('content2');


btn.forEach((btn) => {btn.addEventListener("click",function(e){
    playRound(btn.classList.value,computerPlay())
    content2.textContent=``
    container.appendChild(content2);

content.textContent=`${result}`
container.appendChild(content);
content1.textContent=` YouScore: ${scoreUser} - ComputerScore: ${scoreComputer}`
container.appendChild(content1);
if (scoreUser>=5){
    content.textContent=`${result}`
    container.appendChild(content);
    content1.textContent=`YouScore: ${scoreUser} - ComputerScore: ${scoreComputer}`
    container.appendChild(content1);
    content2.textContent=`You won, Congratulations!`
    container.appendChild(content2);
    scoreUser=0
    scoreComputer=0
}
else if (scoreComputer>=5){
    content.textContent=`${result}`
    container.appendChild(content);
    content1.textContent=` YouScore: ${scoreUser} - ComputerScore: ${scoreComputer}`
    container.appendChild(content1);
    content2.textContent=`You lost, Try it again!`
    container.appendChild(content2);
scoreUser=0
    scoreComputer=0
  };
})
})