import React, {PropTypes} from 'react';

import WikiCard from './WikiCard';

export default class ResultsWrapper extends React.Component {
  render() {
    const titles = this.props.results[1];
    const descriptions = this.props.results[2];
    const links = this.props.results[3];

    const cards = titles.map((title, index) =>
      <WikiCard
        title={title}
        description={descriptions[index]}
        link={links[index]}
        key={links[index]}
      />
    );

    return (
      <div>
        {cards}
        {cards.length < 1 ? <p>Nothing found</p> : null}
      </div>
    );
  }
}

ResultsWrapper.propTypes = {
  results: PropTypes.array.isRequired
};
