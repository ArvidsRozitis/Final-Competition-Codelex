import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WalleType = {
  leftHandUp: boolean;
  rightHandUp: boolean;
};

const initialState: WalleType = {
  leftHandUp: false,
  rightHandUp: false,
};

const walleSlice = createSlice({
  name: "walleDancing",
  initialState,
  reducers: {
    setLeftHandUp: (state, action: PayloadAction<boolean>) => {
      state.leftHandUp = action.payload;
    },
    setRightHandUp: (state, action: PayloadAction<boolean>) => {
      state.rightHandUp = action.payload;
    },
  },
});

export const { setLeftHandUp, setRightHandUp } =
walleSlice.actions;

export default walleSlice.reducer;
