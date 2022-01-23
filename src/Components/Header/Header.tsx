import ThemeToggle from "./Partials/ThemeToggle/ThemeToggle";
import Search from "./Partials/Search/Search";
import Icon from "../Icon/Icon";

import useHistory from "../../hooks/useHistory";
import useTheme from "../../hooks/useTheme";

import add from "../../assets/icons/add.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const { navigate } = useHistory();
  const { theme } = useTheme();

  return (
    <div className={[styles.wrapper, styles[theme]].join(" ")}>
      <header onClick={() => navigate("/")}>Blog</header>
      <Search />
      <div className={styles.iconsWrapper}>
        <Icon icon={add} onClick={() => navigate("/post/add")} />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
