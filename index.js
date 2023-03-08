var questions= document.querySelectorAll(".question");
var answers = document.querySelectorAll(".answer");
var accordion = document.querySelectorAll(".accordion-question-answer");


questions.forEach(question => {
    question.addEventListener('click',()=>{
        const answer=question.nextElementSibling;
        const isActive = question.classList.contains('active');
        answers.forEach(answer => answer.style.display = 'none');
        questions.forEach(question => question.classList.remove('active'));
    
        if (!isActive) {
          // Expand clicked answer
          answer.style.display = 'block';
          question.classList.add('active');
        }
    
    })
})
    

