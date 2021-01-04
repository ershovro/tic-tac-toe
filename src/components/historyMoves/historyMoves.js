import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { movesSelector } from '../../redux/selectors';
import { jump } from '../../redux/actions';
import styles from './historyMoves.module.css';

const HistoryMoves = ({ moves, onClick }) => (
   <div className={styles.historyMoves}>
      <div>История ходов:</div>
      {
         moves.length ? moves.map((_, i) =>
            <div
               key={i}
               className={styles.move}
               onClick={() => onClick(i)}
            >
               Ход {i + 1}
            </div>
         ) : <span>Сделайте первый ход</span>
      }
   </div>
);


const mapStateToProps = createStructuredSelector({
   moves: movesSelector
});

const mapDispatchToProps = (dispatch) => ({
   onClick: (to) => dispatch(jump(to))
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryMoves);