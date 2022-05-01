let resultEl = document.getElementById("first-password");
let secondPasswordEl = document.getElementById("second-password");
let thirdPasswordEl = document.getElementById("third-password");
let fourthPasswordEl = document.getElementById("fourth-password");

let randomChars = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
let result = []
let buttonClicked = true
let buttonClicked2 = true
let buttonClicked3 = true
let buttonClicked4 = true



// firstPasswordEl.textContent = generatePasswords()
 //secondPasswordEl.textContent = generatePasswords();
// thirdPasswordEl.textContent = generatePasswords()
// fourthPasswordEl.textContent = generatePasswords()


//function generatePasswords() {
    //for(let i = 0; i <= 8; i++) {
        //let randomNumbers = randomChars[Math.floor(Math.random()* 25)]
        //firstPasswordEl.textContent += randomNumbers
        //secondPasswordEl.textContent += randomNumbers
        //thirdPasswordEl.textContent += randomNumbers
        //fourthPasswordEl.textContent += randomNumbers
        //randomResult.Math.floor(Math.random()* 10 )
    //}
//}

function generatePasswords() {
    if (buttonClicked === true) {
        for(let i = 0; i <= 8; i++) {
            let randomResult = randomChars[Math.floor(Math.random()* 25)]
            result.push(randomResult)
            resultEl.textContent += randomResult
            buttonClicked = false
    }
        //firstPasswordEl.textContent += randomNumbers
        //secondPasswordEl.textContent += randomNumbers
        //thirdPasswordEl.textContent += randomNumbers
        //fourthPasswordEl.textContent += randomNumbers
        //randomResult.Math.floor(Math.random()* 10 )
    }
    //return result
    generatePasswords2()
    generatePasswords3()
    generatePasswords4()
}
// console.log(generatePasswords())
// var item = items[Math.floor(Math.random()*items.length)];


//function generatePasswords() {
    //for(let i = 0; i < randomChars.length; i++) {
        //let randomNumbers = randomChars[Math.floor(Math.random()* 25)]
        //firstPasswordEl.textContent += randomNumbers
        //randomResult.Math.floor(Math.random()* 10 )
    //}
//}


function generatePasswords2() {
    if (buttonClicked2 === true) {
        for(let i = 0; i <= 8; i++) {
        let randomResult = randomChars[Math.floor(Math.random()* 25)]
        result.push(randomResult)
        console.log(result)
        secondPasswordEl.textContent += randomResult
        buttonClicked2 = false
    }
        //firstPasswordEl.textContent += randomNumbers
        //secondPasswordEl.textContent += randomNumbers
        //thirdPasswordEl.textContent += randomNumbers
        //fourthPasswordEl.textContent += randomNumbers
        //randomResult.Math.floor(Math.random()* 10 )
    }
    return result
}

function generatePasswords3() {
    if (buttonClicked3 === true) {
        for(let i = 0; i <= 8; i++) {
            let randomResult = randomChars[Math.floor(Math.random()* 25)]
            result.push(randomResult)
            console.log(result)
            thirdPasswordEl.textContent += randomResult
            buttonClicked3 = false
    }
        //firstPasswordEl.textContent += randomNumbers
        //secondPasswordEl.textContent += randomNumbers
        //thirdPasswordEl.textContent += randomNumbers
        //fourthPasswordEl.textContent += randomNumbers
        //randomResult.Math.floor(Math.random()* 10 )
    }
    return result
}

function generatePasswords4() {
    if (buttonClicked4 === true) {
        for(let i = 0; i <= 8; i++) {
            let randomResult = randomChars[Math.floor(Math.random()* 25)]
            result.push(randomResult)
            console.log(result)
            fourthPasswordEl.textContent += randomResult
            buttonClicked4 = false
    }
        //firstPasswordEl.textContent += randomNumbers
        //secondPasswordEl.textContent += randomNumbers
        //thirdPasswordEl.textContent += randomNumbers
        //fourthPasswordEl.textContent += randomNumbers
        //randomResult.Math.floor(Math.random()* 10 )
    }
    return result
}