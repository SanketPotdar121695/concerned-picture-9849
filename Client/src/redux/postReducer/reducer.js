import {} from './actionTypes';

const initalState = {
  isLoadin: false,
  isError: false,
  posts: []
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
