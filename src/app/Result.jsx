import React from 'react';
import { connect } from 'react-redux';
import { setActiveSheetID } from '../actions';
import Footer from './Footer';
import { setMusicTo } from '../actions';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playMusic: true
    };
  }

  componentWillReceiveProps(newProps) {
    if (this.drinkChanged(newProps)) {
      this.setState({ playMusic: false });
      setTimeout(() => {
        this.setState({ playMusic: true });
      }, 100);
    }
  }

  drinkChanged(newProps) {
    return newProps.drink && this.props.drink && newProps.drink.name !== this.props.drink.name;
  }

  render() {
    const { drink, musicOn, dispatch } = this.props;
    const { playMusic } = this.state;

    return (
      <div className="result">
        { drink ?
          <div>

            { drink.music && playMusic &&
              <audio controls autoPlay={ true } muted={ !musicOn }>
                <source src={ drink.music.file } type="audio/mpeg" />
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
              <div
                className={ `audio-control ${drink.music ? '' : 'hidden'}` }
                onClick={ () => { dispatch(setMusicTo(!musicOn)) } }
              >
                <div className="audio-child">
                  <i className={ musicOn ? 'fa fa-pause' : 'fa fa-play' } style={{ display: 'inline-block' }}/>
                  <div style={{ display: 'inline-block' }}>
                    <p>{ drink.music.name }</p>
                    <p>{ drink.music.artist }</p>
                  </div>
                </div>
              </div>
            </div>

            <article className="recipe row" style={ { color: drink.color } }>
              <span className="recipe__trigger typ--caps">
                See recipe
                <i
                  className="fa fa-chevron-down"
                  style={{ color: drink.color }}

                />
              </span>

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

              <div className="gallery-link layout--right typ--right">
                <a
                  onClick={() => {
                    dispatch(setActiveSheetID('gallery'));
                  }}
                >
                  View all cocktail recipes <span className="fa fa-long-arrow-right"></span>
                </a>
              </div>

              <Footer showAddress={ true } color={ drink.color } dontHide={ true } />
            </article>
          </div>
        : <p>There was an error. No drinks were returned.</p> }
      </div>
    )
  }
}

Result.propTypes = {
  dispatch: React.PropTypes.func,
  drink: React.PropTypes.object,
  musicOn: React.PropTypes.bool
};

const injectStateProps = state => ({
  drink: state.drink,
  musicOn: state.musicOn
});

export default connect(injectStateProps)(Result);
