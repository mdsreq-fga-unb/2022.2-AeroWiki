import './ModalButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as faIcons from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from "react";

export function ModalButton({ open, onUpdate, onCancel, member }) {
  const [newsetor, setSetor] = useState("");
  const [newcargo, setCargo] = useState("");

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  return (
    <>
    <div className={open ? 'form-bg-active' : 'form-bg'}></div>

    <div id={open ? "editMember-form-active" : "editMember-form"}>
      <div className="form-container">
        <span className="form-title">Editar Membro</span>
        <form>

          <div className='form-col'>
            <div className="form-box">
              <label className='form-label'>Setor</label>
              <select value={newsetor} onChange={(e) => setSetor(e.target.value)} className="input">
                <option value="" disabled selected>
                  Selecione o setor
                </option>
                <option value="Comercial">Comercial</option>
                <option value="Marketing">Marketing</option>
                <option value="Relações Externas">Relações Externas</option>
                <option value="Pesquisa & Desenvolvimento">
                  Pesquisa & Desenvolvimento
                </option>
                <option value="Operações">Operações</option>
              </select>
            </div>

            <div className="form-box">
              <label className='form-label'>Cargo</label>
              <select value={newcargo} onChange={(e) => setCargo(e.target.value)} className="input">
                <option value="" disabled selected>
                  Selecione o cargo
                </option>
                <option value="Membro">Membro</option>
                <option value="Gerente">Gerente</option>
                <option value="Diretor">Diretor</option>
                <option value="Presidente">Presidente</option>
              </select>
            </div>
          </div>
          
        </form>
        <div className="form-buttons">
          <div className='back area'>
            <Link to='#' className='button' onClick={onCancel}>
              <FontAwesomeIcon icon={faIcons.faChevronLeft} />
              <span>Voltar</span>
            </Link>
          </div>

          <div className="add area">
            <div className="button">
              <FontAwesomeIcon icon={faIcons.faEraser} />
              <button
                type="button"
                onClick={() => onUpdate({
                    email: member.email,
                    role: newcargo,
                    area: newsetor,
                    active: member.active
                  }, "editar")
                }
              >
                Atualizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
