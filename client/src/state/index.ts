import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: initialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false
}

export const GlobalSlice = createSlice({
  name: "Global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    }
  }
})

export const { setIsDarkMode, setIsSidebarCollapsed } = GlobalSlice.actions;

export default GlobalSlice.reducer