export default (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, { ...action.book }];
    case 'REMOVE_BOOK':
      return state.filter(b => b.id !== action.id);
    default:
      return state;
  }
};
