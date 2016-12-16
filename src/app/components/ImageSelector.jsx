import React from 'react';

class ImageSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selectedIndex } = this.state;
    const { answers, onAnswerSelect } = this.props;

    return (
      <div className="image-selector">
        <ul className="image-list">
          {
            answers.map((answer, index) => (
              <li
                className={ `image__item ${ index === selectedIndex ? 'selected' : ''}` }
                key={ index }
                onClick={ () => {
                  this.setState({ selectedIndex: index });
                  onAnswerSelect(answer);
                } }
              >
                <img
                  src={ require(`../../assets/img/${answer.name}`) }
                />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
};

ImageSelector.propTypes = {
  onAnswerSelect: React.PropTypes.func,
  answers: React.PropTypes.array
};

export default ImageSelector;