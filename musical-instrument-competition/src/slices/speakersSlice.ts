import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StageSpeakerType = {
    isMoving: boolean;
};

const initialState: StageSpeakerType = {
  isMoving: false,
};

const stageSpeakersSlice = createSlice({
  name: "stageSpeakers",
  initialState,
  reducers: {
    setSpeakerMove: (state, action: PayloadAction<boolean>) => {
      state.isMoving = action.payload;
    },
  },
});

export const { setSpeakerMove } = stageSpeakersSlice.actions;

export default stageSpeakersSlice.reducer;
