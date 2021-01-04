const initialState = {
   playground: [...Array(9)],
   first: 'X',
   second: '0'
};

const initGame = (state = initialState, action) => {
   const { type } = action;

   switch (type) {
      default:
         return state;
   }
};

export default initGame;
