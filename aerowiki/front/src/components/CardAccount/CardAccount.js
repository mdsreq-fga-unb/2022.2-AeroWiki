import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/esm/Row';
import './CardAccount.css'
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import Button from 'react-bootstrap/esm/Button';

function CardAccount() {
    const [liberar, setLiberar] = useState(true);
    const [mostrar, setMostrar] = useState('block');
    const [mostrarInverse, setmostrarInverse] = useState('none');
    const [mostrarInverseSenha, setmostrarInverseSenha] = useState('none');

    const editConta = () => {
        setLiberar(false);
        setMostrar('none');
        setmostrarInverse('block');
    }
    const editSenha = () => {
        setMostrar('none');
        setmostrarInverse('block');
        setmostrarInverseSenha('block');
        
        document.getElementById("btsAccount").classList.remove("btsAccount");
        document.getElementById("btsAccount").style.marginBottom='10px';

    }
    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <Row className='TitleAccountCard justify-content-center align-items-center'>
                <Col xxl={3}>
                    <h1 className='TitleAccount'>Minha conta</h1>
                </Col>
            </Row>

            <div className='Body'>
                <div className='ajusteAccount'>
                    {/* <Row>
                        <Col>
                            <FontAwesomeIcon className='PerfilImg' icon={faIcons.faCircleUser} />
                        </Col>
                    </Row> */}
                    <Row className='justify-content-end'>
                        <Col xxl={1}>
                            <Row className='justify-content-end'>
                                <Col xxl={10}>
                                    <Dropdown style={{
                                        display: mostrar,
                                    }}>
                                        <DropdownToggle variant="outline-secondary"><FontAwesomeIcon className='iconAccount' icon={faIcons.faPen} /></DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem onClick={editConta}>Editar conta</DropdownItem>
                                            <DropdownItem onClick={editSenha}>Editar senha</DropdownItem>
                                        </DropdownMenu>

                                    </Dropdown>
                                    {/* <Button variant="outline-secondary" className='accountBt' onClick={editConta}><FontAwesomeIcon icon={faIcons.faPen} /></Button> */}
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Form>
                        <Row>
                            <Col xxl={5}>
                                <Form.Group className="FullName form" controlId="fullName">
                                    <Form.Label className='imputAccount'>Nome</Form.Label>
                                    <Form.Control disabled={liberar} size='lg' className='imputNameAccount activeAccount' type="text" placeholder="Cansado da Silva Pererira Rocha" />
                                </Form.Group>
                                <Form.Group className="Email form" controlId="email">
                                    <Form.Label className='imputAccount'>Email</Form.Label>
                                    <Form.Control disabled={liberar} size='lg' className='imputEmailAccount activeAccount' type="email" placeholder="cansadodasilvapereirarocha2023@zenit.com" />
                                </Form.Group>
                                <Form.Group className="Matricula form" controlId="matricula">
                                    <Form.Label className='imputAccount'>Matrícula</Form.Label>
                                    <Form.Control disabled={true} size='lg' className='imputMatriculaAccount' type="number" placeholder="123456789" />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className="Setor form" controlId="setor">
                                            <Form.Label className='imputAccount'>Setor</Form.Label>
                                            <Form.Control disabled={true} size='lg' className='imputSetorAccount' type="text" placeholder="Marketing" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="Cargo form" controlId="cargo">
                                            <Form.Label className='imputAccount'>Cargo</Form.Label>
                                            <Form.Control disabled={true} size='lg' className='imputCargoAccount' type="text" placeholder="Presidente" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xxl={{ span: 5, offset: 2 }}>
                                <Form.Group className="NascDate form" controlId="nascDate">
                                    <Form.Label className='imputAccount'>Data de nascimento</Form.Label>
                                    <Form.Control disabled={true} size='lg' className='imputNascDateAccount' type="date" value="2000-02-28" />
                                </Form.Group>
                                <Form.Group className="Cpf form" controlId="cpf">
                                    <Form.Label className='imputAccount'>CPF</Form.Label>
                                    <Form.Control disabled={true} size='lg' className='imputCPFAccount' type="number" placeholder="123.456.789-10" />
                                </Form.Group>
                                <Form.Group className="Rg form" controlId="rg">
                                    <Form.Label className='imputAccount'>RG</Form.Label>
                                    <Form.Control disabled={true} size='lg' className='imputRGAccount' type="number" placeholder="12.345.678-9" />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className="changePs NewPs form" style={{
                                                    display: mostrarInverseSenha,
                                                }} controlId="newPs">
                                            <Form.Label className='imputAccount'>Digite a nova senha</Form.Label>
                                            <Form.Control disabled={false} size='lg' className='imputNewPsAccount' type="password" placeholder="Digite aqui" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="changePs NewPs form" style={{
                                                    display: mostrarInverseSenha,
                                                }} controlId="confirmNewPs">
                                            <Form.Label className='imputAccount'>Confirme a nova senha</Form.Label>
                                            <Form.Control disabled={false} size='lg' className='imputCNewPsccount' type="password" placeholder="Confirme aqui" />
                                        </Form.Group>

                                    </Col>
                                </Row>
                                <Row className='justify-content-end'>
                                    <Col xxl={5}>
                                        <Row className='justify-content-end'>
                                            <Col xxl={12}>
                                                <div id='btsAccount' className='btsAccount' style={{
                                                    display: mostrarInverse,
                                                }}>
                                                    <Button className='btSalvarAccount'>Salvar</Button>
                                                    <Button onClick={refreshPage} className='btCancelarAccount'>Cancelar</Button>
                                                </div>
                                            </Col>

                                        </Row>

                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Form>




                </div>
            </div>

        </>
    );
}

export default CardAccount;