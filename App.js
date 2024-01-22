const getColor = () =>{
    // hex code 
    const rendomNumber = Math.floor(Math.random() * 16777215);
    const rendomCode = "#" + rendomNumber.toString(16);
    document.body.style.backgroundColor = rendomCode;
    document.getElementById("color-code").innerText = rendomCode;

    navigator.clipboard.writeText(rendomCode)

}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

getColor();