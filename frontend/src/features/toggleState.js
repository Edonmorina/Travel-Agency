import { createSlice } from '@reduxjs/toolkit';

export const toggleState = createSlice({
    name: "TOGGLE_MENU_BTN",
    initialState: { value: { isToggled: false} },
    reducers: {
        toggle: (state, action) => {
            state.value = !state.value;
        }
    }
});

export const { toggle } = toggleState.actions;

export default toggleState.reducer;