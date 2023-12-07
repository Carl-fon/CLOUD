const form = document.getElementById("fm");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    let UserContact = {
        name,
        email,
        message
    };
    
    alert('Success!!');

    console.log(UserContact);

    form.reset();
})