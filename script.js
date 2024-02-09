const btn = document.getElementById('btn');
const res = document.getElementById('res');

btn.addEventListener('click', (e)=>{
  const datoInput = document.getElementById('dato').value;
  e.preventDefault();
  dato = parseInt(datoInput)
  let resultado =1;
  if (dato != NaN && dato != null && dato !="") {
    for (let i = 1; i <= dato; i++){
      resultado *= i;
    }
  } else {
    alert("No puedes ingresar un dato diferente a un numero");
  }
  console.log(resultado);
  res.innerHTML=resultado
})

// const dato = prompt("Por favor ingresa un valor");

// let resultado =1;
// if (dato != NaN && dato != null && dato !="") {
//   for (let i = 1; i <= dato; i++){
//     resultado *= i;
//   }
// } else {
//   alert("No puedes ingresar un dato diferente a un numero");
// }
// console.log(resultado);