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

## Requisitos funcionais
### Presidente
<ol>
    <li> O usuário presidente deve poder cadastrar, editar, excluir e arquivar usuários do sistema.  
    <li> O usuário presidente deve poder atribuir o papel de presidente, diretor, gerente ou membro para qualquer usuário do sistema.
    <li> O usuário presidente deve poder administrar o acesso de todos os usuários do sistema.
    <li> O usuário presidente deve poder criar, editar, ler, excluir e arquivar qualquer projeto.
</ol>

### Diretor
<ol start = 5>
    <li> O usuário diretor deve poder cadastrar, editar e arquivar gerentes e membros do seu setor.
    <li> O usuário diretor deve poder atribuir papéis de diretor, gerente ou membro para qualquer gerente ou membro do seu setor.
    <li> O usuário diretor deve poder administrar o acesso de todos os gerentes e membros do seu setor.
    <li> O usuário diretor deve poder criar, editar, ler, excluir e arquivar qualquer projeto no seu setor.
</ol>

### Gerente de projetos
<ol start = 9>
    <li> O usuário gerente deve poder atribuir papéis de gerente ou membro para qualquer membro sob sua gerência.
    <li> O usuário gerente deve poder administrar o acesso de todos os membros sob sua gerência.
    <li> O usuário gerente deve poder criar, editar, ler, excluir e arquivar projetos sob sua gerência.
</ol>

### Membro
<ol start = 12>
    <li> O usuário membro deve conseguir ler todos os documentos de projetos e criar, editar ou excluir documentos de projetos do qual fazem parte;
</ol>

## Requisitos não-funcionais

| Número | Categoria         | Descrição                                                    |
| ------ | ----------------- | ------------------------------------------------------------ |
| RNF1   | Implementação     | O front-end do produto deve ser desenvolvido utilizando Vue3 com Typescript e Quasar. |
| RNF2   | Design            | O produto deve ter uma gaveta lateral à esquerda contendo links para as áreas do site. O usuário pode fechar ou abrir a gaveta. |
| RNF3   | Facilidade de uso | O usuário deve conseguir utilizar o software com facilidade após um tempo de treinamento de duas horas. |
| RNF4   | Portabilidade     | A aplicação deve estar disponível para os navegadores Chrome e Firefox em suas versões mais recentes. |
| RNF5   | Usabilidade       | Caso um usuário tente utilizar uma funcionalidade sem ter permissão para utilizá-la, o sistema deve avisá-lo de que ele não tem permissão de uso da funcionalidade. |

## Épicos e funcionalidades

### E1 - Projetos da Zenit
- F1: Administração de projetos.
    - US1 -> Como *presidente da Zenit*, eu quero ser capaz de *administrar as áreas de gestão do sistema* para *limitar ou expandir as funcionalidades e áreas visíveis para diretores, gerentes e membros da empresa*. 
    - US2 -> Como *diretor do setor*, eu quero ser capaz de *administrar as subáreas de gestão de meu setor* para *limitar ou expandir as funcionalidades e subáreas visíveis para gerentes e membros do setor*. 
    - US3 -> Como *gerente de projetos*, eu quero ser capaz de *administrar os projetos da minha subárea* para *limitar ou expandir as funcionalidades e projetos visíveis para os membros do setor*. 
- F2: Classificação dos projetos.
    - US1 -> Como *presidente da Zenit*, eu quero conseguir *classificar qualquer projeto no sistema como “em andamento”* para *organizar projetos e abri-los para edição*. 
    - US2 -> Como *presidente da Zenit*, eu quero conseguir *classificar qualquer projeto no sistema como “finalizado”* para *organizar projetos e fechá-los para edição*. 
    - US3 -> Como *diretor do setor*, eu quero conseguir *classificar projetos das subáreas do meu setor de gestão como “em andamento”* para *organizar projetos e abri-los para edição*. 
    - US4 -> Como *diretor do setor*, eu quero conseguir *classificar projetos das subáreas do meu setor de gestão como “finalizado”* para *organizar projetos e fechá-los para edição*. 
    - US5 -> Como *gerente de projetos*, eu quero conseguir *classificar projetos da minha subárea como “em andamento”* para *organizar projetos e abri-los para edição*. 
    - US6 -> Como *gerente de projetos*, eu quero conseguir *classificar projetos da minha subárea como “finalizados”* para *organizar projetos e fechá-los para edição*. 
### E2 - Gestão de pessoas da Zenit
- F1: Administração e controle dos dados de clientes.
- F2: Manutenção de dados pessoais. (Verificar com pessoal dps)
    - US1 -> Eu, como *usuário*, devo poder *alterar o email cadastrado no sistema* para *atualizar meus dados pessoais*.
    - US2 -> Eu, como *usuário*, devo poder *alterar a senha de acesso ao sistema* para *atualizar meus dados pessoais*. 
