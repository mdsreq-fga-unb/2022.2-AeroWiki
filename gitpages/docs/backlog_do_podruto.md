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
| 06/12/2022 | 0.9 | Reformulação de todo o documento | Arthur Trindade<br>Lucas Queiroz<br>Miguel Moreira |
| 07/12/2022 | 0.91 | Reformulação de todo o documento | Arthur D'Assumpção<br>Arthur Trindade<br>Lucas Queiroz<br>Miguel Moreira|

## Mapeamento de personas

| Persona      | Descrição |
| ---------- | ------ |
| Presidente | é um membro, um diretor e um gerente|
| Diretor | é um membro e um gerente|
| Gerente | é um membro|
| Membro | todos são membros |

## Requisitos não-funcionais

| Número | Categoria         | Descrição                                                    |
| ------ | ----------------- | ------------------------------------------------------------ |
| RNF1   | Implementação     | O front-end do produto deve ser desenvolvido utilizando Vue3 com Typescript e Quasar. |
| RNF2   | Design            | O produto deve ter uma gaveta lateral à esquerda contendo links para as áreas do site. O usuário pode fechar ou abrir a gaveta. |
| RNF3   | Facilidade de uso | O usuário deve conseguir utilizar o software com facilidade após um tempo de treinamento de duas horas. |
| RNF4   | Portabilidade     | A aplicação deve estar disponível para os navegadores Chrome e Firefox em suas versões mais recentes. |
| RNF5   | Usabilidade       | Caso um usuário tente utilizar uma funcionalidade sem ter permissão para utilizá-la, o sistema deve avisá-lo de que ele não tem permissão de uso da funcionalidade. |

## Épicos

### E1 - Gestão de cadastros
- F1: Manutenção de dados pessoais.
    - US1 -> Como membro, devo poder alterar os dados pessoais do meu cadastro para atualizar a minha conta.
    - US2 -> Como membro, quero realizar login no site para ter acesso ao sistema.
- F2: Cadastro de membros
    - US1 -> Como diretor, eu devo realizar o cadastro de usuários na plataforma para que eles possam ter acesso ao sistema.
    - US2 -> Como diretor, eu devo poder editar o cadastro de usuários da plataforma para atualizar a base de dados.
    - US3 -> Como diretor, eu devo poder remover cadastro de usuários da plataforma para removê-los da base de dados do sistema.
    - US4 -> Como diretor, eu devo poder arquivar o cadastro de usuários da plataforma para manter a organização dos usuários.

### E2 - Gestão de áreas 

- F1: Atribuição de papel
    - US1 -> Como diretor, eu quero ser capaz de atribuir papéis a membros do sistema para que cada usuário tenha suas funcionalidades bem definidas.
    - US2 -> Como diretor, eu quero ser capaz de editar papel de membros do sistema para que os papéis de cada usuário estejam em sincronia com seu cargo na Zenit.

- F2: Navegação
    - US1 -> Como membro, eu quero ser capaz de visualizar as áreas do sistema para me integrar em todas as áreas  da empresa.
    - US2 -> Como gerente, eu quero ser capaz de visualizar as subáreas  nas áreas do sistema para ter o controle das areas da empresa.
    - US3 -> Como gerente, eu quero ser capaz de visualizar os projetos nas áreas do sistema para ter o controle de projetos da empresa.

- F3: Criar áreas
    - US1 -> Como presidente, eu quero ser capaz de criar novas áreas para expansão da empresa.
    - US2 -> Como presidente, eu quero ser capaz de excluir áreas existentes para compactação da empresa.

### E3 - Projetos

- F1: Administração de projetos.
    - US1 -> Como gerente, eu quero classificar projetos para saber quais projetos foram finalizados e quais estão em andamento.
    - US2 -> Como gerente, eu quero arquivar projetos que estão inativos.
    - US3 -> Como gerente, eu quero excluir projetos que perderam a relevancia.
    - US4 -> Como gerente, eu quero criar novos projetos para atender novas demandas.
    - US5 -> Como gerente, eu quero editar projetos para realizar alterações necessárias.

- F2: Administração de documentos no projeto.
    - US1 -> Como gerente, eu quero excluir documentos para manter o projeto limpo.
    - US2 -> Como gerente, eu quero adicionar novos documentos para o desenvolvimento do projeto

### E4 - Relações externas da Zenit

- F1: Organização de parceiros da empresa.
    - US1 -> Eu, como gerente, desejo cadastrar dados de parceiros da empresa, para facilitar a organização e renovação dos contratos com os mesmos.
    - US2 -> Eu, como gerente, desejo editar dados de parceiros da empresa, para que, caso algum dos dados mude, a organização e renovação de contratos não seja afetada.
    - US3 -> Eu, como gerente, desejo ler dados de parceiros da empresa, para facilitar a organização e renovação dos contratos com os mesmos.
    - US4 -> Eu, como gerente, desejo deletar dados de parceiros da empresa, para que, caso a parceria seja desfeita, a empresa não tome decisões contratuais com não-parceiros.
    
- F2: Organização de eventos.
    - US1 -> Eu, como gerente, desejo calendarizar os eventos que a Zenit participa, para melhor organização da empresa na partcipação do evento.
    - US2 -> Eu, como gerente, desejo editar os eventos que a Zenit participa, para não acontecer confusões com informações desatualizadas de eventos.
    - US3 -> Eu, como gerente, desejo excluir os eventos da Zenit, para não acontecer confusões com informações erradas de eventos.

## MVP's

| MVP | Funcionalidades | Objetivo |
| :---: | :--------------------------: | -------- |
| 1 | E1-F1<br>E1-F2<br>E2-F1<br>E2-F2 | Dar suporte de login, cadastramento e navegação no sisteama. |
| 2 | E3-F1<br>E3-F2<br>E4-F1<br>E4-F2  | Fazer a platarforma está altamente personalizável e usável para Zenit |
