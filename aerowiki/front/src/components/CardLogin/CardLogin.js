import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
// import LogoVerical from "../../img/logovertical.svg";
import LogoAerowiki from "../../img/logonew-nobg.png";
import "./CardLogin.css";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { loginUser } from "../../services/login";
import SweetAlert from "../SweetAlert/SweetAlert";

const MySwal = withReactContent(Swal);

function Cardlogin() {
  const [emailLogin, setEmailLogin] = useState();
  const [senhaLogin, setSenhaLogin] = useState();

  const sendLoginForm = async (e) => {
    e.preventDefault();
    //Validações Login
    if (emailLogin === undefined) {
      return SweetAlert('warning', 'Por favor, insira seu email Zenit.')
    }
    else if (senhaLogin === undefined) {
      return SweetAlert('warning', 'Por favor, insira sua senha.')
    }

    //Requisição de Login
    try {
      const response = await loginUser(emailLogin, senhaLogin);
      resultadoLogin(response)
    } catch (err) {
      resultadoLogin(err.response)
    }
  };

  function resultadoLogin(resultado) {
    try {
      if (resultado.status === 400) {
        const resMessage = resultado.data.message
        if (resMessage === 'ERRO NO SISTEMA') {
          return SweetAlert('error', 'Ocorreu um erro no sistema. D:', 'Por favor, tente novamente mais tarde.')
        }
        return SweetAlert('error', resultado.data.message, 'Por favor, contate o gerente ou diretor do seu setor.')
      }
      else if (resultado.status === 200) {
        // sessionStorage.setItem("senhaReal", resultado.data.password)
        // sessionStorage.setItem("emailReal", resultado.data.email)
        // sessionStorage.setItem("nomeReal", resultado.data.name)
        // sessionStorage.setItem("cargoReal", resultado.data.role)
        // sessionStorage.setItem("matriculaReal", resultado.data.unb_id)

        sessionStorage.setItem('nome', resultado.data.name)
        sessionStorage.setItem('email', resultado.data.email)
        sessionStorage.setItem('matricula', resultado.data.unb_id)
        sessionStorage.setItem('telefone', resultado.data.telephone)
        sessionStorage.setItem('setor', resultado.data.area)
        sessionStorage.setItem('cargo', resultado.data.role)
        sessionStorage.setItem('dataNasc', resultado.data.birthdate)
        sessionStorage.setItem('cpf', resultado.data.cpf)
        sessionStorage.setItem('rg', resultado.data.rg)
        sessionStorage.setItem('senha', resultado.data.password)

        window.location.href = "/home"
      }
    }
    catch (err) {
      console.log(err);
      SweetAlert('error', 'Ocorreu um erro no sistema. D:', 'Por favor, tente novamente mais tarde.')
    }
  }
  return (
    <>
      <div id="login-logo">
        <img src={LogoAerowiki} alt="logo"></img>
      </div>
      <h1 className="TitleLogin justify-content-center">AEROWIKI</h1>
      <h3 className="Sub-title justify-content-center">Entrar</h3>
      <Row className="justify-content-center">
        <Col xxl={4} className="menu-login">
          <Row className="justify-content-center">
            <Col xxl={8}>
              <Form className="3">
                <FloatingLabel label="E-mail Zenit">
                  <Form.Control
                    className=" input username"
                    type="email"
                    value={emailLogin}
                    onChange={(e) => setEmailLogin(e.target.value)}
                    placeholder="E-mail"
                  />
                </FloatingLabel>
                <FloatingLabel label="Senha">
                  <Form.Control
                    className="input senha"
                    type="password"
                    value={senhaLogin}
                    onChange={(e) => setSenhaLogin(e.target.value)}
                    placeholder="Senha"
                  />
                </FloatingLabel>
                <Row className="justify-content-center">
                  <Button
                    onClick={sendLoginForm}
                    type="submit"
                    className="secondary"
                    variant="outline-light col-5"
                  >
                    Entrar
                  </Button>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center">

      </Row>
    </>
  );
}

export default Cardlogin;
