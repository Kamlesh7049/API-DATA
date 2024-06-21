function sub(){
    let nam=document.querySelector("#name").value; 
    let username=document.querySelector("#uname").value; 
    let mobile=document.querySelector("#mobile").value; 
    let password=document.querySelector("#password").value; 
    let cpassword=document.querySelector("#cpassword").value; 
    let obj={
        "name":nam,
        "username":username,
        "mobile no":mobile,
        "password":password,
        "cpassword":cpassword
    }
    fetch('http://localhost:4000/registration',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(obj)
    })


}