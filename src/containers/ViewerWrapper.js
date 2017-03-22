import React from 'react';
import $ from 'jquery';

import SearchBar from '../components/SearchBar';
import ResultWrapper from '../components/ResultsWrapper';

export default class ViewerWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queryStr: "",
      results: [],
      errorText: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.parseResponse = this.parseResponse.bind(this);
  }

  handleInput(input) {
    this.setState({
      queryStr: input,
      errorText: ""
    });
  }

  parseResponse(data) {
    if (data['error']) {
      if (data['error'].code === "nosearch") {
        this.setState({errorText: "Please specify what are you looking for"});
      }
    }
    else if (data[1].length === 0) {
      this.setState({errorText: "Nothing found. Try again!"});
    }
    else {
      this.setState({results: data});
    }
  }

  handleSearch() {
    this.setState({results: []});

    const that = this;
    $.ajax({
      dataType: "json",
      cache: false,
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + this.state.queryStr + "&namespace=0&format=json&origin=*",
      success: that.parseResponse,
      error: () => {
        that.setState({errorText: "Oops, something went wrong. Try again later"});
      }
    });
  }

  render() {
    return (
      <div className="container">
        <SearchBar
          queryStr={this.state.queryStr}
          handleInput={this.handleInput}
          handleSearchClick={this.handleSearch}
          errorText={this.state.errorText}
        />
        {this.state.results.length > 0 &&
        <ResultWrapper results={this.state.results}/>
        }
      </div>
    );
  }
}
