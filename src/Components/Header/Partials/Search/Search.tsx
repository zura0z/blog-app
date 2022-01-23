import { ChangeEvent, FormEvent, useState } from "react";

import Icon from "../../../Icon/Icon";

import useHistory from "../../../../hooks/useHistory";
import useTheme from "../../../../hooks/useTheme";

import search from "../../../../assets/icons/search.svg";
import styles from "./Search.module.scss";

const Search = () => {
  const [query, setQuery] = useState("");
  const { navigate } = useHistory();
  const { theme } = useTheme();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = query.trim();

    if (search) {
      navigate(`/posts?search=${search}`);
      setQuery("");
    } else {
      navigate(`/`);
    }
  };

  return (
    <form
      className={[styles.wrapper, styles[theme]].join(" ")}
      onSubmit={handleSubmit}
    >
      <div className={styles.inputWrapper}>
        <input value={query} onChange={handleChange} className={styles.input} />
        <Icon icon={search} onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default Search;
