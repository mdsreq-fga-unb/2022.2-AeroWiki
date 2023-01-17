import * as faIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function ModalButton({ open, onSave, onCancel, member }) {
  console.log("membro", member);
  const [setor, setSetor] = useState("");
  const [cargo, setCargo] = useState("");

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  return (
    <div id={open ? "form-active" : "form"}>
      <div id="form-container">
        <span>Editar Membro</span>
        <form id="edit-member">
          <div id="form-box">
            <label>Setor</label>
            <select
              value={setor}
              onChange={(e) => setSetor(e.target.value)}
              className="input"
            >
              <option value="" disabled selected>
                Selecione o setor
              </option>
              <option value="Comercial">Comercial</option>
              <option value="Marketing">Marketing</option>
              <option value="Relações">Relações Externas</option>
              <option value="Pesquisa & Desenvolvimento">
                Pesquisa & Desenvolvimento
              </option>
              <option value="Operações">Operações</option>
            </select>
          </div>

          <div id="form-box">
            <label>Cargo</label>
            <select
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              className="input"
            >
              <option value="" disabled selected>
                Selecione o cargo
              </option>
              <option value="Membro">Membro</option>
              <option value="Gerente">Gerente</option>
              <option value="Diretor">Diretor</option>
              <option value="Presidente">Presidente</option>
            </select>
          </div>
        </form>
        <div id="form-buttons">
          <div className="add area">
            <div className="button">
              <FontAwesomeIcon icon={faIcons.faArrowLeft} />
              <button type="button" onClick={onCancel}>
                Voltar
              </button>
            </div>
          </div>

          <div className="add area">
            <div className="button">
              <FontAwesomeIcon icon={faIcons.faEraser} />
              <button
                type="button"
                onClick={() =>
                  onSave({
                    email: member.email,
                    area: setCargo(cargo),
                    role: setSetor(setor),
                  })
                }
              >
                Atualizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
