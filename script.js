const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está na cozinha, prestes a preparar um jantar especial. Qual é o primeiro passo para começar?",
        alternativas: [
            {
                texto: "Planejar o cardápio e separar todos os ingredientes.",
                afirmacao: "Sua organização na cozinha garantiu um preparo tranquilo e sem surpresas."
            },
            {
                texto: "Começar a cozinhar o que parece mais fácil primeiro.",
                afirmacao: "A espontaneidade na cozinha te levou a descobertas saborosas e inesperadas."
            }
        ]
    },
    {
        enunciado: "Enquanto prepara o prato principal, você percebe que está faltando um ingrediente chave. O que você faz?",
        alternativas: [
            {
                texto: "Improvisa com o que tem em casa, buscando um substituto criativo.",
                afirmacao: "Sua criatividade na cozinha te permitiu transformar um imprevisto em um novo prato delicioso."
            },
            {
                texto: "Pede para alguém ir ao mercado ou faz uma pausa para comprar o ingrediente.",
                afirmacao: "Sua dedicação em seguir a receita à risca resultou em um prato fiel à tradição."
            }
        ]
    },
    {
        enunciado: "O jantar está quase pronto e você precisa decidir a apresentação do prato. Qual a sua abordagem?",
        alternativas: [
            {
                texto: "Caprichar na montagem, buscando um visual digno de restaurante.",
                afirmacao: "Seu cuidado com a estética transformou o jantar em uma experiência visual e gustativa."
            },
            {
                texto: "Servir de forma simples e focada no sabor, afinal, o que importa é o gosto.",
                afirmacao: "Você priorizou o sabor e a autenticidade, provando que a simplicidade pode ser o maior trunfo."
            }
        ]
    },
    {
        enunciado: "Após o jantar, seus convidados elogiam muito um prato específico. Qual a sua reação?",
        alternativas: [
            {
                texto: "Ficar feliz e compartilhar a receita, incentivando-os a experimentar.",
                afirmacao: "Sua generosidade em compartilhar seu conhecimento culinário inspirou outros a se aventurarem na cozinha."
            },
            {
                texto: "Agradecer e guardar o segredo da receita para manter o 'toque especial'.",
                afirmacao: "Você manteve seu 'segredo de chef', garantindo que seus pratos sejam sempre únicos e especiais."
            }
        ]
    },
    {
        enunciado: "Você decide expandir seus conhecimentos culinários. Qual o próximo passo?",
        alternativas: [
            {
                texto: "Investir em cursos de culinária e livros de receitas avançadas.",
                afirmacao: "Sua busca por aprimoramento te levou a dominar novas técnicas e explorar cozinhas do mundo todo."
            },
            {
                texto: "Experimentar novas receitas por conta própria e aprender com os erros e acertos.",
                afirmacao: "Sua jornada autodidata na cozinha te transformou em um(a) mestre na arte de experimentar e inovar."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada culinária se resume em...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();