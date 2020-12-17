import React from "react";
import PlaygroundItem from './playground-item';
import styles from './playground.module.css';

const Playground = ({}) => {


   return (
      <div className={styles.playground}>
         {[...Array(9)].map((_, i) =>
            <PlaygroundItem key={i}/>
         )}
      </div>
   );
}

export default Playground;
