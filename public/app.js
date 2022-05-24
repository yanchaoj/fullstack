const searchBtn = document.getElementById('submit')

searchBtn.addEventListener("click", userinput)

function userinput() {
    const inputText = document.querySelector('input').value;
    console.log(inputText)
     $.get(`https://hidden-bastion-86690.herokuapp.com/api/users/${inputText}`, function (data) {
        console.log(data)
        if (inputText === "") {
            alert("Please enter your name!");
        }
        else {

            var results = document.querySelector('#results');
            results.innerHTML = "";
            for (var i = 0; i < data.length - 1; i++) {
                var current = data[i];
                console.log(current);

                var span = document.createElement('span');
                var username = document.createElement('div')
                username.classname = "name";
                username.textContent = current.name;
                console.log(username);
                span.append(username);

                var task = document.createElement('div')
                task.classname = "taskcontent";
                task.textContent = current.task;
                console.log(task);
                span.append(task);
                
                results.append(span);
                   
                body.append(results);

            }
        }
    })
                 

}



