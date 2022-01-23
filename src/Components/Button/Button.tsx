import styles from "./Button.module.scss";

export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
  danger = "danger",
}

interface IButton {
  type?: ButtonType;
  onClick: () => void;
  children: string | JSX.Element;
  disabled?: boolean;
}

const Button = ({ onClick, children, type, disabled }: IButton) => {
  return (
    <button
      className={[styles.wrapper, styles[type!]].join(" ")}
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? "Processing..." : children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  type: ButtonType.primary,
};
