import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Определяем начальную тему
const getTheme = (): string => {
  const theme = localStorage.getItem("theme");
  if (["light", "dark"].includes(theme)) return theme;

  const useMedia = matchMedia("(prefers-color-scheme: light)");
  if (useMedia.matches) return "light";

  return "light";
};

const initialState = getTheme();

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<"dark" | "light">) =>
      action.payload,
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
