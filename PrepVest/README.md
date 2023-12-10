# PrepVest

### Pages
  - Dashboard
    - Total de provas feitas
    - Total questões corretas (Grafico redondo em %)
    - Total de questões erradas (Grafico redondo em %)
    - Total de questões corrigidas (Grafico redondo em %)
    - Provas recentes
  - Exams (Formulário para criar novo exame e lista de provas (ao clicar deve redirecionar para uma pagina da propria prova))
  - Subjects (Mostrar as matérias com maior maior número de erros em ordem)
  - Wrong Questions (Ordenar por dificuldade, conteúdo, etc) - (Utilizar API do youtube para pesquisar videos sobre o conteúdo e deixar os links para fácil acesso)

### Estrutura
  - Contexto (ExamsContext)
    - Criar um contexto
    - Criar as funções de CRUD  
    - Retornar um provider utilizando children como elemento filho e passando um array com 
    o estado de exames e as funções de CRUD
  - Hook (useExams)
    - Irá usar o contexto (ExamsContext)
    - Retornará o retorno do contexto para facilitar o uso
  - Models  (Exam.js)
    - Criar uma classe para aas provas para deixar a aplicação mais robusta e facilitar no uso das funções do contexto
    - Criar um método privado para validar se o objeto criado é válido

