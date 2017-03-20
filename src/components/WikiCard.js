import React, {PropTypes} from 'react';

export default class WikiCard extends React.Component {
  render() {
    return (
      <div className="wiki-card">
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
        <a href={this.props.link} target="_blank">Go to page</a>
      </div>
    );
  }
}

WikiCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
