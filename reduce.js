import React, { useReducer } from 'react';
// Reducer function to track the number of apples
function appleReducer(state = 3, action) {
  switch (action.type) {
    case 'ADD_APPLE':
      return state + 1;
    case 'Eat_APPLE':
      return state - 1;
    default:
      return state;
  }
}
function App() {
  const [count, dispatch] = useReducer(appleReducer, 3);
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontSize: '20px', backgroundColor: 'lightblue', margin: 'auto', width: '50%', borderRadius: '10px', marginTop: '50px' }}>
      {Array.from({ length: count }).map((_, index) => (
        <img key={index} src={require('./Apple.jpg')} alt='Apple' style={{ width: '100px', height: '100px', margin: '5px', borderRadius: '10px' }} />
      ))}
      <h1>Apple Counter</h1>
      <p>Number of apples: {count}</p>
      <button
        style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
        onClick={() => dispatch({ type: 'ADD_APPLE' })}
      >
        Add Apple
      </button>
      <button
        style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
        onClick={() => dispatch({ type: 'Eat_APPLE' })}
      >
        Eat Apple
      </button>
    </div>
  );
}
export default App;