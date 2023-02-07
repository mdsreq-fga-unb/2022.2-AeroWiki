import "./MembersTable.css";
import React, { useEffect } from 'react';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import MembersData from "./MembersData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcons from "@fortawesome/free-solid-svg-icons";
import MembersButton from "./MembersButton";
import { ModalButton } from "./ModalButton";
import { updateMember } from "../../services/updateMember";
import { deleteMember } from "../../services/deleteMember";
import load from "../../img/loding.png"
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { getMembers } from "../../services/getMembers";
// const MySwal = withReactContent(Swal)

function MembersTable() {
  // const [memberButtons, setButtons] = useState(false);
  const [modalState, setModalState] = useState({
    open: false,
    member: undefined,
  });

  // const showButtons = () => setButtons(!memberButtons);
  // const [newuserForm, setForm] = useState(true);
  // const showForm = () => setForm(!newuserForm);

  const onEdit = (member) => {
    console.log("editMember", member);
    setModalState({ open: true, member: member });
  };

  const onCloseModal = () => setModalState({ open: false, member: undefined });

  const onUpdate = async ({ area, role, email, active }, action) => {
    try {
      console.log("onUpdate email:", email);
      let response = await updateMember({ area, role, email, active });
      console.log(response)
      // alert(response['data']['message'])
      setModalState({ open: false, member: undefined });

      // document.getElementById("load").classList.remove('logoLoadoff')
      // document.getElementById("load").classList.add('logoLoad')
      // setTimeout(function () { resultado(response.data); }, 5000)

      if (action === "editar") {
        LoadingIcon("success", "Membro atualizado com sucesso!")
      }
      else if (action === "arquivar") {
        console.log(active)
        if (!active) {
          LoadingIcon("success", "Membro arquivado com sucesso!")
        }
        else {
          LoadingIcon("success", "Membro desarquivado com sucesso!")
        }
      }

    } catch (err) {
      console.log(err);
      LoadingIcon("error", "Ocorreu um erro no sistema D:", "Por favor, tente mais tarde.")
    }
  };

  const onDelete = async ({ email }) => {
    try {
      // console.log("onDelete email:", email);

      await deleteMember({ email });
      // document.getElementById("load").classList.remove('logoLoadoff')
      // document.getElementById("load").classList.add('logoLoad')
      // setTimeout(function () { resultado(response.data); }, 5000)

      LoadingIcon("success", "Membro excluído com sucesso")

    } catch (err) {
      console.log(err);
      LoadingIcon("error", "Ocorreu um erro no sistema D:", "Por favor, tente mais tarde.")
    }
  };

  // function resultado(jazon) {
  //   document.getElementById("load").classList.remove('logoLoad')
  //   document.getElementById("load").classList.add('logoLoadoff')
  //   MySwal.fire({
  //     title: "função realizada com sucesso",
  //     icon: 'success',
  //     confirmButtonText: 'Ok',
  //     allowOutsideClick: false
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       refreshPage()
  //     }
  //   })
  // }

  return (
    <>
      <div id='load-bg' className='form-bg'></div>
      <img id="load" className="logoLoadoff" src={load} alt="loading..." />

      <div id="members-table">
        <div id="mtable-labels">
          <div id="labels">
            <span id="name-label">Nome</span>
            <span id="sector-label">Setor</span>
            <span id="email-label">E-mail</span>
            <span id="telephone-label">Telefone</span>
            <span id="role-label">Cargo</span>
          </div>
        </div>
        <div id="mtable-members">
          {MembersData.map((item, index) => {
            setTimeout(function () {
              if (!item.active) {
                document.getElementById("membro-" + index).classList.add("arquivado")
              }

              var cargo = sessionStorage.getItem('cargo')

              if (cargo === 'Membro' || cargo === 'Gerente') {
                document.getElementById("member-buttons").remove()
                document.getElementById("newMember-button").remove()
              }
            }, 3)
            return (
              <>
                <div id={"membro-" + index} className="mtable-member" key={index}>
                  <div className="member-info" >
                    <div className="member-name">
                      <FontAwesomeIcon icon={faIcons.faCircleUser} />
                      <span>{item.name}</span>
                    </div>
                    <Link to={item.path} className="member-sector">
                      <span>{item.area}</span>
                    </Link>
                    <span className="member-email">{item.email}</span>
                    <span className="member-telephone">{item.telephone}</span>
                    <span className="member-role">{item.role}</span>
                  </div>
                  <MembersButton onUpdate={onUpdate} onDelete={onDelete} onEdit={onEdit} member={item} />
                </div>
              </>
            );
          })}
        </div>

      </div>
      <ModalButton open={modalState.open} member={modalState.member} onCancel={onCloseModal} onUpdate={onUpdate} />
    </>
  );
}

export default MembersTable;
