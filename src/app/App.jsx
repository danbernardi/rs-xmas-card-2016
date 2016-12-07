import styles from '../sass/index.scss';
import React from 'react';
import Nav from './Nav';
import Question from './Question';
import Index from './Index';

const App = () => {
  const pages = [
    { id: 'index', component: <Index /> }
  ];
  const questions = [
    {
      id: 'question-1',
      question: 'What is your favorite holiday color?',
      answers: [ 'Green', 'Red', 'Glitter' ],
      color: '#ED7070',
      nextPage: 'question-2'
    },
    {
      id: 'question-2',
      question: 'What is your favorite holiday movie?',
      answers: [ 'Home Alone', 'Home Alone 2: Lost in New York', 'Ferngully' ],
      color: '#a4d73d',
      nextPage: 'question-3'
    },
    {
      id: 'question-3',
      question: 'What is your favorite holiday music?',
      answers: [ 'Rudolf the Red Nosed Reindeer', 'Silent Night', 'Jingle Bells' ],
      color: '#33b5b5',
      nextPage: 'result'
    }
  ]

  questions.forEach((q, i) => {
    const question = (
      <Question
        key={ i }
        question={ q.question }
        answers={ q.answers }
        color={ q.color }
        nextPage={ q.nextPage }
      />
    );

    pages.push({ id: q.id, component: question });
  });

  console.log(pages);

  return (
    <div className="pages">
      <Nav sheets={ pages } />
    </div>
  );
};

export default App;
