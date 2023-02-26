const check = document.getElementById('check');

check.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('dates').value;
    const time = document.getElementById('times').value;
    const msg = document.getElementById('msg').value;
    let obj = {

        name,
        email,
        date,
        time,
        msg,


    }
    console.table(obj);
    const serviceID = "service_x04z4xp";

    const templateID = "template_2ndihht";


    emailjs.send(serviceID, templateID, obj)
        .then(res => {
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('dates').value = "";
            document.getElementById('times').value = "";
            document.getElementById('msg').value = "";
            alert('your message sent successfully');
        }).catch((err) => {
            console.log(err);
        })



})