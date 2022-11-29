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