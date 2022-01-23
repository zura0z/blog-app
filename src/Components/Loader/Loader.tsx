import PuffLoader from "react-spinners/PuffLoader";

import color from "../../styles/colors.module.scss";
import styles from "./Loader.module.scss";

interface ILoader {
  loading: boolean;
}

const css = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Loader = ({ loading }: ILoader) => {
  return loading ? (
    <div className={styles.wrapper}>
      <PuffLoader color={color.green} loading={loading} css={css} size={250} />
    </div>
  ) : null;
};

export default Loader;
