import React, {PropTypes} from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.props.handleInput(event.target.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search article..."
          value={this.props.queryStr}
          onChange={this.handleInput}
        />
        <button onClick={this.props.handleSearchClick}>
          Search
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  queryStr: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired
};
