import React from "react";
import playgroundItem from './playground-item';

const Playground = ({}) => {


   return (
      <div>
         {Array(9).map((_, i) =>
            <playgroundItem key={i}/>
         )}
      </div>
   );
}

export default Playground;