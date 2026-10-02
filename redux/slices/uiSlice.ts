import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
    isNavbarVisible: boolean;
    isMopileMenueOpen: boolean;
}

const initialState: UIState = {
    isNavbarVisible: true,
    isMopileMenueOpen: false,
}

export const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers: {
        setNavbarVisibility: (state, action: PayloadAction<boolean>) => {
            state.isNavbarVisible = action.payload;
        },
        showNavbar: (state) => {
            state.isNavbarVisible = true;
        },
        hideNavbar: (state) => {
            state.isNavbarVisible = false;
        },
        toggleMobileMenu: (state) => {
            state.isMopileMenueOpen = !state.isMopileMenueOpen;
        },
        closeMobileMenu: (state) => {
            state.isMopileMenueOpen = false;
        },
    }
})

export const { setNavbarVisibility, showNavbar, hideNavbar, toggleMobileMenu, closeMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;