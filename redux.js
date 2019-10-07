const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
  counters: []
};

// Reducer Part
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC_COUNTER":
      return {
        ...state,

        counter: state.counter + 1,
        counters: [state.counter + 1]
      };

    case "ADD_COUNTER":
      return {
        ...state,
        counter: state.counter + 7,
        counters: [...state.counters, state.counter + 7]
      };

    case "SUBTRACT_COUNTER":
      return {
        // Subtract the counter by 3
        // Here your logic should be
      };

    case "MULTIPLY_COUNTER":
      return {
        // Multiply the counter by 2
        // Here your logic should be
      };

    default:
      state;
  }
};

// Store Part
const store = createStore(rootReducer);

// Subscription part
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// Dispatching Action Part
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER" });

//store.dispatch({ type: "SUBTRACT_COUNTER" });
//store.dispatch({ type: "THAT_NOT_WORKING!_COUNTER" });
console.log(store.getState());
