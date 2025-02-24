import { createStore } from 'redux';

const initialState = {
  darkMode: localStorage.getItem('theme') === 'dark',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      const newTheme = !state.darkMode;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return { ...state, darkMode: newTheme };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;