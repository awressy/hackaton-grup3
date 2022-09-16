let form = document.getElementById("form");
let username = document.getElementById("username");
let message = document.getElementById("message");
let thumbpost = document.getElementById("thumbpost");

form.addEventListener("button", (e) => {
    e.preventDefault();
    console.log("button clicked");
    eventPost();
});

function eventPost(){
    if (username.value === "") {
        message.innerHTML = "Please insert a username";
        console.log("failure");
    } else {
        console.log("successs");
        message.innerHTML = "";
        createPost(username.value, document.getElementById("message").value);

    }
}


//kode username

// yang dikomen dihapus aja yaa

// // let data = {};
// // let result = [];

// function acceptData() {
//     data["text"] = username.value;
//     data["message"] = message.value;
//     console.log(data);
//     createPost();
// };
let card = 0;

function createPost(username, message) {
    // let temp = [data.text, data.message];
    // result.unshift(temp);
    // let messages = '';
    // for(let i = 0; i < result.length; i++){
        messages = `<div class="kotak" id="message-${card}">
            <span class="username">${username}</span>
            <div class="post" id="edit-post-${card}">
                ${message}
            </div>

            <div class="like">
                <button class="button button-like" onClick="clickedLike(this)">
                    <i class="fa fa-heart"></i>
                    <span>Like</span>
                </button>
                <button class="button button-like" onclick="deletePost('message-${card}')" >
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    <span>Delete</span>
                </button>
                <button class="button button-like" onclick="editPost('${card}', '${username}', '${message}')" >
                    <i class="fa fa-edit" aria-hidden="true"></i>
                    <span>Edit</span>
                </button>
            </div>
        </div>`
    let past = thumbpost.innerHTML;
    thumbpost.innerHTML = messages + past;
    card += 1
};

function deletePost(card){
    // console.log(test)
    const element = document.getElementById(card);
    element.remove()
}

function editPost(card, username, message){
    // console.log(test)
    //const element = document.getElementById(card);
    const id = document.getElementById(`edit-post-${card}`);
    //id.remove();
    //id.innerHTML ='yhalo'
    id.innerHTML = `
    <div class="post">
        <textarea id="edit-message">${message}</textarea>
    </div>
    <input type="button" value="Edit" onclick="eventEdit('${card}', '${username}')" class="bluk"/>
    <input type="button" value="Cancel" onclick="eventCancel('${card}', '${username}', '${message}')" class="bluk"/>
    `;
}

function eventEdit(card, username){
    const id = document.getElementById(`message-${card}`);
    const message = document.getElementById(`edit-message`).value;
    id.innerHTML = `
        <span class="username">${username}</span>
        <div class="post" id="edit-post-${card}">
            ${message}
        </div>

        <div class="like">
            <button class="button button-like" onClick="clickedLike(this)">
                <i class="fa fa-heart"></i>
                <span>Like</span>
            </button>
            <button class="button button-like" onclick="deletePost('message-${card}')" >
                <i class="fa fa-trash" aria-hidden="true"></i>
                <span>Delete</span>
            </button>
            <button class="button button-like" onclick="editPost('${card}', '${username}', '${message}')" >
                <i class="fa fa-edit" aria-hidden="true"></i>
                <span>Edit</span>
            </button>
        </div>
    `
}

function eventCancel(card, username, message){
    const id = document.getElementById(`message-${card}`);
    id.innerHTML = `
        <span class="username">${username}</span>
        <div class="post" id="edit-post-${card}">
            ${message}
        </div>

        <div class="like">
            <button class="button button-like" onClick="clickedLike(this)">
                <i class="fa fa-heart"></i>
                <span>Like</span>
            </button>
            <button class="button button-like" onclick="deletePost('message-${card}')" >
                <i class="fa fa-trash" aria-hidden="true"></i>
                <span>Delete</span>
            </button>
            <button class="button button-like" onclick="editPost('${card}', '${username}', '${message}')" >
                <i class="fa fa-edit" aria-hidden="true"></i>
                <span>Edit</span>
            </button>
        </div>
    `
}

function clickedLike(element) {
    console.log("button-like clicked");
    if (element.classList.contains('button-like')){
      element.classList.toggle('liked');
    } else {
      element.classList.toggle('button-like');
    }
  }