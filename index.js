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
        acceptData();
    }
}


//kode username
    

let data = {};
let result = [];

function acceptData() {
    data["text"] = username.value;
    data["message"] = message.value;
    console.log(data);
    createPost();
};

function createPost() {
    let temp = [data.text, data.message];
    result.unshift(temp);
    let messages = '';
    for(let i = 0; i < result.length; i++){
        messages += `<div class="kotak" id="message-${i}">
            <span class="username">${result[i][0]}</span>
            <div class="post">
                ${result[i][1]}
            </div>
            <div class="like">
                <button class="button button-like">
                    <i class="fa fa-heart"></i>
                    <span>Like</span>
                </button>
            </div>
        </div>`
    }
    thumbpost.innerHTML = messages;
};

function deletePost(){
    
}

function likePost(){

}
