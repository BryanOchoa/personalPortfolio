function toggleMenu(){
    const menu = document.querySelector(".menuLinks")
    const icon = document.querySelector(".hamburgerIcon")
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}

function validateform (){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if(name.length < 3 || !/^[a-zA-Z ]+$/.test(name)) {
        alert("Please enter a valid name with more than 3 characters and no numbers or symbols.");
        return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (message.length > 600) {
        alert("Message must be 600 characters or less.");
        return false;
    }

    return true;
}