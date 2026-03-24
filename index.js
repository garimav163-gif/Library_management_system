const eb=document.getElementById("eb");
const pb=document.getElementById("pb");
const sb=document.getElementById("sb");
const ob=document.getElementById("ob");

const vb=document.getElementById("vb");
const bx=document.getElementById("bx");
const obx=document.getElementById("obx");
const otp=Math.floor(1000+(Math.random()*8999));
window.alert("Login id : demo@gmail.com password : 12345");
function login(){
    if(eb.value=="demo@gmail.com" && pb.value=="12345") {
        window.alert("Login Succesfully");
        bx.style.display="none";
        obx.style.display="block";
        setTimeout(() =>{
            window.alert(`otp : ${otp}`);
            },2000);

    }

    else{
        window.alert("login failed");
    }
    
}
function verify(){
    if(ob.value==otp ) window.location.href="home.html";
}