import React from 'react';

import Playground from '../playground';
import GameInfo from '../gameInfo';
import HistoryMoves from '../historyMoves';

const App = () => {

   return (
      <div>
         <GameInfo />
         <Playground />
         <HistoryMoves />
      </div>
   );
};

export default App;
