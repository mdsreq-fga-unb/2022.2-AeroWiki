## Histórico de revisão

| Data       | Versão | Descrição                                                    | Autor(es)                                               |
| ---------- | ------ | ------------------------------------------------------------ | ------------------------------------------------------- |
| 25/11/2022 | 0.1    | Criação do documento a partir de reunião com cliente. Essa versão contém apenas uma abstração do conteúdo geral do software. | Arthur D'Assumpção<br>Lucas Queiroz<br>Gabriel de Souza |
| 29/11/2022 | 0.2    | Adição de RF's e RNF's.                               | Lucas Queiroz                                           |
| 29/11/2022 | 0.3    | Adição de RF's e RNF's.                          | Arthur D'Assumpção<br>Arthur Trindade                   |
| 29/11/2022 | 0.4    | Refatoração do arquivo.                                      | Lucas Queiroz                                           |

## Requisitos funcionais 

1. O usuário "membro" deve conseguir ler todos os documentos de projetos que lhe são liberados; 

2. O usuário "gerente" de cada setor deve conseguir criar, alterar, ler e deletar documentos de projetos da empresa;
3. O usuário "gerente" deve poder bloquear ou liberar áreas e funcionalidades específicas de perfis com menor nível de hierarquia;
4. O usuário "presidente" deve poder criar, ler, alterar e deletar documentos de projetos da empresa;
5. O usuário "presidente" deve poder alterar o perfil de qualquer usuário com menor nível de hierarquia para "gerente ou membro";
6. O usuário "presidente" deve poder bloquear ou liberar áreas e funcionalidades específicas de perfis com menor nível de hierarquia;
7. O usuário "presidente" deve poder criar e remover usuários "membro" e "gerente".

8. O usuário "gerente", ao criar o projeto, deve ter a opção de escolher uma imagem que represente o projeto e uma escrever uma descrição.

9. O usuário "gerente" deve poder, para cada projeto, criar tabelas.

10. O usuário "gerente" deve poder, para cada projeto, criar caixas de texto.

11. O usuário "gerente" deve poder, para cada projeto, alocar links e conteúdos externos.

12. O usuário "gerente" deve poder classificar todos os projetos de seu setor como "em andamento" ou "finalizado".

13. Todos os usuários podem realizar CRUD de arquivos dentro de projetos em andamento;

14. O usuário "gerente" de cada setor pode criar e deletar novos projetos;

## Requisitos não-funcionais

1. O sistema deve ter as áreas de gestão da Zenit, sendo elas:
  <ul>
    <li>Relações externas</li>
    <li>Pesquisa & desenvolvimento</li>
    <li>Operações</li>
    <li>Marketing</li>
    <li>Comercial</li>
  </ul> 

2. O sistema deve refletir a hierarquia dos cargos da Zenit através dos diferentes perfis de usuários. Os perfis são:
  <ul>
    <li> 1 - Presidente</li>
    <li> 2 - Gerentes de projetos</li>
    <li> 3 - Demais membros</li>
  </ul>

​	**Sendo que, quanto menor o número, maior o nível de hierarquia. Um nível de hierarquia tem todos os direitos do nível exatamente inferior.**


3. Para cada perfil de usuário devem existir restrições de uso do sistema.
4. Qualquer usuário, independente da classificação de seu perfil, deve ter acesso às 5 áreas de gestão do site.
5. Cada área de gestão citada deve possuir uma subárea, chamada de *área de trabalho*, que por sua vez possuirá divisões para cada atividade do setor.
6. Todas as divisões devem ser alocadas em caixas na área de trabalho de cada setor e identificadas através de uma imagem e descrição.
7. Apenas o usuario admin de cada setor deve ter permissão para criar novas caixas ou excluir caixas antigas nas suas respectivas áreas de trabalho.
8. Cada caixa deve levar o usuário para os detalhes do projeto a qual a caixa se refere.
9. A área de trabalho do setor de marketing será dividida em *Campanhas*, *Gestão da marca*, *Endomarketing* e *Comunicações externas*.
10. A área de trabalho do setor comercial será dividida em *Vendas* e *Banco de dados de clientes*.
11. A área de trabalho do setor de P&D será dividida em *Projetos* e deve conter todos os projetos da empresa.
12. A área de trabalho do setor de operações será dividida em *Administração financeira*, *Gestão de pessoas* e *Recursos humanos*.
13. A área de trabalho do setor de relações externas será dividida em *Eventos* e *Networking*.
