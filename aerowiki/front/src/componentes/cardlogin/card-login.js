import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Logovert from '../logo-vertical/logovertical';
import './card-login.css'

function Cardlogin() {
    return (
        <>
            <div className='container'>
                <h1 className="Tittle justify-content-center" ><bold>AERO WIKI</bold></h1>
                <div className="">
                    <Form>
                        <Form.Control type="email" placeholder="Matricula" />
                        <Form.Control type="password" placeholder="Password" />
                    </Form>
                    <Button variant="secondary">Entrar</Button>{' '}
                </div>

                <Logovert className="align-self-center" />
            </div>
                
            
        </>
    );
}

export default Cardlogin;
