# __Relatório Comparativo Entre Redux, Hooks e Recoil__

## __Resumo Flux Architecture__
* Facilitar a compreensão do fluxo de dados na aplicação;
* Forma para conseguir resolver a complexidade de dados;
* Responsável por atualizar o estado da aplicação / dados;
* Dados fluem em uma única direção na aplicação;
* Torna a aplicação escalável e fácil de manter;
* Dividido em 4 etapas, nessa sequência:
    - Store - onde a informação fica armazenada
    - UI - interface do usuário, de onde surge as demandas para atualização de estado
    - Actions - quando ocorre a ação do usuário (ex: clique)
    - Reducers - parte de filtragem das informações, trabalha como a ação vai ser executada

-----------------------------------------

## __Comparação entre Redux / Hooks / Recoil__

### _Redux_
* Biblioteca JS de gerenciamento de estado;
* Para aplicações mais robustas e complexas;
* Menos dinâmica;
* Segue o padrão de fluxo unidirecional de dados. 

### _Hooks_
* Programação mais funcional;
* Em componentes de classe não é possível colocar o Hooks;
* Para usar ele, tem que criar componentes funcionais;
* Interface simples.

### _Recoil_
* Biblioteca de gerenciamento de estado;
* Trabalha de modo simples;
* É possível transferir dados para outras áreas da aplicação sem precisar usar muitas linhas de código;
* Uso de Atoms para fragmentar states;
* Fluxo de dados mais detalhado;
* Mais fácil para entender por ser simples.

-----------------------------------------


## __Melhor para uma aplicação de Aluguel de Imóveis__
Eu particularmente preferi o uso do Recoil por ser mais simples de compreender, porém ela é útil para aplicativos menores e mais simples. Como a aplicação é de Aluguel de Imóveis, e levando em consideração que haverá uma grande transição de dados, por consequência, seria uma aplicação robusta e complexa. O ideal seria o uso do __Redux__, justamente por ele ser o recomendável para aplicações grandes e tendo um fluxo de dados previsível e consistente. Além de ser facilmente escalável e da grande comunidade e abundância de informações que ele dispõe.