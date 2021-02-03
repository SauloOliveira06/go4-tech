export const initialState = {
  favorite: [],
  loggedinuser: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorite: [...state.favorite, action.item],
      };
    case "SET_LOGIN":
      return {
        ...state,
        loggedinuser: action.user,
      };
    case "REMOVE_FROM_FAVORITE":
      let newcart = [...state.favorite];
      const index = state.favorite.findIndex(
        (favoriteItem) => favoriteItem.id === action.id
      );

      if (index >= 0) {
        newcart.splice(index, 1);
      } else {
        console.log("There were errors while removing the favorite book!");
      }
      return { ...state, favorite: newcart };
  }
};

export default reducer;
