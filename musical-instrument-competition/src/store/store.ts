import { configureStore } from "@reduxjs/toolkit";
import stageLightningReducer from "../slices/stageLightningSlice";
import stageSpeakersReducer from "../slices/speakersSlice";
import walleDanceReducer from "../slices/walleSlice";

const store = configureStore({
  reducer: {
    stageLightning: stageLightningReducer,
    stageSpeakers: stageSpeakersReducer,
    walleDance: walleDanceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
