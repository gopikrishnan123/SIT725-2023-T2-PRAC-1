function changeText(){
    var potentialText = ["text 1","text 2", "text 3", "text 4", "text 5"]
    var num = getRandomNumber(0,potentialText.length - 1)
    console.log("Index: ", num)
    document.getElementById("text").innerHTML = potentialText[num];
    }

    function getRandomNumber(min,max){
    return Math.floor(Math.random()*max);
    }
    