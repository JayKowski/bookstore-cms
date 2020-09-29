export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, Object.assign(...action.book)];
    case 'REMOVE_BOOK':
      return state.filter(b => b.id !== action.book.id);
    default:
      return state;
  }
};
