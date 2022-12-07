## Histórico de revisão

| Data       | Versão | Descrição | Autor(es) |
| ---------- | ------ | --------- | --------  |
| 25/11/2022 | 0.1 | Criação do documento a partir de reunião com cliente. Essa versão contém apenas uma abstração do conteúdo geral do software. | Arthur D'Assumpção<br>Lucas Queiroz<br>Gabriel de Souza |
| 29/11/2022 | 0.2 | Adição de RF's e RNF's. | Lucas Queiroz |
| 29/11/2022 | 0.3 | Adição de RF's e RNF's. | Arthur D'Assumpção<br>Arthur Trindade |
| 29/11/2022 | 0.4 | Refatoração do arquivo. | Lucas Queiroz |
| 01/12/2022 | 0.5 | Formatação dos requisitos em "Épicos" e "Features" | Lucas Queiroz<br>Arthur D'Assumpção<br>Arthur Trindade<br>Miguel Moreira<br>Gabriel de Souza |
| 02/12/2022 | 0.6 | Atualização do backlog com base nos feedbacks do professor e do cliente | Arthur D'Assumpção<br>Arthur Trindade |
| 05/12/2022 | 0.7 | Adição de alguns US's para revisão | Arthur Trindade |
| 06/12/2022 | 0.8 | Definição dos MVP's 1 e 2 | Lucas Queiroz<br>Arthur Trindade<br>Miguel Moreira<br>Arthur D'Assumpção<br>Gabriel de Souza |
| 06/12/2022 | 0.9 | Reformulação de todo o documento | Lucas Queiroz<br>Arthur Trindade<br>Miguel Moreira |

## Mapeamento de personas

| Persona      | Oq é |
| ---------- | ------ |
| Membro | Todos são membros |
| Gerente | é um membro|
| Diretor | é um membro e um gerente|
| Presidente | é um membro, um diretor e um gerente|

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
    - US1 -> Como Membro, devo poder alterar os dados pessoais do meu cadastro para maior organização da minha conta .
    - US2 -> Como Membro, quero realizar login no sistema para ter acesso ao sistema
- F2: Cadastro de membros
    - US1 -> Como diretor, eu devo realizar o cadastro de usuários na plataforma para que eles possam ter acesso ao sistema.
    - US2 -> Como diretor, eu devo poder editar o cadastro de usuários da plataforma para atualizar a base de dados.
    - US4 -> Como diretor, eu devo poder remover cadastro de usuários da plataforma para removê-los da base de dados do sistema.
    - US5 -> Como diretor, eu devo poder arquivar o cadastro de usuários da plataforma para manter a organização dos usuários.

### E2 - Gestão de areas

- F1: Atribuição de papel
    - US1 -> Como gerente, eu quero ser capaz de atribuir papel a membros do sistema para ter um controle de hierarquia.
    - US2 -> Como gerente, eu quero ser capaz de editar papel de membros do sistema para ter uma maior organização dos membros .

- F2: Navegação
    - US1 -> Como membro, eu quero ser capaz de visualizar as areas do sistema para me integrar em todas as areas da empresa.
    - US2 -> Como gerente, eu quero ser capaz de visualizar os projetos nas areas do sistema para ter o controle de projetos da empresa.

### E3 - Projetos

- F1: Administração de projetos.
    - US1 -> Como gerente, eu quero classificar projetos para organização do sistema.
    - US2 -> Como gerente, eu quero arquivar/excluir novos projetos para organização do sistema.
    - US3 -> Como gerente, eu quero criar novos projetos para organização do sistema.
    - US4 -> Como gerente, eu quero editar projetos para organização do sistema.

- F2: Administração de documentos no projeto.
    - US1 -> Como gerente, eu quero arquivar/excluir documentos para organização do projeto
    - US2 -> Como gerente, eu quero adicionar novos documentos para organização do projeto

### E4 - Área financeira da Zenit

- F1: Controle de Finanças.
    - US1 -> 
    
- F2: Administração de contratos da empresa.
    - US1 -> 

### E5 - Pesquisa & Desenvolvimento

- F1: Administração de produtos.
    - US1 -> 
    
- F2: Administração de serviços.
    - US1 -> 

### E5 - Relações externas da Zenit

- F1: Organização de parceiros da empresa.
    - US1 -> Eu, como gerente, desejo cadastrar dados de parceiros da empresa, para facilitar a organização e renovação dos contratos com os mesmos.
    - US2 -> Eu, como gerente, desejo editar dados de parceiros da empresa, para que, caso algum dos dados mude, a organização e renovação de contratos não seja afetada.
    - US3 -> Eu, como gerente, desejo ler dados de parceiros da empresa, para facilitar a organização e renovação dos contratos com os mesmos.
    - US4 -> Eu, como gerente, desejo deletar dados de parceiros da empresa, para que, caso a parceria seja desfeita, a empresa não tome decisões contratuais com não-parceiros.
    
- F2: Administração de serviços.
    - US1 ->

## MVP's

| MVP | Funcionalidades | Objetivo |
| :---: | :--------------------------: | -------- |
| 1 | E4F1<br>E4F2<br>E4F3<br>E5F1<br>E5F2 | A aplicação deve auxiliar a Zenit na gestão financeira. |
| 2 | E1F1<br> E1F2<br>E6F1<br>E6F2 | a aplicação deve auxiliar a Zenit no controle de seus projetos, eventos e relações com parceiros. |