## Histórico de revisão

| Data       | Versão | Descrição | Autor(es) |
| ---------- | ------ | --------- | --------  |
| 25/11/2022 | 0.1 | Criação do documento a partir de reunião com cliente. Essa versão contém apenas uma abstração do conteúdo geral do software. | Arthur D'Assumpção<br>Lucas Queiroz<br>Gabriel de Souza |
| 29/11/2022 | 0.2 | Adição de RF's e RNF's. | Lucas Queiroz |
| 29/11/2022 | 0.3 | Adição de RF's e RNF's. | Arthur D'Assumpção<br>Arthur Trindade |
| 29/11/2022 | 0.4 | Refatoração do arquivo. | Lucas Queiroz |
| 01/12/2022 | 0.5 | Formatação dos requisitos em "Épicos" e "Features" | Lucas Queiroz<Abr>Arthur D'Assumpção<br>Arthur Trindade<br>Miguel Moreira<br>Gabriel do Souza |
| 02/12/2022 | 0.6 | Atualização do backlog com base nos feedbacks do professor e do cliente | Arthur D'Assumpção<br>Arthur Trindade |

<br>
<br>

## Requisitos funcionais 
### Presidente
1. O usuário presidente deve poder cadastrar, editar, excluir e arquivar usuários do sistema.  
2. O usuário presidente deve poder atribuir o papel de presidente, diretor, gerente ou membro para qualquer usuário do sistema.
3. O usuário presidente deve poder administrar o acesso de todos os usuários do sistema.
4. O usuário presidente deve poder criar, editar, excluir ou arquivar qualquer área de gestão.
5. O usuário presidente deve poder criar, editar, excluir ou arquivar qualquer subárea de gestão.
6. O usuário presidente deve poder criar, editar, ler, excluir e arquivar qualquer projeto.
### Diretor
7. O usuário diretor deve poder cadastrar e editar gerentes e membros do seu setor.
8. O usuário diretor deve poder atribuir papéis de diretor, gerente ou membro para qualquer gerente ou membro do seu setor.
9. O usuário diretor deve poder administrar o acesso de todos os gerentes e membros do seu setor.
10. O usuário diretor deve poder criar, editar, excluir ou arquivar qualquer subárea de gestão no seu setor.
11. O usuário diretor deve poder criar, editar, ler, excluir e arquivar qualquer projeto no seu setor.
### Gerente de projetos
12. O usuário gerente deve poder atribuir papéis de gerente ou membro para qualquer membro sob sua gerência.
13. O usuário gerente deve poder administrar o acesso de todos os membros sob sua gerência.
14. O usuário gerente deve poder criar, editar, ler, excluir e arquivar projetos sob sua gerência.
### Membro
15. O usuário membro deve conseguir ler todos os documentos de projetos e criar, editar ou excluir documentos de projetos do qual fazem parte;

<br>
<br>

## Requisitos não-funcionais

1. O sistema inicialmente deve ter áreas para os cada setor de gestão da Zenit, sendo eles:
- Relações externas
- Pesquisa & desenvolvimento
- Operações
- Marketing
- Comercial
- Segmentos
- Presidência

2. O sistema deve refletir a hierarquia dos cargos da Zenit através dos diferentes perfis de usuários, sendo eles:
- Presidente
- Diretor
- Gerente de projetos
- Membro

3. Para cada perfil de usuário devem existir restrições de uso do sistema.
4. Qualquer usuário, independente da classificação de seu perfil, deve ter acesso às áreas de gestão do site.
5. Cada área de gestão citada deve possuir uma subárea, chamada *área de trabalho*, que por sua vez possuirá divisões para cada atividade do setor.
6. Todas as divisões devem ser alocadas em caixas na área de trabalho de cada setor e identificadas através de uma image, descrição e classificação.
7. Cada caixa deve levar o usuário para os detalhes do projeto a qual a caixa se refere.
8. A área de trabalho do setor de Marketing será, por padrão, dividida em *Campanhas*, *Gestão da marca*, *Endomarketing* e *Comunicações externas*.
9. A área de trabalho do setor Comercial será, por padrão, dividida em *Vendas* e *Banco de dados de clientes*.
10. A área de trabalho do setor de P&D será, por padrão, dividida em *Projetos* e deve conter todos os projetos da empresa.
11. A área de trabalho do setor de Operações será, por padrão, dividida em *Administração financeira*, *Gestão de pessoas* e *Recursos humanos*.
12. A área de trabalho do setor de Relações externas será, por padrão, dividida em *Eventos* e *Networking*.
13. A área de trabalho do setor de Segmentos será, por padrão, vazia e deve ser preenchida de acordo com as necessidades da empresa.
14. A área de trabalho da Presidência será, por padrão, dividida em "Comissões".

<br>
<br>

## Épicos e funcionalidades

### E1 - Projetos da Zenit
- F1 -> Administração de projetos.
- F2 -> Classificação dos projetos.
### E2 - Gestão de pessoas da Zenit
- F1 -> Administração /  de clientes.
- F2 -> Manutenção de dados pessoais. (Verificar com pessoal dps)

### E3 - Admministração de membros da Zenit
- F1 -> Cadastro de membros
- F2 -> Atribuição de papel

### E4 - Área financeira da Zenit
- F1 -> Controle de entradas financeiras.
- F2 -> Controle de saídas financeiras.
- F3 -> Administração de contratos da empresa.

### E5 - Pesquisa & Desenvolvimento
- F1 -> Administração de produtos.
- F2 -> Administração de serviços.

### E6 - Relações externas da Zenit
- F1 -> Organização de parceiros da empresa.
- F2 -> Organização de eventos.

<br>
<br>

## Produto viável mínimo

| MVP | Funcionalidades | Objetivo | 
| :---: | :--------------------------: | -------- |
| 1 | x<br>x<br>x | Objetivo 1 | 
| 2 | x<br>x<br>x | Objetivo 2 | 