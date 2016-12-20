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
      <div
        className={ `dropdown ${ open ? 'open' : '' }` }
        tabIndex="0"
        onBlur={
          () => { this.setState({ open: false }) }
        }
      >
        <div className="dropdown__toggle" onClick={ () => this.setState({ open: true }) }>
          <h6 className="dropdown__title">{ title }</h6>
          {
            (!open && !title) ?
              <h1 className="dropdown__hint">Select one</h1> :
              null
          }
          <span className="dropdown__icon">
            <img src={ require('../../assets/img/dropdown-carrot.svg')} />
          </span>
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
                    <h6>{ answer.name }</h6>
                  </li>
                ))
              }
            </ul>
          </div>
        }
      </div>
    );
  }
}

Dropdown.propTypes = {
  onAnswerSelect: React.PropTypes.func,
  answers: React.PropTypes.array
};

export default Dropdown;