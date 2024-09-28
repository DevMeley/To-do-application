const myInput = document.getElementById("myInput")
const myCancelbtn = document.getElementById("myCancelbtn")
const myAddButton = document.querySelector(".myAddButton")
const myList = document.getElementById("myList")


myAddButton.addEventListener('click' , event => {
    if (myInput.value === '') {
        alert("You have to make a list")
    }
    else{
        let li = document.createElement("li")
        li.textContent = myInput.value
        myList.append(li)

        li.addEventListener('click', event =>{

            li.style.textDecoration = "line-through"
        })
        

        myInput.value = ''
       
    }

})



