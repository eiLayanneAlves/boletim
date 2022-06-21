var alunos = []
var media = 0;
var soma = 0;

for (let i = 0; i <= 3; i++) {
    const aluno = {
        name: prompt('NOME: '),
        nota1: Number(prompt('NOTA 1:')),
        nota2: Number(prompt('NOTA 2:')),
        nota3: Number(prompt('NOTA 3:')),
        nota4: Number(prompt('NOTA 4:'))

    }
    alunos.push(aluno);
    soma += aluno.nota1.nota2.nota3.nota4
    media = soma / alunos.length;
    console.log(media);

    // zerando os dados para realizar o cálculo dos próximos alunos
    media = 0;
    soma = 0;
}
