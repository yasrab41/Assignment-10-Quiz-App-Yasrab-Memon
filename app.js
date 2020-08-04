var questions = [
      {
            id: 1,
            question: "What is the full form of CPU?",
            answer: 'Central processing unit',
            options: [
                  'Computer programming unit',
                  'Computer processing unit',
                  'Central processing unit',
                  'None of these'
            ]
      },
      {
            id: 2,
            question: "What is the full form of ROM?",
            answer: 'Read Only Memory',
            options: [
                  'Read Only Memory',
                  'Random Only Memory',
                  'Read Operation Memory',
                  'None of these'
            ]
      },
      {
            id: 3,
            question: "What is the full form of RAM?",
            answer: 'Random Access Memory',
            options: [
                  'Random Access Memory',
                  'Randomly Access Memory',
                  'Read Access Memory',
                  'None of these'
            ]
      },


]

function submitform(e) {
      e.preventDefault();
      //  let name = document.forms['welcomeform']['username'].value;
      let name = document.getElementById('username').value;

      //store player name
      sessionStorage.setItem('name', name);
      location.href = 'files/Quiz_start.html';
      //console.log(name);

}

var count_question = 0;
var quiz_points=0;


function nextQuestion() {

      var user_answer=document.querySelector("li.li_list.active").innerHTML;


        //user answer checking
        if (user_answer == questions[count_question].answer) {
            quiz_points += 10;
            sessionStorage.setItem("points", quiz_points);
          }
      console.log(quiz_points);

      if (count_question == questions.length - 1) {
            location.href = "files/final_results.html";
            return;
          }
       console.log(count_question);

      count_question++;
      show_question(count_question);
}

function show_question(count) {
      let show_quest = document.getElementById('questions');
      show_quest.innerHTML = '<h2>' + questions[count].question + '</h2>' +
            '<ul class="ul_list"><li class="li_list">' + questions[count].options[0] +
            '</li><li class="li_list">' + questions[count].options[1] +
            '</li><li class="li_list">' + questions[count].options[2] +
            '</li><li class="li_list">' + questions[count].options[3] +
            '</li></ul>';

            active_option();
     
}

window.onload = function () {
      show_question(0);
}


function active_option() {
      let option = document.querySelectorAll("li.li_list");
      for (let i = 0; i < option.length; i++) {
        option[i].onclick = function() {
          for (let i = 0; i < option.length; i++) {
            if (option[i].classList.contains("active")) {
              option[i].classList.remove("active");
            }
          }
          option[i].classList.add("active");
        };
      }
    }
    
