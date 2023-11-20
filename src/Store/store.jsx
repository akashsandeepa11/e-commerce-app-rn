import CategoryReducer from "./ReduxSlice/CategorySlice";
import UserReducer from "./ReduxSlice/UserSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    category: CategoryReducer,
    user: UserReducer,
  },
});

export default store;
