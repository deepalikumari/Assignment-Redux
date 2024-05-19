import React from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import reducer from '../reduxx/reducer';
import { incrementLike, decrementLike } from '../reduxx/action';


const store = createStore(reducer);

const LikeCounter = () => {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.likes);

  return (
    <div className='box'>
      <h1>LIKE COUNTER</h1>

      <p>{likes}</p>

      <button onClick={() => dispatch(incrementLike())}>Like</button>
      <button onClick={() => dispatch(decrementLike())}>Unlike</button>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <LikeCounter />
  </Provider>
);

export default App;
