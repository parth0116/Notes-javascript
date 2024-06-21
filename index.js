console.log("Welcome to Magical Notes");
shownotes();
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", function (e) {

    let addText = document.getElementById('addText');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addText.value = "";
    console.log(notesObj);
    shownotes();



})
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
             <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
             <div class="card-body">
             <h5 class="card-title">Note ${index+1}</h5>
             <p class="card-text">${element}</p>
             <button onclick="deleteNote(this.id)" class="btn btn-primary" id="${index}">Delete</button>
        </div>
    </div>
                `

    });
    let notesElm=document.getElementById('notes');
    if(notesObj.length!=0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = 'Nothing in the notes'
    }

}
function deleteNote(index){
    console.log('I am Deleting',index);
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    shownotes();

}
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})