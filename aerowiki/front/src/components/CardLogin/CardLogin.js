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
      MySwal.fire({
        title: "Por favor, preencha todos os campos.",
        icon: "warning",
      });
    } else {
      try {
        if (resultado["status"] !== 400) {
          const jazon = resultado;
          const senhareal = jazon["data"]["password"];
          if (senhareal === senhaLogin) {
            sessionStorage.setItem("senhaReal", resultado["data"]["password"]);
            sessionStorage.setItem("emailReal", resultado["data"]["email"]);
            sessionStorage.setItem("nomeReal", resultado["data"]["name"]);
            sessionStorage.setItem("cargoReal", resultado["data"]["role"]);
            sessionStorage.setItem("matriculaReal", resultado["data"]["unb_id"]);
            window.location.href = "/home";
          } else {
            MySwal.fire({
              title: "Senha incorreta.",
              icon: "error",
            });
          }
        } else {
          resultado = resultado["data"]["message"];
          if (resultado === "Esse usuário não existe!") {
            MySwal.fire({
              title: "Usuário não cadastrado!",
              text: "Por favor, contate o gerente ou diretor do seu setor.",
              icon: "error",
            });
          } else {
            MySwal.fire({
              title: "Erro no sistema. :(",
              text: "Por favor, tente novamente mais tarde.",
              icon: "error",
            });
          }
        }
      } catch (error) {
        console.log(error);
        MySwal.fire({
          title: "Erro no sistema. :(",
          text: "Por favor, tente novamente mais tarde.",
          icon: "error",
        });
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
