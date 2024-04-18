// Array de objetos com nomes e notas dos alunos
const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Beto", nota: 5 },
    { nome: "Carlos", nota: 9 },
    { nome: "Daniela", nota: 3 },
    { nome: "Eduardo", nota: 7 },
    { nome: "Fernanda", nota: 6 },
    { nome: "Gabriela", nota: 4 },
    { nome: "Hector", nota: 10 }
];

// Função que filtra e retorna os alunos com nota maior ou igual a 6
function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Uso da função para obter os alunos aprovados
const aprovados = alunosAprovados(alunos);
console.log(aprovados);
