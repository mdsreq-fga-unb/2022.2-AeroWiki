import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import LogoVerical from "../../img/logovertical.svg";
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

  const loginForm = async (e) => {
    e.preventDefault();
    try {
      const r = await loginUser(emailLogin, senhaLogin);
      console.log("certo");
      console.log(r);
      resultadoLogin(r);
    } catch (error) {
      console.log("errado");
      resultadoLogin(error["response"]);
    }
  };

  function resultadoLogin(resultado) {
    if (resultado === "vazio") {
      SweetAlert('warning', 'Por favor, preencha todos os campos.')
    } else {
      try {
        if (resultado["status"] !== 400) {
          const jazon = resultado;
          const senhareal = jazon["data"]["password"];
          const status = jazon["data"]["active"];
          if (senhareal === senhaLogin) {
            if (status) {

              sessionStorage.setItem("senhaReal", resultado["data"]["password"]);
              sessionStorage.setItem("emailReal", resultado["data"]["email"]);
              sessionStorage.setItem("nomeReal", resultado["data"]["name"]);
              sessionStorage.setItem("cargoReal", resultado["data"]["role"]);
              sessionStorage.setItem("matriculaReal", resultado["data"]["unb_id"]);

              sessionStorage.setItem("senhabanco", resultado["data"]["password"]);
              sessionStorage.setItem("emailbanco", resultado["data"]["email"]);
              sessionStorage.setItem("nomebanco", resultado["data"]["name"]);
              sessionStorage.setItem("cargobanco", resultado["data"]["role"]);
              sessionStorage.setItem("matriculabanco", resultado["data"]["unb_id"]);
              
              window.location.href = "/home";
            } else {
              SweetAlert('warning', 'Não foi possível fazer login', 'Sua conta não está ativa')
            }
          } else {
            SweetAlert('error', 'Senha incorreta.')
          }
        } else {
          resultado = resultado["data"]["message"];
          if (resultado === "Esse usuário não existe!") {
            SweetAlert('error', 'Usuário não cadastrado!', 'Por favor, contate o gerente ou diretor do seu setor.')
          } else {
            SweetAlert('error', 'Erro no sistema. :(', 'Por favor, tente novamente mais tarde.')
          }
        }
      } catch (error) {
        console.log(error);
        SweetAlert('error', 'Erro no sistema. :(', 'Por favor, tente novamente mais tarde.')
      }
    }
  }
  return (
    <>
      <h1 className="TitleLogin justify-content-center">AEROWIKI</h1>
      <h3 className="Sub-title justify-content-center">Entrar</h3>
      <Row className="justify-content-center">
        <Col xxl={4} className="menu-login">
          <Row className="justify-content-center">
            <Col xxl={8}>
              <Form className="3" onSubmit={loginForm}>
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
                    onClick={loginForm}
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
        <div id="login-logo">
          <img src={LogoVerical} alt="logo"></img>
        </div>
      </Row>
    </>
  );
}

export default Cardlogin;
