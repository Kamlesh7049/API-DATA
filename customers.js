let response;
(async function(){
    let data= await fetch('http://localhost:4000/registration');
    // let  response= await data.json();
    response= await data.json();
    document.querySelector('#show').innerHTML=response.map(items=>`
    <tr>
    <td>${items.id}</td>
    <td><img width="80px" height="50px" src="${items.img}" alt="internet issue"></td>
    <td>${items.name}</td>
    <td>${items.username}</td>
    <td>${items.mobile}</td>
    <td onclick="del(${items.id})"> <i class="fa fa-trash" aria-hidden="true"></i></td>
    <td onclick="upd(${items.id})"><i class="fas fa-edit"></i></td>
    </tr> 
    `).join(" ");

})();

function del(arg){
    alert(arg )
        let url=`http://localhost:4000/registration/${arg}`;
        let obj= {
            method:"DELETE"
        } 
          
        fetch(url,obj);

}


function upd(id){
    let filterid=response.filter(items=>items.id==id);
    console.log(filterid);


    let formdesign =`<input type="text" placeholder="enter id" id="id1"
    value="${filterid[0].id}"><br>
    <input type="text" placeholder="enter id" id="name1"value="${filterid[0].name}"><br>
    <input type="text" placeholder="enter id" id="img1"value="${filterid[0].img}"><br>
    <input type="text" placeholder="enter id" id="uname1"value="${filterid[0].username}"><br>
    <input type="text" placeholder="enter id" id="mob1"value="${filterid[0].mobile}"><br>
    <input type="text" placeholder="enter id" id="pass1"value="${filterid[0].password}"><br>
    <input type="text" placeholder="enter id" id="cpass1"value="${filterid[0].cpassword}"><br>
    <button onclick="update(${filterid[0].id})">update</button>`;
    document.querySelector('section').style.filter="blur(5px)"
    console.log(id)

    document.querySelector('#updateform').innerHTML=formdesign;




}
function update(id){
    let id1=document.querySelector('#id1').value;
    let nam1=document.querySelector('#name1').value;
    let img1=document.querySelector('#img1').value;
    let username1=document.querySelector('#uname1').value;
    let mobile1=document.querySelector('#mob1').value;
    let password1=document.querySelector('#pass1').value;
    let cpassword1=document.querySelector('#cpass1').value;


    let information={
        "id":id1,
        "name":nam1,
        "img":img1,
        "username":username1,
        "mobile":mobile1,
        "password":password1,
        "cpassword1":cpassword1

    }
    let url=`http://localhost:4000/registration/${id}`;
    let obj={
        method:"PUT",
        header:{
            'content-type':'application/json'
        },
        body:JSON.stringify(information)
    }
    fetch(url,obj);

}
