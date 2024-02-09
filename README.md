# HTML

HyperText Markup Linguage

Tag - <div>,<h1>, <dl>, <dt>, etc.
Atributos

cada Tag no HTML é chamado de nó.
quando uma Tag esta dentro de outra Tag, podemos chamar ela de filho.

# CSS

Cascading Style Sheet

 o simbolo ' * ' significa todos elementos da tela 

é bom nao fica mexendo/modificando muito o html, body. Normalmente a largura e altura é 100%

```JS
const msg = " Parabéns meu fi, ta começando a aprender, nota ";
alert (msg + ( 10*10) + ". Você é bom!")
  //Parabéns meu fi, ta começando a aprender, nota 100. Você é bom!

## Array ou Vetores - []

 // O array seria uma estrutura de Dados (parecido com as prateleiras dos SuperMercados) em que você pode guardar muitas coisas diferentes dentro dela e também pode colocar ate outras funçoes/repetir as funçoes. Usado para agrupar coisas.

  // EX: const array = [0, "banana", 6.9]
// PS: oque decide se vai ser Array é o Sinal []


## Objetos - {}

// O objeto você usa para atribuir caracteristicas, propriedade, valor, etc, Na Variavel em que você deseja.
 // #EX: const celular = {cor: "preto", modelo: "sansung", peso: 200}
 // PS: oque decide se vai ser Array é o Sinal {}


  //Veja esse exemplo de como fazer aparecer na tela a resposta certa sem ter quer fazer manual:

const questoes = [
  {
    questao: "Questão 01",
    respostas: [
      "Resposta A",
      "Resposta B",
      "Resposta C",
      "Resposta D",
    ],
    certa: 3
  },
]

//alert = a função dele é mostrar algo na tela

//questoes[0] = questoes é o nome do Array e [0] significa a posição de todo o meu objeto {}. Se eu tiver mais de 1 objeto no meu Array irei trocar o 0 por 1 e assim em diante, pois esse numero significa a posição do objeto dentro do Array.

//(.) = o . (ponto) significa  que estou acessando algo dentro do meu objeto {}, no exemplo abaixo percebe-se que estamos acessando o array respostas que esta dentro do objeto 0.

alert(questoes[0].respostas[questoes[0].certa])

// loop ou laço de repetição
//o for server para entrar em um Array e para cada item/objeto que tem no Array ele irá fazer alguma coisa.
for(){}


//para pegar o id do HTML eu preciso colocar o sinal de #(hastag) no nome do id.
const quiz = document.querySelector("#quiz")

//o document ou DOM(Document object model), ele transforma tudo que tem dentro do meu documento/arquivo para JavaScript nesse caso. Como estamos mexendo com HTML e CSS, com o document eu consigo pegar as informaçoes do HTML e usar ela no JavaScript sem precisar refazer.
//o querySelector é usado para pegar qualquer elemento dentro do document, que no nesse caso é o template que contem os dados do HTML.
const template = document.querySelector("template")

//new = server para criar coisas novas normalmente é usada para estrutura de dados ou criar um tipo objeto especifico
//o objeto especifico é chamado de Set que é um conjunto, no set eu posso adicionar ou tirar e o Set apenas guarda 1 informaçao sem ficar repetindo ela. 
const certas = new Set()

//variaveis nao pode ter espaços.
const totalDeQuestoes = questoes.length
const mostrarTotal = document.querySelector("#corretas span")
mostrarTotal.textContent = certas.size + " de " + totalDeQuestoes


// loop ou laço de repetição
//a função abaixo se traduz o seguinte: (for)para cada (item)item (of)da questoes 
for(const item of questoes) {
  
  // esse quizFilho tem o conteudo do template do HTML e dentro do conteudo eu irei clonar os nó, se eu quiser clonar todos, eu deixo o cloneNode em true.
  const quizFilho = template.content.cloneNode(true)

  //aqui eu irei pesquisar dentro do template e atribuir um novo texto no h3 que esta "Questão 01" e será mudado para as questoes que criadas.
  quizFilho.querySelector("h3").textContent = item.questao

  for(let resposta of item.respostas) {

    //aqui temos que perceber que se eu quiser fazer uma pesquisa/selecionar o nó "dt" e como estamos pesquisando no clone, é necessario informar o pai do nó que você esta informado, como nesse exemplo é o dl o pai e o dt o filho. E nao pode esquecer que tem que seperar com um espaço.
    //("dl dt") significa dentro de um dl irá procurar o dt. 
    const dt = quizFilho.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta 

    //Aqui iremos selecionar dentro do dt o input e setar um atributo ao input que no caso iremos alterar o conteudo do name e coloca questao + o index da questão.
    //index = a posição, no caso a posição das questoes que é do 0 ao 9.
    dt.querySelector("input").setAttribute("name", "questao-" + questoes.indexOf(item))

//esse onchange é a maneira de criar/adicionar uma função, essa (=>) se chama arrow function, esse onchange esta dizendo algo tipo, "olha do ligado que tu ta interragindo com as questoes em" assim fazendo executar as instruçoes do escopo.
    dt.querySelector("input").onchange = (event) => {
      dt.querySelector("input").value = item.respostas.indexOf(resposta)
    const estaCerta = event.target.value == item.certa //a resposta das questoes vai ser true ou false.

    certas.delete(item)
    if(estaCerta){
      certas.add(item)
     }

     mostrarTotal.textContent = certas.size + " de " + totalDeQuestoes
    }

    //aqui ele irá procurar o dl no QuizFilho e irá adicionar o dt ao dl.
    quizFilho.querySelector("dl").appendChild(dt)
  }
  quizFilho.querySelector("dl dt").remove()
  //appendChield seria como colocar um filho, ou seja eu irei colocar o conteudo do quizFilho dentro do nó pai que é o <div id="quiz". que criamos em HTML.
  //E coloca a pergunta na tela.
  quiz.appendChild(quizFilho)

}
```
