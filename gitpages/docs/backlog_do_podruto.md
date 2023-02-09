## Histórico de revisão

| Data       | Versão | Descrição | Autor(es) |
| ---------- | ------ | --------- | --------  |
| 25/11/2022 | 0.1 | Criação do documento a partir de reunião com cliente. Essa versão contém apenas uma abstração do conteúdo geral do software. | Arthur D'Assumpção<br>Gabriel de Souza<br>Lucas Queiroz|
| 29/11/2022 | 0.2 | Adição de RF's e RNF's. | Lucas Queiroz |
| 29/11/2022 | 0.3 | Adição de RF's e RNF's. | Arthur D'Assumpção<br>Arthur Trindade |
| 29/11/2022 | 0.4 | Refatoração do arquivo. | Lucas Queiroz |
| 01/12/2022 | 0.5 | Formatação dos requisitos em "Épicos" e "Features" | Arthur D'Assumpção<br>Arthur Trindade<br>Gabriel de Souza<br>Lucas Queiroz<br>Miguel Moreira |
| 02/12/2022 | 0.6 | Atualização do backlog com base nos feedbacks do professor e do cliente | Arthur D'Assumpção<br>Arthur Trindade |
| 05/12/2022 | 0.7 | Adição de alguns US's para revisão | Arthur Trindade |
| 06/12/2022 | 0.8 | Definição dos MVP's 1 e 2 | Arthur D'Assumpção<br>Arthur Trindade<br>Gabriel de Souza<br>Lucas Queiroz<br>Miguel Moreira |
| 06/12/2022 | 0.9 | Refatoração de todo o documento | Arthur Trindade<br>Lucas Queiroz<br>Miguel Moreira |
| 07/12/2022 | 1.0 | Refatoração de todo o documento | Arthur D'Assumpção<br>Arthur Trindade<br>Lucas Queiroz<br>Miguel Moreira |
| 30/01/2023 | 1.1 | Refatoração do E3 e do E4 de acordo com a demanda do cliente. | Arthur Trindade<br>Miguel Moreira |


## Mapeamento de personas

| Persona      | Descrição |
| ---------- | ------ |
| Presidente | é um membro, um diretor e um gerente|
| Diretor | é um membro e um gerente|
| Gerente | é um membro |
| Membro | todos são membros |

## Requisitos não-funcionais

| Número | Categoria         | Descrição                                                    |
| ------ | ----------------- | ------------------------------------------------------------ |
| RNF1   | Implementação     | O front-end do produto deve ser desenvolvido utilizando react. |
| RNF2   | Design            | O produto deve ter uma gaveta lateral à esquerda contendo links para as áreas do site. O usuário pode fechar ou abrir a gaveta. |
| RNF3   | Facilidade de uso | O usuário deve conseguir utilizar o software com facilidade após um tempo de treinamento de duas horas. |
| RNF4   | Portabilidade     | A aplicação deve estar disponível para os navegadores Chrome e Firefox em suas versões mais recentes. |
| RNF5   | Usabilidade       | Caso um usuário tente utilizar uma funcionalidade sem ter permissão para utilizá-la, o sistema deve avisá-lo de que ele não tem permissão de uso da funcionalidade. |

## Épicos

### E1 - Gestão de cadastros
- F1: Atualizar ou editar dados pessoais
    - US1 -> Como membro, quero realizar login no site para ter acesso ao sistema.
    - US2 -> Como membro, devo poder alterar os dados pessoais do meu cadastro para atualizar a minha conta.
- F2: Cadastrar novos usuários e fazer manutenção de usuários cadastrados
    - US1 -> Como diretor, eu devo realizar o cadastro de usuários na plataforma para que eles possam ter acesso ao sistema.
    - US2 -> Como diretor, eu devo poder remover cadastro de usuários da plataforma para removê-los da base de dados do sistema.
    - US3 -> Como diretor, eu devo poder arquivar o cadastro de usuários da plataforma para manter a organização dos usuários.

### E2 - Gestão de áreas 

- F1: Atribuir papéis aos membros cadastrados
    - US1 -> Como diretor, eu quero ser capaz de editar o cargo de membros do sistema para que o cargo de cada usuário estejam em sincronia com seu cargo na Zenit.
    - US2 -> Como diretor, eu quero ser capaz de editar o setor de membros do sistema para que o setor de cada usuário estejam em sincronia com seu setor de trabalho na Zenit.
    
- F2: Criar novas areas no menu lateral
    - US1 -> Como presidente, eu quero ser capaz de criar novas áreas para expansão da empresa.
    - US2 -> Como presidente, eu quero ser capaz de excluir áreas existentes para compactação da empresa.

### E3 - Projetos

- F1: Administrar projetos da empresa
    - US1 -> Como gerente, eu quero classificar projetos para saber quais projetos foram finalizados e quais estão em andamento.
    - US2 -> Como gerente, eu quero arquivar projetos que estão inativos.
    - US3 -> Como gerente, eu quero excluir projetos que perderam a relevancia.
    - US4 -> Como gerente, eu quero criar novos projetos para atender novas demandas.
    - US5 -> Como gerente, eu quero editar projetos para realizar alterações necessárias.

- F2: Editar texto dentro dos projetos
    - US1 -> Como gerente, eu quero editar o texto dentro do projeto para criar e manter o seu conteúdo atualizado. 
    - US2 -> Como gerente, eu quero ter ferramentas que me auxiliem na construção do conteúdo do projeto.
    - US3 -> Como gerente, eu quero salvar o texto para que outros membros possam ler o que escrevi.

### E4 - Tela inicial

- F1: Gerenciar projetos que aparecem na tela inicial
    - US1 -> Como presidente, desejo fixar projetos na tela inicial, para destacar os projetos mais importantes no contexto da empresa.
    - US2 -> Como presidente, desejo desafixar projetos da tela inicial, para manter a organização da tela inicial da plataforma. 
    
- F2: Funcionalidades extras
    - US1 -> Como membro, desejo visualizar o calendário da empresa na tela inicial, para sempre estar atualizado dos enventos mais importantes.
    - US2 -> Como presidente, desejo editar a imagem do banner da tela incial, destacar alguma informação ou contexto da empresa.

## MVP's

| MVP | Funcionalidades | Objetivo |
| :---: | :--------------------------: | -------- |
| 1 | E1-F1<br>E1-F2<br>E2-F1 | Criação do login e cadastramento de novos usuários. |
| 2 | E3-F1<br>E3-F2<br>E4-F1<br>E4-F2  | Fazer a platarforma altamente personalizável e utilizável para Zenit. |
