const searchBtn=document.getElementById('submit')

searchBtn.addEventListener("click",userinput)
function userinput()
{
    const inputText = document.querySelector('input').value;
    console.log(inputText)
    if (inputText === ""){
        alert("Please input a userID!");
      }

}