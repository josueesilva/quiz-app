
import Button from '../components/Button'
import Container from '../components/Container'
import LabelField from '../components/LabelField'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import  { useState } from 'react'
import { Modal } from '../components/Modal'
import {
    handleUserChange
} from '../redux/actions'
import Input from '../components/Input'


function App ()  {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState('')
    const openModal =  () => {
        setShowModal(prev => !prev)
    }
    const router = useRouter()
    
    const handleSubmit = e => {
        e.preventDefault();
        setName('')
        dispatch(handleUserChange(''))
        openModal()
    }
    
    const handleClickBack = () => {
        setShowModal(false)
    }

    const handleClickNext = (e) => {
        e.preventDefault();
        
        dispatch(handleUserChange(name))
       router.push('/questions')
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <Container mt={3} width="100%">
                <Button fullWidth variant="contained" type="submit">
                    Get Started
                </Button>
            </Container>
        </form>
        
        <Modal showModal={showModal} setShowModal={setShowModal}>
            <Container>
                <LabelField>
                    What's your name:
                </LabelField>
            </Container>
            <Container>
                <Input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
            </Container>
            <Container>
                <Button onClick={handleClickBack}>
                    Back
                </Button>
                
                <Button onClick={handleClickNext}>
                    Next        
                </Button>
            </Container>
        </Modal>
        </>
    );
}
 
export default App;