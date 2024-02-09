const questoes = [
    {
      questao: "Qual é a unidade básica de armazenamento de dados em um computador?",
      respostas: [
        "Byte",
        "Bit",
        "Kilobyte",
        "Megabyte",
      ],
      certa: 1
    },
    {
      questao: "Qual dos seguintes dispositivos é utilizado para entrada de dados em um computador?",
      respostas: [
        "Monitor",
        "Teclado",
        "Impressora",
        "Caixa de som",
      ],
      certa: 1
    },
    {
      questao: "O que é um sistema operacional?",
      respostas: [
        "Um tipo de software antivírus",
        "Um conjunto de programas que controla o hardware e auxilia na execução de outros programas",
        "Uma unidade de armazenamento de dados",
        "Um dispositivo de entrada de dados",
      ],
      certa: 1
    },
    {
      questao: "O que significa a sigla 'CPU'?",
      respostas: [
        "Central Processing Unit",
        "Computer Program Utility",
        "Central Personal Unit",
        "Computer Peripheral Unit",
      ],
      certa: 0
    },
    {
      questao: "Qual destes não é um tipo de arquivo de imagem?",
      respostas: [
        "JPEG",
        "MP3",
        "PNG",
        "GIF",
      ],
      certa: 1
    },
    {
      questao: "Qual dos seguintes é um exemplo de software de planilha eletrônica?",
      respostas: [
        "Word",
        "Excel",
        "PowerPoint",
        "Access",
      ],
      certa: 1
    },
    {
      questao: "Qual é a função do software de antivírus?",
      respostas: [
        "Criar cópias de segurança dos arquivos",
        "Acelerar o desempenho do computador",
        "Proteger contra ameaças de software malicioso",
        "Editar imagens e vídeos",
      ],
      certa: 2
    },
    {
      questao: "O que é um navegador da web?",
      respostas: [
        "Um dispositivo de entrada de dados",
        "Um tipo de vírus de computador",
        "Um programa de computador para acessar e exibir páginas da web",
        "Um tipo de teclado virtual",
      ],
      certa: 2
    },
    {
      questao: "Qual destes não é um sistema operacional para computadores pessoais?",
      respostas: [
        "Windows",
        "iOS",
        "Linux",
        "Android",
      ],
      certa: 3
    },
    {
      questao: "O que é um URL?",
      respostas: [
        "Um tipo de linguagem de programação",
        "Um endereço usado para identificar recursos na internet",
        "Um tipo de arquivo de imagem",
        "Um software de edição de texto",
      ],
      certa: 1
    }
  ];
  const quiz = document.querySelector("#quiz")
  const template = document.querySelector("template")
  const certas = new Set()
  //variaveis nao pode ter espaços.
  const totalDeQuestoes = questoes.length
  const mostrarTotal = document.querySelector("#corretas span")
  mostrarTotal.textContent = certas.size + " de " + totalDeQuestoes
  
  // loop ou laço de repetição
  for(const item of questoes) {
    const quizFilho = template.content.cloneNode(true)
    quizFilho.querySelector("h3").textContent = item.questao
  
    for(let resposta of item.respostas) {
      const dt = quizFilho.querySelector("dl dt").cloneNode(true)
      dt.querySelector("span").textContent = resposta 
      dt.querySelector("input").setAttribute("name", "questao-" + questoes.indexOf(item))
      dt.querySelector("input").onchange = (event) => {
        dt.querySelector("input").value = item.respostas.indexOf(resposta)
      const estaCerta = event.target.value == item.certa //a resposta das questoes vai ser true ou false.
      certas.delete(item)
  
      if(estaCerta){
        certas.add(item)
       }
       mostrarTotal.textContent = certas.size + " de " + totalDeQuestoes
      }
      quizFilho.querySelector("dl").appendChild(dt)
    }
    quizFilho.querySelector("dl dt").remove()
    quiz.appendChild(quizFilho)
  }
  
  