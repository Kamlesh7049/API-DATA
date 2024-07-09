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
    <td onclick="upd(${items.id})><i class="fas fa-edit"></i></td>
    </tr> 
    `).join(" ");

})();

function del(arg){
    alert(arg)
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
    let formdesign =<input type="text" placeholder="enter id" id="name1"
    value="${filterid[0].name}"><br>
    let formdesign =<input type="text" placeholder="enter id" id="img1"
    value="${filterid[0].img}"><br>
    let formdesign =<input type="text" placeholder="enter id" id="uname1"
    value="${filterid[0].username}"><br>
    let formdesign =<input type="text" placeholder="enter id" id="mob1"
    value="${filterid[0].mobile}"><br>
    let formdesign =<input type="text" placeholder="enter id" id="pass1"
    value="${filterid[0].password}"><br>
    let formdesign =<input type="text" placeholder="enter id" id="cpass1"
    value="${filterid[0].cpassword}"><br>
    <button onclick="update(${filterid[0].id})">update</button>`;
    document.querySelector('section').style.filter="blur(5px)"
    console.log(id)

    document.querySelector('#updateform').innerHTML=formdesign;



}



