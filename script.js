function get() {
    url = "http://127.0.0.1:12345/get_token";
    fetch(url).then(response => response.json()).then((data) => { document.getElementById("resGet").innerHTML = data.token; })
}
let btn = document.getElementById("getBtn");
btn.addEventListener("click", get);




function register() {
    url = "http://127.0.0.1:12345/register";
    let a = document.getElementById("regUsername").value;
    let b = document.getElementById("regData").value;
    let c = document.getElementById("regToken").value;
    params = {
        method: "POST",

        body: JSON.stringify({
            username: a,
            data: b,
            token: c
        }),
        headers: {
            'Content-Type': 'application/json'
        }}

    fetch(url,params).then(response=>{
        if(response.status==200){document.getElementById("resRegister").innerHTML="Registered"; return {error:"Successfully Registered"}; }

    else{return response.json()}})
   .then(data=>{console.log(data);document.getElementById("resRegister").innerHTML=data.error;})}
    
let btn2 = document.getElementById("regBtn");
btn2.addEventListener("click", register);




function post() {
    url = "http://127.0.0.1:12345/get_data";
    let d = document.getElementById("postToken").value;
    params = {
        method: "post",

        body: JSON.stringify({
            "token": d
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, params).then(response => response.json()).then(data => {
        if(data.error!=undefined){
        document.getElementById("resPost").innerHTML=data.error;}
        else{
            document.getElementById("resPost").innerHTML="Success";
        console.log(data);
        document.getElementById("resPostUsername").innerHTML = data.username;
        document.getElementById("resPostData").innerHTML = data.data;
    }});
}
let btn3 = document.getElementById("postBtn");
btn3.addEventListener("click", post);
