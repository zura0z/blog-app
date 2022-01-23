import styles from "./Icon.module.scss";

interface IIcon {
  icon: string;
  onClick?: (e?: any) => void;
}

const Icon = ({ icon, onClick }: IIcon) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <img src={icon} alt={icon} width={20} height={20} />
    </div>
  );
};

export default Icon;
