import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { handleScoreChange } from '../redux/actions';
import Header from '../components/Header';
import Button from '../components/Button';
import Container from '../components/Container';
;

function FinalScore ()  {
    const {score } = useSelector(state => state)
    const router = useRouter()
    const dispatch = useDispatch()
    const handleBackSettings = () => {
        dispatch(handleScoreChange(0))
        router.push('/')
    }
    return (
        <Container direction="column">
            <Container>
                <Header>
                    Final Socre {score}
                </Header>
            </Container>
            <Container>
                <Button
                    variant="outlined"
                    onClick={handleBackSettings}
                >
                    Back to the start!
                </Button>
            </Container>
        </Container>
    );
}
 
export default FinalScore;