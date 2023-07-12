let res = document.getElementById('res')
let gravar = document.getElementById('gravar')

gravar.addEventListener('click',()=>{
    let nome = document.getElementById('nome').value
    res.innerHTML = 'nome do cliente é' +nome
})