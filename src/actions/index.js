export const ADD_POST = 'ADD_POST'

export function addPost ({ category, post }) {
  return {
    type: ADD_POST,
    category,
    post
  }
}
