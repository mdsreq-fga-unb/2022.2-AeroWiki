## Histórico de revisão

| Data       | Versão | Descrição                                                    | Autor(es)                                               |
| ---------- | ------ | ------------------------------------------------------------ | ------------------------------------------------------- |
| 25/11/2022 | 0.1    | Criação do documento a partir de reunião com cliente. Essa versão contém apenas uma abstração do conteúdo geral do software. | Arthur D'Assumpção<br>Lucas Queiroz<br>Gabriel de Souza |
| 29/11/2022 | 0.2    | Adição de alguns RF's e RNF's | Lucas Queiroz |
| 29/11/2022 | 0.3    | Adição de mais alguns RF's e RNF's | Arthur D'Assumpção<br>Arthur Trindade |


## Requisitos funcionais 

1. O sistema deve possuir 3 tipos de usuários:
  <ul>
    <li>Usuário membro.
    <li>Usuário gerente.
    <li>Usuário presidente.
  </ul>

2. Todos os usuários devem estar logados para navegar no site.

3. Todos os usuários, independente do seu tipo, devem ter *acesso* às 5 áreas de gestão do site.

4. O usuário "membro" deve ter acesso às **funcionalidades básicas** do site dentro da sua área de atuação, que são:
  <ul>
    <li>Criar, ler, alterar e deletar documentos de projetos <i>em andamento</i> da empresa.
  </ul>

5. O usuário "gerente" deve ter acesso às **funcionalidades adminstradoras** do site dentro da sua área de atuação, que são:
  <ul>
    <li>Funcionalidades básicas.
    <li>Promover e rebaixar qualquer usuário até o seu nível.
    <li>Limitar e expandir os privilégios de qualquer usuário até o seu nível através do bloqueio ou liberação de áreas e funcionalidades específicas do site.
  </ul>

6. O usuário "presidente" deve ter acesso à **todas as funcionalidades e áreas** do site com privilégios ilimitados, como:
  <ul>
    <li>Funcionalidades administradoras de todas as áreas de gestão.
    <li>Criação e remoção de cadastros do site.
  </ul>


## Requisitos não-funcionais

1. O sistema deve ter 5 áreas de gestão coorespondentes aos setores da Zenit, sendo elas:
  <ul>
    <li>Relações externas</li>
    <li>Pesquisa & desenvolvimento</li>
    <li>Operações</li>
    <li>Marketing</li>
    <li>Comercial</li>
  </ul> 

2. O sistema deve refletir a hierarquia dos cargos da Zenit através dos diferentes tipos de usuários. Os cargos são:
  <ul>
    <li>Presidente</li>
    <li>Diretores</li>
    <li>Gerentes de projetos</li>
    <li>Demais membros</li>
  </ul>
  
3. Para cada tipo de usuário devem existir restrições de uso do sistema.


## Levantamento de requisitos iniciais do projeto

1.  Cada área de gestão citada deve possuir uma subárea, chamada de *área de trabalho*, que por sua vez possuirá divisões para cada atividade do setor.

2. Todas as divisões devem ser alocadas em caixas na área de trabalho de cada setor e identificadas através de uma imagem e descrição.
  <ul>
    <li>Apenas o usuario admin de cada setor deve ter permissão para criar novas caixas ou excluir caixas antigas nas suas respectivas áreas de trabalho.
    <li>O usuário admin de cada setor deve ter a opção de escolher uma imagem que represente o projeto e uma escrever uma descrição.
    <li>Cada caixa deve levar o usuário para os detalhes do projeto a qual a caixa se refere.
  </ul>

3. Dentro de cada caixa de projeto deve haver ferramentas, como:
  <ul>
    <li>Criação de documentos.
    <li>Criação de tabelas com funções de criação de linhas e colunas, bem como ferramentas de filtragem.
    <li>Criação de caixas de texto.
    <li>Alocação de links e conteudos externos, para criar um banco de conteúdos que podem fazer o armazenamento de contuedo para a gestão do conhecimento.
  </ul>

4. Os projetos devem possuir usuarios responsaveis pela edição, podendo ter o acesso controlado, possibilitando a administração de acesso, como só leitura, ou edição, ou acesso negado aos usurios da wiki.

5. A área de trabalho do setor de marketing será dividida em *Campanhas*, *Gestão da marca*, *Endomarketing* e *Comunicações externas*.

6. A área de trabalho do setor comercial será dividida em *Vendas* e *Banco de dados de clientes*.

7. A área de trabalho do setor de pesquisa & desenvolvimento será dividida em *Projetos* e deve conter todos os projetos da empresa.
  <ul>
    <li>Todos os projetos serão classificados como projetos <i>em andamento</i> ou projetos <i>finalizados</i>.
    <li>Apenas o <i>usuário admin do setor</i> pode finalizar projetos em andamento.
    <li>Todos os usuários da área podem realizar as operações de CRUD de arquivos dentro de projetos em andamento.
    <li>Projetos classificados como <i>finalizados</i> não podem ser editados.
    <li>Apenas o <i>usuário admin do setor</i> pode criar novos projetos ou excluir projetos antigos.
    <li>Toda a documentação dentro do projeto será organizada seguindo uma linha do tempo pré-determinada e editável.
  </ul>

8. A área de trabalho do setor de operações será dividida em *Administração financeira*, *Gestão de pessoas* e *Recursos humanos*.

9. A área de trabalho do setor de relações externas será dividida em *Eventos* e *Networking*.