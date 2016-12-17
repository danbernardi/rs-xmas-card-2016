import React from 'react';
import { connect } from 'react-redux';
import { drinks, beer } from './data/drinks';
import { questions } from './data/questions';
import Footer from './Footer';

const Index = props => {
  const { questionAnswerPairs, drink } = props;

  return (
    <div className="result">
      { drink ?
        <div>

          { drink.music &&
            <audio controls autoPlay={ true }>
              <source src={ drink.music } type="audio/mpeg" />
            </audio>
          }

          <div className="theme--dark py10 layout--relative" style={ { backgroundColor: drink.color, height: 'calc(100vh - 11.5rem)' } }>
            <div className="col-8 col-center">
              <h3 className="mb10 typ--center">{ drink.heading }</h3>
            </div>

            <div className="cf result__drink row col-center pt10 cf">
              <div className="result__drinkname">
                <h1 className="result__name pl5 pt6 pl0--tmd pt0--tmd">{ drink.name }</h1>
              </div>

              <div className="result__drinkimg">
                <img src={ drink.img } alt={ drink.name } />
              </div>
            </div>
          </div>

          <article className="recipe row" style={ { color: drink.color } }>
            <span className="recipe__trigger typ--caps">See recipe <span className='fa-caret-down'></span></span>

            <h3>{ drink.description }</h3>

            <div className="recipe__keyline">
              <div className="recipe__keyline__img">
                <img src={ drink.illustration } alt={ drink.name } />
              </div>
            </div>

            <div className="col-5">
              <h3 className="mb2">Ingredients</h3>
              <ul className="mb2">
                { drink.ingredients.map((ing, index) => (
                  <li key={ index }>
                    { ing }
                  </li>
                )) }
              </ul>

              { drink.garnish ?
                <div className="cf">
                  <p className="mb0">Garnish:</p>
                  <ul>
                    { drink.garnish.map((gar, index) => (
                      <li key={ index }>
                        { gar }
                      </li>
                    )) }
                  </ul>
                </div>
              : null }
            </div>

            <div className="col-7 col-last">
              <h3 className="mb2">Instructions</h3>
              <ol>
                { drink.instructions.map((ins, index) => (
                  <li key={ index }>
                    { ins }
                  </li>
                )) }
              </ol>
            </div>

            <Footer showAddress={ true } color={ drink.color } dontHide={ true } />
          </article>
        </div>
      : <p>There was an error. No drinks were returned.</p> }
    </div>
  )
}

Index.propTypes = {
  dispatch: React.PropTypes.func,
  activeSheetID: React.PropTypes.object,
  questionAnswerPairs: React.PropTypes.array
};

const injectStateProps = state => ({
  activeSheetID: state.activeSheetID,
  questionAnswerPairs: state.questionAnswerPairs,
  drink: state.drink
});

export default connect(injectStateProps)(Index);
