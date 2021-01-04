import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import styles from './playground.module.css';
import { playgroundSelector } from '../../redux/selectors';
import { makeMove } from '../../redux/actions';

const Playground = ({ playground, onClick }) => {
   return (
      <div className={styles.playground}>
         {playground.map((content, i) =>
            <div
               key={i}
               className={styles.playgroundItem}
               content={content}
               onClick={() => onClick(i)}
            >
               {content}
            </div>
         )}
      </div>
   );
};

Playground.defaultProps = {
   onClick: f => f
};

Playground.propTypes = {
   playground: PropTypes.arrayOf(
      PropTypes.string
   ).isRequired
};

const mapStateToProps = createStructuredSelector({
   playground: playgroundSelector,
});

const mapDispatchToProps = (dispatch) => ({
    onClick: (index) => dispatch(makeMove(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
