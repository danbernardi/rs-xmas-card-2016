import React from 'react';
// import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { setActiveSheetID } from '../actions';
import Footer from './Footer';
import { setMusicTo } from '../actions';


//Animated scroll function
function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}


//Add Easing To scrolling animation
//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.state = {diff: true};
    //

  }

  componentWillReceiveProps(newProps) {
    if (this.drinkChanged(newProps)) {
      scrollTo(this.container, 0, 0);
      this.setState({ playMusic: false });
      setTimeout(() => {
        this.setState({ playMusic: true });
      }, 100);
    } else if (!this.props.drink && newProps.drink) {
      this.setState({ playMusic: true });
    }
  }

  drinkChanged(newProps) {
    return newProps.drink && this.props.drink && newProps.drink.name !== this.props.drink.name;
  }

  render() {
    const { drink, musicOn, dispatch } = this.props;
    const { playMusic } = this.state;

    return (
      <div className="result" ref={(element) => this.container = element }>
        { drink ?
          <div className="result-inner">

            { drink.music && playMusic &&
              <audio controls autoPlay={ true } muted={ !musicOn }>
                <source src={ `http://redshiftdigital.com/holiday2016/assets/audio/${drink.music.file}` } type="audio/mpeg" />
              </audio>
            }

            <div className={`${this.state.diff ? 'py0' : 'py6'} theme--dark py0--mlg layout--relative result__drink--frame`} style={ { backgroundColor: drink.color } }>

              <div className="result__gradient-overlay"></div>
              { this.state.diff ?

              <div className="result__beer-drinkimg">
                <div className="cf result__beer-drink col-center pt10 pt0--mlg cf">

                  <div className="beer result__drinkname pt5">
                    <img src="http://www.redshiftdigital.com/holiday2016/assets/img/drinks/cheap_beer.png"/>
                    <h3 className="typ--center result__drink--heading">party animal</h3>

                  </div>

                </div>
              </div>
              :
              <div>
                <div className="cf result__drink col-center pt10 pt0--mlg cf">
                  <div className="result__drinkimg ">
                    <img src={ `http://redshiftdigital.com/holiday2016/assets/img/drinks/${drink.img}` } alt={ drink.name } />
                  </div>
                  <div className="result__drinkname">
                    <h1 className="result__name pb4">{ drink.name }</h1>
                    <h3 className="result__drink--heading">{drink.heading}</h3>
                  </div>

                </div>
              </div>
              }
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
              <span
                className="recipe__trigger typ--caps"
                onClick={() => {
                  scrollTo(this.container, window.innerHeight, 500);
                }}
              >
                See recipe
                <i
                  className="fa fa-chevron-down"
                  style={{ color: drink.color }}
                />
              </span>

              <h3
                className="recipe__description"
                dangerouslySetInnerHTML={{ __html: drink.description }}
              />

              <div className="recipe__keyline">
                <div className="recipe__keyline__img">
                  <img
                    src={ `http://redshiftdigital.com/holiday2016/assets/img/drinks/${drink.illustration}` }
                    alt={ drink.name }
                  />
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
