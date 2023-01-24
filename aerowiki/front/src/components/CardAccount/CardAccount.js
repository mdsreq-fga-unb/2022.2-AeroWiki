import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/esm/Row';
import './CardAccount.css'
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from 'react';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import Button from 'react-bootstrap/esm/Button';
import { getMembers } from '../../services/getMembers'
import email from '../../testes/validacoes/email';
import { updateUser } from '../../services/updateUser';



function CardAccount() {
    const attform = async () => {
        try {
            const response = await getMembers()
            console.log("atualizado")
            // console.log(response.data)
            let jazon = response.data
            // const membersData = JSON.stringify(response.data)
            let emailReal = sessionStorage.getItem('emailReal')
            // console.log(jazon)
            // alert(jazon[0]["email"])
            var i
            for (i = 0; i < jazon.length; i++) {
                if (emailReal === jazon[i]["email"]) {
                    
                    sessionStorage.setItem('nomebanco', jazon[i]['name'])
                    sessionStorage.setItem('nomeReal', jazon[i]['name'])
                    sessionStorage.setItem('emailbanco', jazon[i]['email'])
                    sessionStorage.setItem('matriculabanco', jazon[i]['unb_id'])
                    sessionStorage.setItem('telefonebanco', jazon[i]['telephone'])
                    sessionStorage.setItem('setorbanco', jazon[i]['area'])
                    sessionStorage.setItem('cargobanco', jazon[i]['role'])
                    sessionStorage.setItem('dataNascbanco', jazon[i]['birthdate'])
                    sessionStorage.setItem('cpfbanco', jazon[i]['cpf'])
                    sessionStorage.setItem('rgbanco', jazon[i]['rg'])
                }
            }

        } catch (error) {
            console.log("erro")
            console.log(error)
        }
    }
    attform()
    // sessionStorage.setItem('matriculabanco', '190087439')
    // sessionStorage.setItem('telefonebanco', '111111')
    // sessionStorage.setItem('setorbanco', 'aaaaaa')
    // sessionStorage.setItem('cargobanco', 'aaaaaa')
    // sessionStorage.setItem('dataNascbanco','1111-11-11' )
    // sessionStorage.setItem('cpfbanco', '1111111')
    // sessionStorage.setItem('rgbanco','11111111')

    const update = async (e) => {
        
        // e.preventDefault();
        try {
            const response = await updateUser(nome, email, matricula, telefone)
            console.log("updateuser")
            console.log(response)
            refreshPage()
            // resultadoCadastro(r)
        } catch (error) {
            console.log("errado")
            console.log(error)
            // resultadoCadastro(error['response'])
        }
    }

    let nomebanco = sessionStorage.getItem('nomebanco')
    let emailbanco = sessionStorage.getItem('emailbanco')
    let matriculabanco = sessionStorage.getItem('matriculabanco')
    let telefonebanco = sessionStorage.getItem('telefonebanco')
    let setorbanco = sessionStorage.getItem('setorbanco')
    let cargobanco = sessionStorage.getItem('cargobanco')
    let dataNascbanco = sessionStorage.getItem('dataNascbanco')
    let cpfbanco = sessionStorage.getItem('cpfbanco')
    let rgbanco = sessionStorage.getItem('rgbanco')



    const [liberar, setLiberar] = useState(true);
    const [mostrar, setMostrar] = useState('block');
    const [mostrarInverse, setmostrarInverse] = useState('none');
    const [mostrarInverseSenha, setmostrarInverseSenha] = useState('none');


    const [nome, setNome] = useState(nomebanco);
    const [email, setEmail] = useState(emailbanco);
    const [matricula, setMatricula] = useState(matriculabanco);
    const [telefone, setTelefone] = useState(telefonebanco);
    const [setor, setSetor] = useState(setorbanco);
    const [cargo, setCargo] = useState(cargobanco);
    const [dataNasc, setDataNasc] = useState(dataNascbanco);
    const [cpf, setCpf] = useState(cpfbanco);
    const [rg, setRg] = useState(rgbanco);




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
        document.getElementById("btsAccount").style.marginBottom = '10px';

    }
    function refreshPage() {
        window.location.href = "/myAccount";
    }

    return (
        <>
            <Row className='TitleAccountCard justify-content-center align-items-center'>
                <Col xxl={4} xl={6}>
                    <h1 className='TitleAccount'>Minha conta</h1>
                </Col>
            </Row>

            <main>
                <div className='ajusteAccount'>
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

                    <Form onSubmit={update}>
                        <Row>
                            <Col xxl={5}>
                                <Form.Group className="FullName form" controlId="fullName">
                                    <Form.Label className='imputAccount'>Nome</Form.Label>
                                    <Form.Control disabled={liberar} size='lg' value={nome} onChange={(e) => setNome(e.target.value)} className='imputNameAccount activeAccount' type="text" placeholder="Digite seu nome" />
                                </Form.Group>
                                <Form.Group className="Email form" controlId="email">
                                    <Form.Label className='imputAccount'>Email</Form.Label>
                                    <Form.Control disabled={liberar} size='lg' value={email} onChange={(e) => setEmail(e.target.value)} className='imputEmailAccount activeAccount' type="email" placeholder="Digite seu email" />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className="Matricula form" controlId="matricula">
                                            <Form.Label className='imputAccount'>Matrícula</Form.Label>
                                            <Form.Control disabled={true} size='lg' value={matricula} onChange={(e) => setMatricula(e.target.value)} className='imputMatriculaAccount' type="number" placeholder="Digite sua matrícula" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="Telefone form" controlId="telefone">
                                            <Form.Label className='imputAccount'>Telefone</Form.Label>
                                            <Form.Control disabled={liberar} size='lg' value={telefone} onChange={(e) => setTelefone(e.target.value)} className='imputTelefoneAccount' type="tel" placeholder="(YY)XXXXX-XXXX" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="Setor form" controlId="setor">
                                            <Form.Label className='imputAccount'>Setor</Form.Label>
                                            <Form.Control disabled={true} size='lg' value={setor} onChange={(e) => setSetor(e.target.value)} className='imputSetorAccount' type="text" placeholder="Sem setor" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="Cargo form" controlId="cargo">
                                            <Form.Label className='imputAccount'>Cargo</Form.Label>
                                            <Form.Control disabled={true} size='lg' value={cargo} onChange={(e) => setCargo(e.target.value)} className='imputCargoAccount' type="text" placeholder="Sem cargo" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xxl={{ span: 5, offset: 2 }}>
                                <Form.Group className="NascDate form" controlId="nascDate">
                                    <Form.Label className='imputAccount'>Data de nascimento</Form.Label>
                                    <Form.Control disabled={true} size='lg' value={dataNasc} onChange={(e) => setDataNasc(e.target.value)} className='imputNascDateAccount' type="date" />
                                </Form.Group>
                                <Form.Group className="Cpf form" controlId="cpf">
                                    <Form.Label className='imputAccount'>CPF</Form.Label>
                                    <Form.Control disabled={true} size='lg' value={cpf} onChange={(e) => setCpf(e.target.value)} className='imputCPFAccount' type="number" placeholder="AAABBBCCCDD" />
                                </Form.Group>
                                <Form.Group className="Rg form" controlId="rg">
                                    <Form.Label className='imputAccount'>RG</Form.Label>
                                    <Form.Control disabled={true} size='lg' value={rg} onChange={(e) => setRg(e.target.value)} className='imputRGAccount' type="number" placeholder="AABBBCCCD" />
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
                                                    <Button type='submit' className='btSalvarAccount'>Salvar</Button>
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
            </main>

        </>
    );
}

export default CardAccount;