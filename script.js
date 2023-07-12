let res_nome = document.getElementById('res_nome')
let gravar = document.getElementById('gravar')

gravar.addEventListener('click',()=>{
    let nome = document.getElementById('nome').value
    res_nome.innerHTML = 'nome do cliente é' +nome
})