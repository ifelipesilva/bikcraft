// ativar links menu

const links = document.querySelectorAll('.header-menu a')


function ativarLink(link){
  const url = location.href
  const href = link.href

  
  if(url.includes(href)){
    link.classList.add('ativo')
  }

}


links.forEach(ativarLink)


// ativar items do orçamento
const parametros = new URLSearchParams(location.search) 


function ativarProduto(parametro){
  const element = document.getElementById(parametro)
  if(element){
    element.checked = true
  }
}

parametros.forEach(ativarProduto)