const linkRegister = document.getElementById('linkRegister');
const loader = document.getElementById('loader');
const container = document.getElementById('container');
const singUp = document.getElementById('singUp');



linkRegister.addEventListener('click', (event) =>{
event.preventDefault();
container.style.display= 'none'
singUp.style.display= 'none'
loader.style.display= 'flex'
setTimeout(function (){
    loader.style.display= 'none'
    singUp.style.display= 'block'
    container.style.display= 'block'
    window.location = '/register';

  
}, 5000)


})  


const linkLogin = document.getElementById('linkLogin');
const login = document.getElementById('logIn');

linkLogin.addEventListener('click', (event) =>{
    event.preventDefault();

    container.style.display= 'none'
    login.style.display= 'none'
    loader.style.display= 'flex'

    setTimeout(function (){
        loader.style.display= 'none'
        login.style.display= 'block'
        container.style.display= 'block'
        window.location = '/';
    
      
    }, 5000)
})
