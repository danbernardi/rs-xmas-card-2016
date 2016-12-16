import React from 'react';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { open, title } = this.state;
    const { answers, onAnswerSelect } = this.props;

    return (
      <div className={ `dropdown ${ open ? 'open' : '' }` }>
        <div className="dropdown__toggle" onClick={ () => this.setState({ open: true }) }>
          <span className="dropdown__title">{ title }</span>
          <span className="dropdown__icon">v</span>
        </div>
        { open &&
          <div className="dropdown__menu">
            <ul className="list--block">
              {
                answers.map((answer, index) => (
                  <li
                    className="dropdown__item"
                    key={ index }
                    onClick={ () => {
                      this.setState({ title: answer.name, open: false });
                      onAnswerSelect(answer);
                    } }
                  >
                    { answer.name }
                  </li>
                ))
              }
            </ul>
          </div>
        }
      </div>
    );
  }
};

Dropdown.propTypes = {
  sheetID: React.PropTypes.string,
  answers: React.PropTypes.array
};

export default Dropdown;