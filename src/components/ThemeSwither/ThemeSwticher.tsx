import React, { useEffect } from "react";
import cn from "classnames";
import { FaMoon } from "react-icons/fa";
import { TbSun } from "react-icons/tb";
import styles from "./ThemeSwitcher.module.scss";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../redux/hooks/hooks";
import { toggleTheme } from "../../redux/slices/themeSlice";

export enum Themes {
  dark = "dark",
  light = "light",
}

const ThemeSwticher: React.FC = (): JSX.Element => {
  const theme = useTypedSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () =>
    dispatch(toggleTheme(theme === Themes.dark ? Themes.light : Themes.dark));

  return (
    <div className={styles.switcher}>
      <div className={styles.switcherButton} onClick={handleThemeSwitch}>
        {theme === Themes.dark ? (
          <FaMoon className={cn(styles.themeIcon, styles.moon)} />
        ) : (
          <TbSun className={cn(styles.themeIcon, styles.sun)} />
        )}
      </div>
      {/*<p className={styles.title}>*/}
      {/*  {theme === Themes.light ? "Светлая" : "Темная"}*/}
      {/*</p>*/}
    </div>
  );
};

export default ThemeSwticher;
