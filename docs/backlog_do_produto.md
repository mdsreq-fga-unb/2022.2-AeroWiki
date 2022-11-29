## Histórico de revisão

| Data       | Versão | Descrição                                                    | Autor(es)                                               |
| ---------- | ------ | ------------------------------------------------------------ | ------------------------------------------------------- |
| 25/11/2022 | 0.1    | Criação do documento a partir de reunião com cliente. Essa versão contém apenas uma abstração do conteúdo geral do software. | Arthur D'Assumpção<br>Lucas Queiroz<br>Gabriel de Souza |
| 29/11/2022 | 0.2    | Adição de alguns RF's e RNF's | Lucas Queiroz |

## Requisitos funcionais 

1. O usuário, independente de sua classificação, deve conseguir acessar as áreas de gestão da empresa.
2. O usuário deve conseguir, para cada área, criar, ler, alterar e deletar projetos da Zenit.
3. O usuário "presidente" deve ter acesso total para cada uma das áreas, i.e., ele pode criar, alterar, ler e deletar todo o conteúdo de qualquer área.


## Requisitos não funcionais

1. O sistema deve ter as áreas de gestão da Zenit, sendo elas:
  <ul>
    <li>Relações externas</li>
    <li>Pesquisa & desenvolvimento</li>
    <li>Operações</li>
    <li>Marketing</li>
    <li>Comercial</li>
  </ul> 

2. O sistema deve refletir a hierarquia dos cargos da Zenit, i.e.:
  <ul>
    <li>Presidente</li>
    <li>Diretores</li>
    <li>Gerentes de projetos</li>
    <li>Demais membros</li>
  </ul>
  
3.  Para cada tipo de usuário acima devem existir restrições de uso do sistema.

# Levantamento de requisitos dos conteudos do projeto:

1. O site devera ter subareas que serão armazenados os projetos. 

2. As subareas de projetos devem ter a possibilidade de ciração de ferramentas de documentação, como:
 - Criação de tabela, que devera ter as função de criação de linhas e colunas, bem como ferramentas de filtragem
 - Criação de caixas de texto.

3. Todos os projetos devem ser alocados em caixas na areas de trabalho, onde serão reconhecidas através de uma imagem e descrição. o usuario deve conseguir criar caixas nas subareas onde serão links para as areas de projetos.

4. Na criação de caixas deve ter a possibilidade de escolher uma imagem que represente o projeto e um texto que tambem descreva o projeto. 

5. Dentro dos projetos devemos ter a possibilidade de alocar links e conteudos externos, para podermos criar tambem um banco de contuedos que podem fazer o armazenamento de contuedo para a gestãoi do conhecimento.

6. Os projetos devem ter usuarios responsaveis pela edição, podendo ter o acesso controlado, possibilitando a administração de acesso, como só leitura, ou edição, ou acesso negado aos usurios da wiki
