document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.start-btn');
    const popupInfo = document.querySelector('.popup-info');
    const exitBtn = popupInfo.querySelector('.exit-btn');
    const main = document.querySelector('main.main');
    const continueBtn = document.querySelector('.continue-btn');
    const quizSection = document.querySelector('.quiz-section');
    const quizBox = document.querySelector('.quiz-box');

    startBtn.onclick = () => {
        popupInfo.classList.add('active');
        main.classList.add('active');

        continueBtn.onclick = () => {
            quizSection.classList.add('active');
            popupInfo.classList.remove('active');
            main.classList.remove('active');
            quizBox.classList.add('active');

            let questionsCount = 0;

            const nextBtn = document.querySelector('.nextbtn');

            nextBtn.onclick = () => {
                questionsCount++;
                showQuestions(questionsCount);
            }
        }

        exitBtn.onclick = () => {
            popupInfo.classList.remove('active');
            main.classList.remove('active');
        }
    }

    function showQuestions(index) {
        const questionText = document.querySelector('.question-text');
        questionText.textContent = `${questions[index].Numb}. ${questions[index].question}`;
    }
})