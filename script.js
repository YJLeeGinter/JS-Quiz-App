/* 4. Create some CSS styling to match the design, based on the image in the folder you downloaded. 

5. Now, we only want to show one question at once, so hide all of the questions except for the first one. 

7. Let's add JavaScript functionality to the "Next" button, to advance which question is shown on the screen (big hint: try adding a numerical index to each question, and then an "activeQuestion" javascript variable)

7. Once you have the "Next" button showing just one question at a time, add JavaScript to update the question index text (ex, Question 1 out of 4, see design)

💡 Select the DOM element and set the "innerText" attribute.

Congrats! you've finished the core design... are you ready for the final challenge? */

var btn = document.querySelector('.btn-next');


btn.addEventListener('click', function (){
    var containers = document.getElementsByClassName('container');
    var activeContainer;
    for(var i=0; i < containers.length; i++){
        if(containers[i].className === 'container active-container'){
            containers[i].classList.remove('active-container');
            console.log('containers[i]: ', containers[i]);
            containers[i+1].classList.add('active-container') ;
            console.log('containers[i+1]:', containers[i+1]);
            break;
        }
    }
} );


/*

8. Once we get to the end of the questions, let's display the user's score on the page (how many questions they got right!)

💡 Think about how we can capture the values of radio elements

💡 How about we compare these values to an answers array?

💡 Then, maybe we can use an Array method to count the number of correct answers

💡 Finally, we can create some more HTML and CSS code for this "score tab" until we reach the last index. The design of this score tab is up to you.

💡 Let's also hide the next button from the page, once we get here, to the end of the quiz

 
BONUS CHALLENGES
- Can you prevent the user from advancing until they have selected a radio option? Can you display an error message if they try, to tell them what to do?

- Can you add a Back button, beside the Next button, that goes to the previous question? (Keep in mind, you wouldn't want this Back button on the first question) */