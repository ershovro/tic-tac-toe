import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import {
   activeMarkerSelector,
   gameIsOverSelector,
   winnerSelector
} from '../../redux/selectors';

const GameInfo = ({ gameIsOver, activeMarker, winner }) => (
   <div>
      {
         gameIsOver ? `Игра окончена, победил ${winner}` : `Ход игрока ${activeMarker}`
      }
   </div>
);

GameInfo.defaultProps = {
   gameIsOver: false
};

GameInfo.propTypes = {
   gameIsOver: PropTypes.bool,
   activeMarker: PropTypes.string,
   winner: PropTypes.string,
};
const mapStateToProps = createStructuredSelector({
   activeMarker: activeMarkerSelector,
   gameIsOver: gameIsOverSelector,
   winner: winnerSelector
});

export default connect(mapStateToProps)(GameInfo);
