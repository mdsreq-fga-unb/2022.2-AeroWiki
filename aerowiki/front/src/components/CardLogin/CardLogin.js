import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import LogoVerical from '../../img/logovertical.svg';
import './CardLogin.css'
import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function Cardlogin() {

    const [matriculaLogin, setMatriculaLogin] = useState();
    const [senhaLogin, setSenhaLogin] = useState();

    function loginBanco() {
        // alert('Matrícula: ' + matriculaLogin + "\n" +
        //     "Senha: " + senhaLogin + "\n"
        // )
        if (matriculaLogin != undefined && matriculaLogin != "") {
            if (senhaLogin != undefined && senhaLogin != "") {
                MySwal.fire({
                    title: <strong>Cadastro realizado com sucesso</strong>,
                    icon: 'success'
                })
            } else {
                MySwal.fire({
                    title: <strong>Digite uma senha válida</strong>,
                    icon: 'error'
                })
            }
        } else {
            MySwal.fire({
                title: <strong>Digite uma matrícula válida</strong>,
                icon: 'error'
            })
        }

    }

    return (
        <>
            <h1 className="TitleLogin justify-content-center" ><bold>AERO WIKI</bold></h1>
            <h3 className="Sub-title justify-content-center">login</h3>
            <Row className='justify-content-center'>
                <Col xxl={4} className='menu-login'>
                    <Row className='justify-content-center'>
                        <Col xxl={8}>
                            <Form className='3'>
                                <FloatingLabel label='Matrícula'>
                                    <Form.Control className='username' type="number" value={matriculaLogin} onChange={(e) => setMatriculaLogin(e.target.value)} placeholder="Matrícula" />
                                </FloatingLabel>
                                <FloatingLabel label='Senha'>
                                    <Form.Control className='senha' type="password" value={senhaLogin} onChange={(e) => setSenhaLogin(e.target.value)} placeholder="Senha" />
                                </FloatingLabel>
                                <Row className='justify-content-center'>
                                    <Button onClick={loginBanco} className='secondary' variant="outline-light col-5">Entrar</Button>{''}
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <div id='login-logo'>
                    <img src={LogoVerical} alt='logo'></img>
                </div>
            </Row>
        </>
    );
}

export default Cardlogin;