### E3 - Administração de membros da Zenit
- F1: Cadastro de membros
    - US1 -> Como *presidente da Zenit*, eu devo realizar *o cadastro de usuários na plataforma* para *que eles possam ter acesso ao sistema*. 
    - US2 -> Como *presidente da Zenit*, eu devo poder editar *o cadastro de usuários da plataforma* para *atualizar a base de dados*. 
    - US3 -> Como *presidente da Zenit*, eu devo poder *arquivar o usuário de ex-funcionários* para *manter a organização dos usuários*. 
    - US4 -> Como *presidente da Zenit*, eu devo poder *remover cadastro de usuários da plataforma* para *removê-los da base de dados do sistema*. 
    - US5 -> Como *diretor do setor*, eu devo realizar *o cadastro de gerentes e membros do meu setor* para *que eles possam ter acesso ao sistema*. 
    - US6 -> Como *diretor do setor*, eu devo poder editar *o cadastro de usuários do meu setor* para *atualizar a base de dados*.
    - US7 -> Como *diretor do setor*, eu devo poder *arquivar o usuário de ex-funcionários do meu setor* para *manter a organização dos usuários*. 
- F2: Atribuição de papel
    - US1 -> Como *presidente da Zenit*, eu quero ser capaz de *atribuir o papel de “presidente” para qualquer usuário cadastrado no sistema* para *atribuir papéis para os usuários*. 
    - US2 -> Como *presidente da Zenit*, eu quero ser capaz de *atribuir o papel de “diretor do setor” para qualquer usuário cadastrado no sistema* para *atribuir papéis para os usuários*. 
    - US3 -> Como *presidente da Zenit*, eu quero ser capaz de *atribuir o papel de “gerente de projetos” para qualquer usuário cadastrado no sistema* para *atribuir papéis para os usuários*. 
    - US4 -> Como *presidente da Zenit*, eu quero ser capaz de *atribuir o papel de “membro” para qualquer usuário cadastrado no sistema* para *atribuir papéis para os usuários*. 
    - US5 -> Como *diretor do setor*, eu quero ser capaz de *atribuir o papel de “diretor do setor” para qualquer usuário no meu setor* para *atribuir papéis para os usuários*. 
    - US6 -> Como *diretor do setor*, eu quero ser capaz de *atribuir o papel de “gerente de projetos” para qualquer usuário no meu setor* para *atribuir papéis para os usuários*. 
    - US7 -> Como *diretor do setor*, eu quero ser capaz de *atribuir o papel de “membro” para qualquer usuário no meu setor* para *atribuir papéis para os usuários*. 
    - US8 -> Como *gerente de projetos*, eu quero ser capaz de *atribuir o papel de “gerente de projetos” para qualquer membro sob minha gerência* para *atribuir papéis para os usuários*. 
    - US9 -> Como *gerente de projetos*, eu quero ser capaz de *atribuir o papel de “membro” para qualquer membro sob minha gerência* para *atribuir papéis para os usuários*. 

### E4 - Área financeira da Zenit
- F1: Controle de entradas financeiras.
- F2: Controle de saídas financeiras.
- F3: Administração de contratos da empresa.

### E5 - Pesquisa & Desenvolvimento
- F1: Administração de produtos.
- F2: Administração de serviços.

### E6 - Relações externas da Zenit
- F1: Organização de parceiros da empresa.

<ol> <div style="text-align:center;"><b>Histórias de usuário</b></div>
    <li >Eu, como gerente, desejo cadastrar dados de parceiros da empresa, para facilitar a organização e renovação dos contratos com os mesmos. </li>
    <li>Eu, como gerente, desejo editar dados de parceiros da empresa, para que, caso algum dos dados mude, a organização e renovação de contratos não seja afetada.</li>
    <li>Eu, como gerente, desejo ler dados de parceiros da empresa, para facilitar a organização e renovação dos contratos com os mesmos.</li>
    <li>Eu, como gerente, desejo deletar dados de parceiros da empresa, para que, caso a parceria seja desfeita, a empresa não tome decisões contratuais com não-parceiros.</li>
</ol>

- F2: Organização de eventos.

## MVP's

| MVP | Funcionalidades | Objetivo |
| :---: | :--------------------------: | -------- |
| 1 | E4F1<br>E4F2<br>E4F3<br>E5F1<br>E5F2 | A aplicação deve auxiliar a Zenit na gestão financeira. |
| 2 | E1F1<br> E1F2<br>E6F1<br>E6F2 | a aplicação deve auxiliar a Zenit no controle de seus projetos, eventos e relações com parceiros. |
