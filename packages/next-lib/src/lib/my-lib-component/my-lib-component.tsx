import styles from './my-lib-component.module.css';

/* eslint-disable-next-line */
export interface MyLibComponentProps {}

export function MyLibComponent(props: MyLibComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyLibComponent!</h1>
    </div>
  );
}

export default MyLibComponent;
