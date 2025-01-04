const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const generateBtn = document.getElementById('password-button')
const passwordDiv = document.getElementById('password-container')

function generatePasswords(){
    let passwords = ''
    for (let i=0; i < 10; i++){
        let randomNumber = Math.floor(Math.random() * characters.length)
        passwords += characters[randomNumber]
    }
    console.log(passwords)
    return passwords  
}



generateBtn.addEventListener('click', function(){
    passwordDiv.innerHTML = `
    <p class='passWord'>${generatePasswords()}</p>
    <p class='passWord'>${generatePasswords()}</p>
    `
})
