(async function(){
    let data= await fetch('http://localhost:4000/registration');
    let response= await data.json();
    document.querySelector('#show').innerHTML=response.map(items=>`
        `)
})