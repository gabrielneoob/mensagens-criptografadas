const select = document.querySelector('#cod');
const cesar = document.querySelector('.cesar');
const btn = document.querySelector('button');
const inputText = document.querySelector('#texto');
const chaveCript = document.querySelector('#chave-cript')
const resultado = document.querySelector('#resultado');
const codificarInput = document.querySelector('#codificar')


select.addEventListener('change', ((e) => {
  const valor = select.value;
  (valor === 'cifra-de-cesar') ? cesar.style.display = 'block' : cesar.style.display = 'none'
}))

// function showAscii(e) {
//   e.preventDefault();
//   const valor = inputText.value.toUpperCase();
//   if (inputText.value === '') return

//   console.log(valor.charCodeAt())

//   document.querySelector('#resultado').value = valor.charCodeAt();


// }

// btn.addEventListener('click', showAscii)

// Functions
function codificar(e) {
  e.preventDefault();
  if (inputText.value === '') return
  const valor = inputText.value.toUpperCase().split('');
  const chave = +chaveCript.value;
  let total = []
  if (codificarInput.checked && select.value === 'cifra-de-cesar') {
    valor.forEach((item) => {
      const codigoASC = item.charCodeAt();
      const result = ((codigoASC - 65 + chave) % 26) + 65;
      total.push(String.fromCharCode(result))
    })
    resultado.value = total.join('');
  } else if (!codificarInput.checked && select.value === 'cifra-de-cesar') {
    valor.forEach((item) => {
      const codigoASC = item.charCodeAt();
      const result = ((codigoASC + 65 - chave) % 26) + 65;
      total.push(String.fromCharCode(result))
    })
    resultado.value = total.join('');
  } else if (codificarInput.checked && select.value === 'base-64') {
    const valor = inputText.value;
    const codificar = btoa(valor);
    return resultado.value = codificar;
  } else {
    return resultado.value = atob(inputText.value)
  }

}


btn.addEventListener('click', codificar)
