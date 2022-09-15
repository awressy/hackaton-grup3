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
        createPost(username.value, message.value);

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
            <div class="post">
                ${message}
            </div>
            <div class="like">
                <button class="button button-like" onclick="deletePost('message-${card}')" >
                <i class="fa fa-trash" aria-hidden="true"></i>
                    <span>Delete</span>
                </button>
            </div>
        </div>`
    thumbpost.innerHTML += messages;
    card += 1
};

function deletePost(card){
    // console.log(test)
    const element = document.getElementById(card);
    element.remove()
}

function likePost(){
    
}
