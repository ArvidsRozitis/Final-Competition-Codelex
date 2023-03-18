import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StageLightningType = {
  leftLightning: boolean;
  rightLightning: boolean;
};

const initialState: StageLightningType = {
  leftLightning: false,
  rightLightning: false,
};

const stageLightningSlice = createSlice({
  name: "stageLightning",
  initialState,
  reducers: {
    setLeftLightningIsActive: (state, action: PayloadAction<boolean>) => {
      state.leftLightning = action.payload;
    },
    setRightLightningIsActive: (state, action: PayloadAction<boolean>) => {
      state.rightLightning = action.payload;
    },
  },
});

export const { setLeftLightningIsActive, setRightLightningIsActive } =
  stageLightningSlice.actions;

export default stageLightningSlice.reducer;
