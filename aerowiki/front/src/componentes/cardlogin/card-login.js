import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Logovert from '../logo-vertical/logovertical';
import './card-login.css'

function Cardlogin() {
    return (
        <>
            <h1 className="Title justify-content-center" ><bold>AERO WIKI</bold></h1>
            <div className="justify-content-center align-items-center">
                <h3 className="Sub-title">login</h3>
                <div className='row'>
                    <div className='col-4' />
                    <div className='col-4'>
                        <div className='row'>
                            <div className='col-2' />
                            <div className='col-7 menu-login'>
                                <Form>
                                    <FloatingLabel label='Matrícula'>
                                        <Form.Control className='username' type="email" placeholder="Matrícula" />
                                    </FloatingLabel>
                                    <FloatingLabel label='Senha'>
                                        <Form.Control className='senha' type="password" placeholder="Senha" />
                                    </FloatingLabel>
                                    <div className='row'>
                                        <div className='col-3' />
                                        <Button className='secondary' variant="outline-light col-5">Entrar</Button>{' '}
                                    </div>
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center'>
                {/* <div className='coluna col-3' /> */}
                <div className="col-4 logo">
                    <Logovert />
                </div>

            </div>
        </>
    );
}

export default Cardlogin;
