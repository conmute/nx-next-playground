import { MyNewComponent } from 'apps/website.com/components/my-new-component/my-new-component';
import { MyLibComponent } from 'next-lib';
import styles from './page.module.css';

/* eslint-disable-next-line */
export interface MyNewPageProps {}

export function MyNewPage(props: MyNewPageProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyNewPage!</h1>

      <MyNewComponent />

      <MyLibComponent />
    </div>
  );
}

export default MyNewPage;
