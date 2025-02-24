const textInput=document.getElementById('text-input')
const check=document.getElementById('check-btn')



function isPalindrome(str){

    const setReverse=str.split("").reverse("").join("")

    return str===setReverse

}

function generatePalindrome(){
    
    const value=textInput.value
    if(isPalindrome(value)){
        alert("P A L I N D R O M E")
    }else{
        alert("Not today!")
    }
  
}



check.addEventListener("click", generatePalindrome)