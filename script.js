function Rand(){
    

    let n = (Math.random() * 0xfffff * 1000000).toString(16);

    let code = '#' + n.slice(0, 6);

    document.body.style.backgroundColor = code; //changes the colour of the background

    document.getElementById("color-code").innerHTML = code; //changes the hexcode on h1

    navigator.clipboard.writeText(code); //copies the hexcode to the clipboard of the user
}

document.getElementById("btn").addEventListener("click" , Rand);

Rand();