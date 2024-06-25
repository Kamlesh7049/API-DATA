function sub(){
    let nam=document.querySelector("#name").value; 
    let username=document.querySelector("#uname").value; 
    let mobile=document.querySelector("#mobile").value; 
    let password=document.querySelector("#password").value; 
    let cpassword=document.querySelector("#cpassword").value; 
    let obj={
        "name":nam,
        "username":username,
        "mobile":mobile,
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
    // Show in front end!
    async function show(){
        let data=await fetch('http://localhost:4000/registration');
        let response=await data.json();
    document.querySelector('#show').innerHTML=response.map(items=>`
        <tr>
        <td>${items.name}</td>
        <td>${items.username}</td>
        <td>${items.mobile}</td>
        <td>${items.password}</td>
        <td>${items.cpassword}</td>
        </tr>`).join(" ");
 }
 