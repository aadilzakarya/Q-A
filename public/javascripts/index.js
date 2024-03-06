// helper function for creating elements (usage optional)
function createElement(type, attrs, ...children) {
  const ele = document.createElement(type);

  // add element attributes
  for (const prop in attrs) {
    if (attrs.hasOwnProperty(prop)) {
      ele.setAttribute(prop, attrs[prop]);
    }
  }

  // add child nodes to element
  children.forEach(c => ele.appendChild(typeof c === 'string' ? document.createTextNode(c) : c));

  return ele;
}

// TODO: finish client side javascript

document.addEventListener('DOMContentLoaded', () => {
  fetchQuestions();
 
});

function fetchQuestions() {
  fetch('/questions/')
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then(questions => {
          questions.forEach(question => createQuestionElement(question));
      })
      .catch(error => {
          console.error('Error fetching questions:', error);
          // Optionally, display a user-friendly error message in the DOM
      });
}

function createQuestionElement(question) {
  const main = document.querySelector('main'); // Ensure your HTML has a <main> element

  // Create a container for each question
  const questionContainer = document.createElement('div');
  questionContainer.className = 'question-container';

  // Create and append the question heading
  const questionHeading = document.createElement('h3');
  questionHeading.textContent = question.question;
  questionContainer.appendChild(questionHeading);

  // Create and append an unordered list for the answers
  const answerList = document.createElement('ul');
  question.answers.forEach(answer => {
      const answerItem = document.createElement('li');
      answerItem.textContent = answer;
      answerList.appendChild(answerItem);
  });
  questionContainer.appendChild(answerList);

  // Create and append a button to add an answer
  const answerButton = document.createElement('button');
  answerButton.textContent = 'Add Answer';
  answerButton.onclick = () => {
      // Add functionality to handle answer addition
  };
  questionContainer.appendChild(answerButton);

  // Append the question container to the main element
  main.appendChild(questionContainer);
}

// document.getElementById('btn-show-modal-question').addEventListener('click', () => {
//   const modal = document.getElementById('modal-question');
//   modal.style.display = 'block'; // This will make the modal visible
// });

// document.querySelectorAll('.modal .close').forEach(button => {
//   button.addEventListener('click', () => {
//       const modal = button.closest('.modal');
//       modal.style.display = 'none'; // This will hide the modal
//   });
// });


document.addEventListener('DOMContentLoaded', () => {
  // Event listener for opening the 'Ask a Question' modal
  document.getElementById('btn-show-modal-question').addEventListener('click', () => {
      document.getElementById('modal-question').style.display = 'block'; // Show the modal
  });
  

  // Event listener for submitting a new question
  document.getElementById('create-question').addEventListener('click', () => {
      const questionText = document.getElementById('question-text').value; // Collect question text
      submitNewQuestion(questionText); // Function to handle the AJAX POST request
  });

  document.querySelector('#modal-question .close').addEventListener('click', () => {
    document.getElementById('modal-question').style.display = 'none'; // Hide the modal
});

});






function submitNewQuestion(questionText) {
  fetch('/questions/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question: questionText })
  })
  .then(response => response.json())
  .then(data => {
      if (data.error) {
          console.error('Error:', data.error);
      } else {
          // Code to handle success (e.g., add the new question to the page)
          console.log('Question added:', data);
          createQuestionElement(data);
          document.getElementById('modal-question').style.display = 'none'; // Hide the modal
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });
}










// Add further implementation for handling answer addition

