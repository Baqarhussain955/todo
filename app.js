var InputBox=document.querySelector(".input_txt")
var listContainer=document.querySelector(".List")


function addd(){
    if(InputBox.value===""){
        alert("write some task")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=InputBox.value
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    InputBox.value=''
    saveData()
}

listContainer.addEventListener("click",function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML=localStorage.getItem("data")
}

showData()