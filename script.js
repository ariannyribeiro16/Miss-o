const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quantos sets tem uma partida de voleibol?",
        alternativas: [
            {
                texto:"uma partida de voleibol tem 5 sets, com o time vencedor sendo aquele que ganhar 3 sets",
                afirmação:"resposta correta",
                pontos:1
            },
            {
                texto:"7 sets",
                afirmação:"resposta errada",
                ponto:0
            }

        ]
    },
  
{
        enunciado: "O que é o 13 jogador no voleibol?",
        alternativas: [
            {
                texto:"É um jogador reserva que não recebe medalha se a equipe subir ao pódio, a menos que ele tenha sido utilizado ao longo do torneio",
                afirmação:"resposta correta",
                pontos:1
            },
            {
                texto:"É um jogador reserva medalha se a equipe subir no pódio",
                afirmação:"resposta errada",
                ponto:0
            }

        ]
    },
{
        enunciado: "O que é um ace no voleibol?",
        alternativas: [
            {
                texto:"Um ace é um saque que resulta em ponto direto para a equipe que sacou, sem que a equipe adversária consiga tocar na bola",
                afirmação:"resposta correta",
                pontos:1
            },
            {
                texto:"é um saque direto para que a euipe adverária consiga tocar na bola",
                afirmação:"resposta errada",
                ponto:0
            }

        ]
    },
{
        enunciado: "Qual a altura da rede no voleibol masculino e feminino?",
        alternativas: [
            {
                texto:"A altura da rede é de 2,43 metros para o masculino e 2,24 metros para o feminino. ",
                afirmação:"resposta correta",
                pontos:1
            },
            {
                texto:"A altura da rede é de 2,40 metros para o masculino e 2,22 metros para o feminino",
                afirmação:"resposta errada",
                ponto:0
            }

        ]
    },
{
        enunciado: "Qual a diferença entre voleibol de quadra e de praia",
        alternativas: [
            {
                texto:"O voleibol de quadra é jogado em uma quadra retangular, enquanto o voleibol de praia é jogado na areia, com duas duplas em cada equipe e regras ligeiramente diferentes",
                afirmação:"resposta correta",
                pontos:1
            },
            {
                texto:"O voleibol de quadra é jogado na areia e voleibol de praia é jogado em quadra,com duas duplas em cada equipe e regras ligeiramente diferentes",
                afirmação:"resposta errada",
                ponto:0
            }

        ]
    },
]
let atual=0;
let perguntaAtual;
let hitoriaFinal="";
let pontos=0;

function mostraPergunta(){
    perguntaAtual=perguntas[atual];
    caixaPerguntas.textContent=perguntasAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}