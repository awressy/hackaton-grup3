let form = document.getElementById("form");
let username = document.getElementById("username");
let post = document.getElementById("post");
let thumbpost = document.getElementById("thumbpost");

form.addEventListener("button", (e) => {
    e.preventDefault();
    console.log("button clicked");
  
    eventPost();
});

function eventPost(){
}


//kode username
    if (username.value === "") {
        post.innerHTML = "Please insert a username";
        console.log("failure");
    } else {
        console.log("successs");
        post.innerHTML = "";
        acceptData();
    }
}

let data = {};

function acceptData() {
    data["text"] = username.value;
    console.log(data);
    createPost();
};

function createPost() {
    thumbpost.innerHTML = data.text;
};

function deletePost(){
    
}

function likePost(){

}
