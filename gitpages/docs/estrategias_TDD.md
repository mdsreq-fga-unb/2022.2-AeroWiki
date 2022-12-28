## Histórico de revisão

| Data       | Versão | Descrição            | Autor(es)                          |
| ---------- | ------ | -------------------- | ---------------------------------- |
| 07/12/2022 |  0.1   | Criação do arquivo   | Gabriel De Souza Fonseca Ribeiro   |


| Nome                          | Descrição                                                    | Solução                                                      |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Critérios para uso | Todos os integrantes da equipe ao implementar uma nova funcionalidade devem utilizar o TDD | Usando o pair programming e as boas práticas do xp para implementar as funcionalidades |
| Novo Teste       | Nessa etapa, é muito importante entender exatamente qual é a finalidade da função, seus requisitos, entradas e saídas, pois só assim você conseguirá criar o teste corretamente. | Criar o teste |
| Teste Falhando            |Nesse momento, o teste já está pronto. No entanto, uma vez que o código da função ainda não foi implementado, o teste obviamente vai falhar ao ser executado.                            | Criar funções para executar o bloco de teste.               |
| Criar funcionalidade | Após a execução e falha do teste, chega o momento de escrever o código da nova funcionalidade  |  Criar o código da sua maneira, sem se prender às boas práticas e design patterns.            |
|Refatorar           | Com a funcionalidade pronta, o teste é executado novamente. Dessa vez, no entanto, é esperado que ele passe. | Nessa etapa, você deve melhorar o seu código, extraindo classes e interfaces, reduzindo o acoplamento, retirando as duplicidades e fazendo qualquer alteração que traga alguma otimização, desde que elas não insiram erros no código. |

## Exemplo

### Crie um arquivo index.test.js
```javascript
  test('espera que a soma de 1 + 2 seja 3', () => { // descrição do teste
  const a = 1 // primeiro valor
  const b = 2 // segundo valor
  const soma = 0 // soma dos dois valores

  expect(soma).toBe(3) // espera que a soma seja 3
});
```

### Escrevendo a funcionalidade
```javascript
  function somar(a, b) {
    return 0
}

  module.exports = {
    somar, // exporta a funcionalidade
  }
```
### Linkando a função com o teste
```javascript
const { somar } = require('./index') // importamos a nossa funcionalidade

test('espera que a soma de 1 + 2 seja 3', () => { // descrição do teste
  const a = 1 // primeiro valor
  const b = 2 // segundo valor
  const soma = somar(a, b) // soma dos dois valores

  expect(soma).toBe(3) // espera que a soma seja 3
});
```
### Refatorando a função
```javascript
  function somar(a, b) { // parâmetros da soma
    const soma = a + b // realiza a soma dos dois valores
    return soma // retorna o valor da soma
  }

  module.exports = {
    somar, // exporta a funcionalidade
  }
```
### Referências
https://blog.betrybe.com/tecnologia/tdd-test-driven-development/