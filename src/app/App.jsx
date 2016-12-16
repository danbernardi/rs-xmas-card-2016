import styles from '../sass/index.scss';
import React from 'react';
import Nav from './Nav';
import Question from './Question';
import Index from './Index';
import Result from './Result';
import { questions } from './data/questions';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const pages = [
    { id: 'index', component: <Index /> }
  ];

  questions.forEach((q, i) => {
    const question = (
      <Question
        key={ i }
        question={ q.question }
        answers={ q.answers }
        color={ q.color }
        nextPage={ questions[i + 1] ? questions[i + 1].id : 'result' }
        id={ q.id }
      />
    );

    pages.push({ id: q.id, component: question });
  });

  pages.push({ id: 'result', component: <Result /> });

  return (
    <div className="pages">
      <Header />
      <Nav sheets={ pages } />
      <Footer />
    </div>
  );
};

export default App;
