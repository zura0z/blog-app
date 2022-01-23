import Icon from "../../../Icon/Icon";

import useTheme, { Theme } from "../../../../hooks/useTheme";

import sun from "../../../../assets/icons/sun.svg";
import halfMoon from "../../../../assets/icons/halfMoon.svg";
import styles from "./ThemeToggle.module.scss";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.wrapper}>
      <Icon
        icon={theme === Theme.dark ? sun : halfMoon}
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ThemeToggle;
