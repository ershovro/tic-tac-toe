import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { movesSelector } from '../../redux/selectors';
import { jump } from '../../redux/actions';

const HistoryMoves = ({ moves, onClick }) => (
   <div>
      {moves.map( (_, i) =>
         <div
            key={i}
            onClick={() => onClick(i)}
         >
            Ход {i+1}
         </div>
      )}
   </div>
);

const mapStateToProps = createStructuredSelector({
   moves: movesSelector
});

const mapDispatchToProps = (dispatch) => ({
   onClick: (to) => dispatch(jump(to))
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryMoves);