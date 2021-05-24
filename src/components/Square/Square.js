import styles from './Square.module.scss';

const Square = ({ style }) => {
  return (
    <div className={styles.Square}>
      <div style={{ ...style }}></div>
    </div>
  );
};

export default Square;
