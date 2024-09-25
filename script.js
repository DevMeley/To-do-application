const myInput = document.getElementById("myInput")
const myCancelbtn = document.getElementById("myCancelbtn")
const myAddButton = document.querySelector(".myAddButton")
const myList = document.getElementById("myList")


myAddButton.addEventListener('click' , event => {
    if (myInput.value === '') {
        alert("You have to make a list")
    }
    else{
        const li = document.createElement("li")
        li.innerHTML = myInput.value
        myList.append(li)
        myInput.value = ''
    }

})


