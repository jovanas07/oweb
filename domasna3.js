
var array = new Array("цреша", "круша", "манго","слива","коноп", "целер", "тиква", "зелка", "домат", "киноа");

var random_zbor, blank_zbor, attempts; 
function startGame() 
{
   
    random_zbor = array[Math.floor(Math.random() * array.length)]; 
    blank_zbor = Array(random_zbor.length).fill("_"); 
    for (let i = 0; i < 2; i++) 
    {
        let index; 
        do 
        {
            index = Math.floor(Math.random() * random_zbor.length);
        } 
        while (blank_zbor[index] != "_"); 
        blank_zbor[index] = random_zbor[index];
    }
    document.getElementById("blankword").innerText = blank_zbor.join(" ");
    document.getElementById("attemptsleft").innerText = attempts;
    document.getElementById("message").innerText = "";
    document.getElementById("letterInput").value = "";
}

function guessLetter() 
{
    let letter = document.getElementById("letterInput").value.toLowerCase(); 
    document.getElementById("letterInput").value = "";

    if (letter == "" || letter.length !== 1) 
    {
        alert("Внеси само една буква!"); 
        return;
    }

    let found = false; 
    for (let i = 0; i < random_zbor.length; i++)
    {
        if (random_zbor[i] == letter && blank_zbor[i] == "_")
        {
            blank_zbor[i] = letter; 
            found = true;
        }
    }

    if (found)
    {
        if (!blank_zbor.includes("_")) 
        {
            document.getElementById("message").innerText = "Браво, го погодивте зборот : " + random_zbor + "!";
        }
        else 
        {
            document.getElementById("blankword").innerText = blank_zbor.join(" ");
        }
    } 
    else 
    {
        attempts--;
        document.getElementById("attemptsleft").innerText = attempts;
        if (attempts === 0) 
        {
            document.getElementById("message").innerText = "Играта заврши, нема повеќе обиди! Зборот е: " + random_zbor;
        }
    }
}
addEventListener("load", startGame, false) 