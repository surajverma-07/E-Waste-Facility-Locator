// function handlesignup(params) {
//     params.preventDefault()
//     console.log("signup trigerred");  
const url = 'http://loaclhost:5000'
function signup(){
    console.log('something');
    const res = fetch('http://localhost:5000/register-user', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },

        // body : JSON.stringify({username , email, password, city, state})
        body : JSON.stringify({username})
    })

    // return res;
}

const btn = document.querySelector('#form-signup');

btn.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('sign up')
    signup();
})