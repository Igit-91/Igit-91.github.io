function signIn(){
    let login = document.querySelector('#login').value
    let password = document.querySelector('#password').value

    if(login === 'admin' && password === '1111'){
        location.href = 'index.html'
    }
}

window.addEventListener('keydown', function(e){
    e.key === 'Enter' && signIn()
})