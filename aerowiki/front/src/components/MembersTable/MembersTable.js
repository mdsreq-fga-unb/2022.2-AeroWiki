import "./MembersTable.css";
import React from "react";
import { MembersData } from "./MembersData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcons from "@fortawesome/free-solid-svg-icons";
import MembersButton from "./MembersButton";
import { ModalButton } from "./ModalButton";
import { updateMember } from "../../services/updateMember";
import { deleteMember } from "../../services/deleteMember";

function MembersTable() {
  const [memberButtons, setButtons] = useState(false);
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

  const onUpdate = async ({ area, role, email, active }) => {
    try {
      console.log("onUpdate email:", email);
      await updateMember({ area, role, email, active });
      setModalState({ open: false, member: undefined });
    } catch (err) {
      console.log(err);
    }
  };

  const onDelete = async ({ email }) => {
    try {
      console.log("onDelete email:", email);
      await deleteMember({ email });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
          {MembersData[0].map((item, index) => {
            return (
              <>
                <div id="mtable-member">
                  <div id="member-info" key={index}>
                    <div id="member-name">
                      <FontAwesomeIcon icon={faIcons.faCircleUser} />
                      <span>{item.name}</span>
                    </div>
                    <Link to={item.path} id="member-sector">
                      <span>{item.area}</span>
                    </Link>
                    <span id="member-email">{item.email}</span>
                    <span id="member-telephone">{item.telephone}</span>
                    <span id="member-role">{item.role}</span>
                  </div>
                  <MembersButton onUpdate={onUpdate} onDelete={onDelete} onEdit={onEdit} member={item}/>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <ModalButton open={modalState.open} member={modalState.member} onCancel={onCloseModal} onSave={onUpdate}/>
    </>
  );
}

export default MembersTable;
