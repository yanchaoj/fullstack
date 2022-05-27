const searchBtn = document.getElementById('submit')
const createBtn = document.getElementById('create')
const deleteBtn = document.getElementById('delete')


searchBtn.addEventListener("click", userinput)
function userinput() {
    const inputText = document.querySelector('#search').value.toUpperCase();
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
            let id=current.id;

            var span = document.createElement('div');
            span.classList.add('span2')
            span.id=id;
            var username = document.createElement('div')
            username.classname = "name";
            username.textContent = current.name;
    
            span.append(username);

            var task = document.createElement('div')
            task.classname = "taskcontent";
            task.textContent = current.task;
       
            span.append(task);

            results.append(span);
            
            let updatebtn=document.createElement('button')
            updatebtn.textContent='update'
            updatebtn.addEventListener("click",()=>{
                updatetask(id)
            })
            span.appendChild(updatebtn)
            // const updateBtn = document.getElementById('update')

        }
    }
})
                 

}

createBtn.addEventListener("click", createtask)
function createtask(){
    const newuser = document.querySelector('#createuser').value.toUpperCase();
    const newtask = document.querySelector('#createtask').value

    console.log(newuser)
    console.log(newtask)

    let newaccount={
        name: newuser,
        task: newtask

    }
    console.log(newaccount)
    fetch('https://hidden-bastion-86690.herokuapp.com/api/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newaccount)
    
    })
}

deleteBtn.addEventListener("click", deletetask)
function deletetask(){
    const olduser = document.querySelector('#createuser').value.toUpperCase();
    const oldtask = document.querySelector('#createtask').value

    console.log(olduser)
    console.log(oldtask)

    let oldaccount={
        name: olduser,
        task: oldtask

    }
    console.log(oldaccount)
    fetch('https://hidden-bastion-86690.herokuapp.com/api/users/:name', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(oldaccount)
    
    })

}


function updatetask(id){
    const updateuser = document.querySelector('#createuser').value.toUpperCase();
    const updatetask = document.querySelector('#createtask').value

    console.log(updateuser)
    console.log(updatetask)

    let updateaccount={
        id:id,
        name: updateuser,
        task: updatetask

    }
    console.log(updateaccount)
    fetch('https://hidden-bastion-86690.herokuapp.com/api/users', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updateaccount)
    
    })


}