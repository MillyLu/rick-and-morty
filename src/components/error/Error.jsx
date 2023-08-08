import styles from './index.module.scss';
import { Container } from '../container/Container';

export function Error() {

  return (
    <Container>
            
      <p className={styles.error}>Упс...кажется такого персонажа не существует</p>

    </Container>
        
  );
}