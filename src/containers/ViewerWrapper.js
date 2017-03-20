import React from 'react';
import $ from 'jquery';

import SearchBar from '../components/SearchBar';
import ResultWrapper from '../components/ResultsWrapper';

export default class ViewerWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queryStr: "",
      results: []
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInput(input) {
    this.setState({queryStr: input});
  }

  handleSearch() {
    const that = this;
    $.ajax({
      dataType: "json",
      cache: false,
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + this.state.queryStr + "&namespace=0&format=json&origin=*",
      success: function (data) {
        that.setState({results: data});
      },
      error: (error) => {
        console.warn(error);
      }
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          queryStr={this.state.queryStr}
          handleInput={this.handleInput}
          handleSearchClick={this.handleSearch}
        />
        {this.state.results.length > 0 &&
          <ResultWrapper results={this.state.results}/>
        }
      </div>
    );
  }
}
