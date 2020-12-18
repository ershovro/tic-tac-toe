import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import PlaygroundItem from './playground-item';
import styles from './playground.module.css';
import { cellsDataSelector } from '../../redux/selectors';

const Playground = ({ cells }) => {
   return (
      <div className={styles.playground}>
         {cells.map(({cellNum, marker}) =>
            <PlaygroundItem
               key={cellNum}
               id={cellNum}
               content={marker}
            />
         )}
      </div>
   );
};

Playground.propTypes = {
   cells: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string,
         marker: PropTypes.string
      })
   )
};

const mapStateToProps = createStructuredSelector({
   cells: cellsDataSelector
});

export default connect(mapStateToProps)(Playground);
