let notesContainer = document.querySelector(".notes_container")
let inputBox = document.querySelectorAll(".input_box")
let btn = document.querySelector(".btn")



btn.addEventListener("click",()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img')
    inputBox.setAttribute('contenteditable','true')
    inputBox.className = 'input_box';
    img.src = './trash.png'
    notesContainer.appendChild(inputBox).appendChild(img)
})

notesContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        updateStorage()
    }else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll(".input_box")
        notes.foreach(nt=>{
            nt.keyup = function(){
                updateStorage()
            }
        })
    }
})



document.addEventListener("keydown",event=>{
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak')
        event.preventDefault()
    }
})


function updateStorage(){
    localStorage.setItem('inputBox',notesContainer.innerHTML)
}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('inputBox')
}

showNotes()