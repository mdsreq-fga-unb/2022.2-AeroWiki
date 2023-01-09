import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/esm/Row';
import './CardAccount.css'
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';

function CardAccount() {

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
                            <FontAwesomeIcon icon={faIcons.faPen} />
                        </Col>

                    </Row>

                    <Form>
                        <Row>
                            <Col xxl={5}>
                                <Form.Group className="FullName form" controlId="fullName">
                                    <Form.Label className='imputAccount'>Nome</Form.Label>
                                    <Form.Control disabled={true} size='lg' className='imputNameAccount' type="text" placeholder="Cansado da Silva Pererira Rocha" />
                                </Form.Group>
                                <Form.Group className="Email form" controlId="email">
                                    <Form.Label className='imputAccount'>Email</Form.Label>
                                    <Form.Control disabled={true} size='lg' className='imputEmailAccount' type="email" placeholder="cansadodasilvapereirarocha2023@zenit.com" />
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
                                        <Form.Group className="changePs NewPs form" controlId="newPs">
                                            <Form.Label className='imputAccount'>Digite a nova senha</Form.Label>
                                            <Form.Control disabled={false} size='lg' className='imputNewPsAccount' type="password" placeholder="Digite aqui" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="changePs NewPs form" controlId="confirmNewPs">
                                            <Form.Label className='imputAccount'>Confirme a nova senha</Form.Label>
                                            <Form.Control disabled={false} size='lg' className='imputCNewPsccount' type="password" placeholder="Confirme aqui" />
                                        </Form.Group>
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