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
// import { getMembers } from '../../services/getMembers'
import validacaoEmail from '../../testes/validacoes/email';
import { updateUser } from '../../services/updateUser';
import SweetAlert from '../SweetAlert/SweetAlert';
// import load from "../../img/loding.png"
// import LoadingIcon from '../LoadingIcon/LoadingIcon';

function CardAccount() {
    // const attform = async () => {
    //     try {
    //         const response = await getMembers()
    //         console.log("atualizado")
    //         // console.log(response.data)
    //         let jazon = response.data
    //         // const membersData = JSON.stringify(response.data)
    //         let matriculaReal = sessionStorage.getItem('matriculaReal')
    //         // console.log(jazon)

    //         for (var i = 0; i < jazon.length; i++) {
    //             if (matriculaReal === jazon[i]["unb_id"]) {

    //                 sessionStorage.setItem('nomebanco', jazon[i]['name'])
    //                 sessionStorage.setItem('nomeReal', jazon[i]['name'])
    //                 sessionStorage.setItem('emailbanco', jazon[i]['email'])
    //                 sessionStorage.setItem('matriculabanco', jazon[i]['unb_id'])
    //                 sessionStorage.setItem('telefonebanco', jazon[i]['telephone'])
    //                 sessionStorage.setItem('setorbanco', jazon[i]['area'])
    //                 sessionStorage.setItem('cargobanco', jazon[i]['role'])
    //                 sessionStorage.setItem('dataNascbanco', jazon[i]['birthdate'])
    //                 sessionStorage.setItem('cpfbanco', jazon[i]['cpf'])
    //                 sessionStorage.setItem('rgbanco', jazon[i]['rg'])
    //                 sessionStorage.setItem('senhabanco', jazon[i]['password'])
    //             }
    //         }
    //     } catch (error) {
    //         console.log("erro")
    //         console.log(error)
    //     }
    // }
    // attform()

    let nomebanco = sessionStorage.getItem('nome')
    let emailbanco = sessionStorage.getItem('email')
    let matriculabanco = sessionStorage.getItem('matricula')
    let telefonebanco = sessionStorage.getItem('telefone')
    let setorbanco = sessionStorage.getItem('setor')
    let cargobanco = sessionStorage.getItem('cargo')
    let dataNascbanco = sessionStorage.getItem('dataNasc')
    let cpfbanco = sessionStorage.getItem('cpf')
    let rgbanco = sessionStorage.getItem('rg')
    let senhabanco = sessionStorage.getItem('senha')

    const sendUpdateForm = async (e) => {
        if(!validacaoEmail(email)){
            return SweetAlert("warning", "Por favor, utilize um email válido.")
        }

        let senhaDefinit = senhabanco

        if (senhaConfirm !== undefined || senha !== undefined) {
            if (senha === senhaConfirm) {
                if (senha === senhaDefinit) {
                    return SweetAlert("warning", "Por favor, utilize uma senha diferente da senha atual.")
                } else {
                    senhaDefinit = senha
                }
            } else {
                return SweetAlert("warning", "As senhas não conferem.")
            }
        }
        // e.preventDefault();
        try {
            const response = await updateUser(nome, email, matricula, telefone, senhaDefinit)
            sessionStorage.setItem('nome', nome)
            sessionStorage.setItem('telefone', telefone)

            if (email !== emailbanco || senhaDefinit !== senhabanco) {
                SweetAlert("success", "Dados alterados com sucesso!" ,"Por favor, faça login novamente.").then(result => {
                    if (result) {
                        sessionStorage.clear()
                        window.location.href = "/login"
                    }
                })
            }
            else {
                refreshPage()
            }

        } catch (error) {
            console.log("errado")
            console.log(error)
            // resultadoCadastro(error['response'])
        }
    }

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
        document.getElementById("btsAccount").style.marginBottom = '10px';
    }
    const cancelar = () =>{
        setLiberar(true)
        setMostrar('block')
        setmostrarInverse('none')
        setmostrarInverseSenha('none')
    }
    function refreshPage() {
        window.location.href = "/myAccount";
    }

    const [nome, setNome] = useState(nomebanco);
    const [email, setEmail] = useState(emailbanco);
    const [matricula, setMatricula] = useState(matriculabanco);
    const [telefone, setTelefone] = useState(telefonebanco);
    // const [setor, setSetor] = useState(setorbanco);
    // const [cargo, setCargo] = useState(cargobanco);
    // const [dataNasc, setDataNasc] = useState(dataNascbanco);
    // const [cpf, setCpf] = useState(cpfbanco);
    // const [rg, setRg] = useState(rgbanco);
    const [senha, setSenha] = useState()
    const [senhaConfirm, setSenhaConfirm] = useState()

    return (
        <>
            {/* <div id='load-bg' className='form-bg'></div>
            <img id="load" className="logoLoadoff" src={load} alt="loading..." /> */}

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

                    <Form /* onSubmit={update}*/ >
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
                                            <Form.Control disabled={true} size='lg' value={matriculabanco} className='imputMatriculaAccount' type="number" placeholder="Digite sua matrícula" />
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
                                            <Form.Control disabled={true} size='lg' value={setorbanco} className='imputSetorAccount' type="text" placeholder="Sem setor" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="Cargo form" controlId="cargo">
                                            <Form.Label className='imputAccount'>Cargo</Form.Label>
                                            <Form.Control disabled={true} size='lg' value={cargobanco} className='imputCargoAccount' type="text" placeholder="Sem cargo" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xxl={{ span: 5, offset: 2 }}>
                                <Form.Group className="NascDate form" controlId="nascDate">
                                    <Form.Label className='imputAccount'>Data de nascimento</Form.Label>
                                    <Form.Control disabled={true} size='lg' value={dataNascbanco} className='imputNascDateAccount' type="date" />
                                </Form.Group>
                                <Form.Group className="Cpf form" controlId="cpf">
                                    <Form.Label className='imputAccount'>CPF</Form.Label>
                                    <Form.Control disabled={true} size='lg' value={cpfbanco} className='imputCPFAccount' type="number" placeholder="AAABBBCCCDD" />
                                </Form.Group>
                                <Form.Group className="Rg form" controlId="rg">
                                    <Form.Label className='imputAccount'>RG</Form.Label>
                                    <Form.Control disabled={true} size='lg' value={rgbanco} className='imputRGAccount' type="number" placeholder="AABBBCCCD" />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className="changePs NewPs form" style={{
                                            display: mostrarInverseSenha,
                                        }} controlId="newPs">
                                            <Form.Label className='imputAccount'>Digite a nova senha</Form.Label>
                                            <Form.Control autocomplete="off" disabled={false} size='lg' value={senha} onChange={(e) => setSenha(e.target.value)} className='imputNewPsAccount' type="password" placeholder="Digite aqui" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="changePs NewPs form" style={{
                                            display: mostrarInverseSenha,
                                        }} controlId="confirmNewPs">
                                            <Form.Label className='imputAccount'>Confirme a nova senha</Form.Label>
                                            <Form.Control autocomplete="off" disabled={false} size='lg' value={senhaConfirm} onChange={(e) => setSenhaConfirm(e.target.value)} className='imputCNewPsccount' type="password" placeholder="Confirme aqui" />
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
                                                    <Button onClick={sendUpdateForm} type='button' className='btSalvarAccount'>Salvar</Button>
                                                    <Button onClick={cancelar} className='btCancelarAccount'>Cancelar</Button>
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