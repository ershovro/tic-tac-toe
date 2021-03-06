import React  from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from './playground.module.css';
import animationStyles from './playground-animation.module.css';
import { playgroundSelector } from '../../redux/selectors';
import { makeMove } from '../../redux/actions';

const Playground = ({ playground, onClick }) => {
   return (
      <TransitionGroup className={styles.playground} component="div">
         {playground.map((content, i) =>
            <span
               key={i}
               className={styles.playgroundItem}
               onClick={() => onClick(i)}
            >
               {content ?
                  <CSSTransition
                     in={true}
                     timeout={200}
                     classNames={animationStyles}>
                     <span>{content}</span>
                  </CSSTransition> :
                 null
               }
            </span>
         )}
      </TransitionGroup>
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
