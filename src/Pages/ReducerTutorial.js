import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showText: state.showText };
    case 'toggleShowText':
      return { count: state.count, showText: !state.showText };
    default:
      return state
  }
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true })

  return (
    <>
      <h2>This is the Reducer Tutorial</h2>
      <div>
        <h3>{state.count}</h3>
        <button
          onClick={() => {
            dispatch({ type: 'INCREMENT' })
            dispatch({ type: 'toggleShowText' })
          }}
        >
          Click Here
        </button>

        {state.showText && <p>This is a text</p>}
      </div>
    </>
  )
}

export default ReducerTutorial
