import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';

const style = {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: 20,
  display: 'block',
  padding: 20,
  maxWidth: 800,
  textAlign: 'left'
};

export default class WikiCard extends React.Component {
  render() {
    return (
      <Paper
        style={style}
        zDepth={2}
        rounded={false}
      >
        <h4 style={{color: 'steelblue'}}>{this.props.title}</h4>
        <p>{this.props.description}</p>
        <a href={this.props.link} target="_blank">Go to page</a>
      </Paper>
    );
  }
}

WikiCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};
