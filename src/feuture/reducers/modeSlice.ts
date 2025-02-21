import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModeState {
    mode: "desktop" | "mobile";

}

const initialState: ModeState = {
    mode: "desktop",
}

const modelSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setMode:(state, action: PayloadAction<"desktop" | "mobile">) => {
            state.mode = action.payload
        },
    },
})

export const { setMode } = modelSlice.actions;
export default modelSlice.reducer;