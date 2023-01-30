## Histórico de revisão

| Data       | Versão | Descrição            | Autor(es)                          |
| ---------- | ------ | -------------------- | ---------------------------------- |
| 06/12/2022 |  0.1   | Criação do arquivo   | Lucas Queiroz                      |

## Critérios de refatoração

| Nome                          | Descrição                                                    | Solução                                                      |
| ----------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Nomes insignificantes         | Nomes de funções, classes e variáveis, entre outros, que não revelam o propósito do objeto. | Mudar o nome do objeto, de forma que ele revele o propósito. |
| Código duplicado              | Blocos de código que se repetem.                             | Criar funções para executar o bloco de código.               |
| Funções demasiadamente longas | Funções que, por realizar várias tarefas, são muito longas.  | Extrair funções de dentro da função em questão.              |
| Componentização(React) | Qualquer bloco de código que seja recorrente em dois ou mais arquivos   | Transformar o bloco em componente |

## Exemplos

### Nomes insignificantes

- Antes (em Python):

```python
for x in y:
    z()
```

- Depois:

```python
for aluno in turma:
    alocarEmEquipe(aluno)
```

### Código duplicado

- Antes: 

(no arquivo AlunoService.js)

```javascript
function validarDadosAluno(){
    let valido = Aluno.nome.validate();
    valido = valido && Aluno.idade.validate();
    valido = valido && Aluno.cpf.validate();
    ...
}
```

(no arquivo ProfessorService.js)

```javascript
function validarDadosProfessor(){
	let valido = Professor.idade.validate();
	valido = valido && Professor.nome.validate();
    ...
}
```

- Depois:

(no arquivo validacaoService.js)

```javascript
function validarDados(Item){
    for(key in Item){
        if(Item[key].validate() !== true)
            return false;
    }
    return true;
}
```

(no arquivo AlunoService.js)

```javascript
const valido = validarDados(Aluno);
```

(no arquivo ProfessorService.js)

```javascript
const valido = validarDados(Professor);
```

### Funções demasiadamente longas
- 
Antes (em Python):

```python
def cadastrarUsuario(usuario):
    for key in usuario:
        if(usuario[key].validate() != True)
        	return False
    for key in usuario:
        usuario[key] = None 
    ... # Imagine que essa função tem mais 50 linhas.
   
   	Api.post(usuario)
    return True
```

- Depois:

```python
def cadastrarUsuario(usuario):
    if not validarDados(usuario):
        return False
    limparFormulario(usuario)
    ... # agora, ao invés de 50 linhas, aqui tem apenas 3 linhas, cada uma com uma chamada de função.
    Api.post(usuario)
    
    return True
    
```
