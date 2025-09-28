import onChange from "on-change";

const initialState = {
  feeds: [],
  posts: [],
};

export const state = onChange(initialState, (path, value) => {
  console.log(`State changed: ${path}`, value);
});
