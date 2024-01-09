const form = document.getElementById ('form-a');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

const materia = document.getElementById ('materia');
const nota = document.getElementById ('nota'); 

let linha = '<tr>';
linha += `<th>${materia.value}</th>`;
linha += `<th>${nota.value}</th>`;

linhas += linha;

const corpo = document.querySelector('tbody');
corpo.innerHTML = linhas;

materia.value = '';
nota.value = '';

})