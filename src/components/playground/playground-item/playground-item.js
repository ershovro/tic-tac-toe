import React from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import styles from './playground-item.module.css';
import { makeMove } from "../../../redux/actions";

const PlaygroundItem = ({ onClick, content }) => (
   <div
      className={styles.playgroundItem}
      onClick={onClick}
   >
      {content}
   </div>
);

PlaygroundItem.defaultProps = {
   onClick: f => f
};

PlaygroundItem.propTypes = {
   onClick: PropTypes.func,
   content: PropTypes.node
};


const mapDispatchToProps = (dispatch, props) => ({
   onClick: () => dispatch(makeMove(props.id))
});

export default connect(null, mapDispatchToProps)(PlaygroundItem);
