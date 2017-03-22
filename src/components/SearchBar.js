import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
      <div className="row">
        <div className="col-xs-6 col-xs-offset-1 col-sm-6 col-sm-offset-2">
          <TextField
            hintText="Press button to start search"
            floatingLabelText="Ask Wikipedia"
            fullWidth
            errorText={this.props.errorText}
            value={this.props.queryStr}
            onChange={this.handleInput}
          />
        </div>
        <div className="col-xs-4 ">
          <RaisedButton
            label="Search"
            primary
            style={{marginLeft: 0, marginTop: 30, position: 'absolute'}}
            onClick={this.props.handleSearchClick}
          />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  queryStr: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired
};
