import styles from './index.module.scss';
import { Container } from '../container/Container';

export function Title() {

    return(
        <Container>
            <h1 className={styles.title}>The Rick and Morty characters</h1>
        </Container>
        
    )
}