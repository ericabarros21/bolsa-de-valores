const quizData = [ // um array de objetos que contém as perguntas do quiz, cada uma com suas opções de resposta e a resposta correta associada. As perguntas estão formatadas como strings e as respostas estão representadas pelas letras a, b, ce d.
    
    {
        question: `Qual é o objetivo principal ao investir dinheiro? `,
        a: `Aumentar a dívida`,
        b: `Preservar o capital`,    
        c:`Gastar sem limites`, 
        d:`Ignorar completamente os retornos`,
        correct: `b`
    },

    {
        question: `O que é diversificação de investimentos?`,
        a:`Colocar todo o dinheiro em uma única ação`,
        b: ` Espalhar o dinheiro em diferentes tipos de investimentos`,
        c: `Investir apenas em imóveis `,
        d: ` Investir apenas em moedas estrangeiras`,
        correct: `b`,
    },

    {
        question: `O que é o mercado de ações?`,
        a: `Um mercado onde são vendidos apenas produtos agrícolas`,
        b: `Um mercado onde as pessoas compram e vendem ações de empresas `,
        c:`Um mercado onde são vendidos apenas bens imóveis`,
        d: `Um mercado onde são negociados apenas títulos do governo`,
        correct: `b`,

    },

    {
        question: `O que é um fundo mútuo?`,
        a: `Um investimento em uma única empresa`,
        b: `Uma instituição financeira que concede empréstimos `,
        c:` Um pool de dinheiro de vários investidores investido em uma variedade de investimentos `,
        d: `Uma conta de poupança com juros elevados`,
        correct: `c`,

    },

    {
        question: `O que é o risco de investimento?`,
        a: ` A garantia de retorno positivo `,
        b: `A possibilidade de perder dinheiro  `,
        c:` A certeza de ganhar dinheiro`,
        d: `A garantia de lucro imediato`,
        correct: `b`,

    },

    {
        question: `Qual é a diferença entre investir e especular? `,
        a: `Não há diferença, ambos são sinônimos`,
        b: ` Investir é baseado em análise e planejamento, enquanto especular é baseado em suposições e apostas`,    
        c:` Investir envolve comprar e vender rapidamente, enquanto especular envolve manter ativos por longos períodos `, 
        d:` Investir é apenas para profissionais, enquanto especular é para amadores   `,
        correct: `b`
    },

    {
        question: `O que é um dividendo?`,
        a:`Um empréstimo a uma empresa`,
        b: `Um pagamento feito por uma empresa aos acionistas como parte dos lucros `,
        c: `Uma taxa cobrada pelos corretores `,
        d: `Uma multa imposta pelo governo às empresas`,
        correct: `b`,
    },

    {
        question: `O que é o índice de ações S&P 500?`,
        a: `Um índice que mede o desempenho das 500 maiores empresas dos EUA `,
        b: `) Um índice que mede o desempenho de todas as empresas do mundo `,
        c:` Um índice que mede o desempenho das 500 maiores empresas da Europa `,
        d: `Um índice que mede o desempenho das 500 empresas menores dos EUA`,
        correct: `a`,

    },

    {
        question: `O que é uma ordem de mercado?`,
        a: ` Uma ordem para comprar ou vender um título ao preço atual de mercado `,
        b: `Uma ordem para comprar ou vender um título a um preço específico no futuro`,
        c:`Uma ordem para comprar ou vender um título a um preço mais baixo do que o atual `,
        d: `Uma ordem para comprar ou vender um título a um preço mais alto do que o atual`,
        correct: `a`,

    },

    {
        question: `O que é uma obrigação? `,
        a: `  Uma promessa de pagar um montante fixo de dinheiro no futuro `,
        b: `Um documento legal que comprove a propriedade de uma empresa `,
        c:` Um tipo de ação preferencial`,
        d: ` Um tipo de seguro contra perdas de investimento `,
        correct: `a`,

    },

];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')
// inclui o elemento de quiz em si, as opções de resposta e o botão de envio.

let currentQuiz = 0;
let score = 0;

loadQuiz() //essa função desmarca todas as opções de resposta, garantindo que não esteja pré-selecionado quando uma nova pergunta.

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerHTML  = currentQuizData.question
    a_text.innerHTML = currentQuizData.a
    b_text.innerHTML = currentQuizData.b
    c_text.innerHTML = currentQuizData.c
    d_text.innerHTML = currentQuizData.d

}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false )
}
function getSelected(){ //Esta função verifica qual opção de resposta foi selecionada pelo usuário. Percorre todas as opções de resposta e verifique se alguma está marcada. Se encontrar uma marcada, retorna o ID dessa opção.

    let answer
    answerEls.forEach(answerEl=> {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',() => {  //Quando o botão de envio é clicado, esta função é acionada.Primeiro, ela obtém uma opção de resposta escolhida pelo usuário usando a função getSelected().Se uma opção foi selecionada, verifique se está correto comparando com a resposta correta na estrutura de dados quizData.Se estiver correto, aumente a pontuação.Em seguida, avance para a próxima pergunta (se houver) chame loadQuiz().Se não houver mais perguntas, exibe a pontuação final e um botão para reiniciar o quiz.

    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++

        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else{  
            if(score <= 5) {
            quiz.innerHTML = ` <h2>Você acertou ${score}/${quizData.length} questões. Você precisa estudar mais! </h2>
            
            <button class ="btn" onclick= "location.reload()"> Fazer novamente</button> `

            }  else{
                quiz.innerHTML =  ` <h2>Parabéns! Você acertou ${score}/${quizData.length} questões.</h2>
                
                <button class ="btn" onclick= "location.reload()"> Fazer novamente</button> `
            }
        } 
    }
})
