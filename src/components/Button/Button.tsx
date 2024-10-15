import styles from "./button.module.scss";

type Props = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

export const Button: React.FC<Props> = (_props) => {
  const { label, ...props } = _props;

  return (
    <button type="button" {...props} className={styles.wrapper}>
      {label}
    </button>
  );
};
