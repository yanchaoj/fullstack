const searchBtn = document.getElementById('submit')
const createBtn = document.getElementById('create')

searchBtn.addEventListener("click", userinput)

function userinput() {
    const inputText = document.getElementById('submit').value.toUpperCase();
    console.log(inputText)
    $.get(`https://hidden-bastion-86690.herokuapp.com/api/users/${inputText}`, function (data) {
        console.log(data)
        if (inputText === "") {
            alert("Please enter your name!");
        }
       
        else {

        var results = document.querySelector('#results');
        results.innerHTML = "";
        for (var i = 0; i < data.length; i++) {
            var current = data[i];
            console.log(current);

            var span = document.createElement('span');

            var username = document.createElement('div')
            username.classname = "name";
            username.textContent = current.name;
            console.log(username.textContent);
            span.append(username);

            var task = document.createElement('div')
            task.classname = "taskcontent";
            task.textContent = current.task;
            console.log(task.textContent);
            span.append(task);

            results.append(span);


        }
    }
})
                 

}

createBtn.addEventListener("click", createtask)

function createtask(){
    const inputText2 = document.getElementById('create')
    const inputText2value=inputText2.value
    console.log(inputText2value)
    

    fetch('https://hidden-bastion-86690.herokuapp.com/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(inputText2value)

        
    
    })
}