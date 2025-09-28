import onChange from "on-change";

const initialState = {
  feeds: [],
  posts: [],
};

export const state = onChange(initialState, (path, value, previousValue) => {
  console.log(`State changed: ${path}`, value);
});
