# Assignment 4 - QuizMe Flashcard Application 

INFO670 Cross-platform Mobile Development

Alyssa Jordan

## Design and Purpose:
This is a quiz flashcard application. The users can add new flashcards and then quiz themself. It is a study tool. The primary audience for this application is people looking to review information. The project uses a React Native frontend, PHP APIs, and MySQL database.

## Basic Use
Using the bottom navigation bar, the user can select either the quiz page or the edit page. On the quiz page, the user is asked if they would like to start the quiz. If they start the quiz, their flashcards will load with the question shown and the answer hidden. The user can reload the quiz at any point to make all the answers hidden again or to update the quiz with new flashcards. On the edit page, the user is able add new flashcards (question/answer pairs). Blank questions or answers are not accepted.

## Application Screenshots

When the user opens the app, it shows the Quiz screen.

![alt text](https://github.com/alyssaaj/INFO670MobileDev/blob/520280524ac7677e35e616b2717e41a3e584ca0c/Assignment4/screenshots/StartQuiz.png)


If the user hits 'Start the Quiz', the flashacards load. The flashcard section scrolls to show all of them.

![alt text](https://github.com/alyssaaj/INFO670MobileDev/blob/520280524ac7677e35e616b2717e41a3e584ca0c/Assignment4/screenshots/QuizLoaded.png)

The user can click 'Show Answer' on any flashcard to reveal the answer. The user can hit 'Reload Quiz' to restart the quiz and hide all the answers. This also loads in any newly added questions.

![alt text](https://github.com/alyssaaj/INFO670MobileDev/blob/520280524ac7677e35e616b2717e41a3e584ca0c/Assignment4/screenshots/SomeAnswersRevealed.png)

The Edit screen allows the user to add new flashcards.

![alt text](https://github.com/alyssaaj/INFO670MobileDev/blob/520280524ac7677e35e616b2717e41a3e584ca0c/Assignment4/screenshots/AddedQuestion.png)


## Server APIs

### addQuestion
GET Request

Endpoint: /addQuestion.php?question={question}&answer={answer}

Parameters: question = varchar, answer = varchar

Response: 200 OK, No return body

### getQuiz
GET Request

Endpoint: /getQuiz.php

Parameters: None

Response: 200 OK

## Database

Database schema (MySQL)

![alt text](https://github.com/alyssaaj/INFO670MobileDev/blob/e28b191512ebdb2a364d45b3e2b1964fdcc8c892/Assignment4/screenshots/DatabaseSchema.png)

## Links

### React Native Code: 
https://github.com/alyssaaj/INFO670MobileDev/tree/5a37b4defab96729358c706c2ceda31242e46bfb/Assignment4/QuizMe

### Server API Code:
https://www.cs.drexel.edu/~amj426/A4/addQuestion.php?question={question}&answer={answer}
https://www.cs.drexel.edu/~amj426/A4/getQuiz.php


