import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcons from "@fortawesome/free-solid-svg-icons";
import { deleteMember } from "../../services/deleteMember";

function MembersButton({ onDelete, onEdit, member }) {
  console.log("item", member)
  const [memberButtons, setButtons] = useState(false);
  const showButtons = () => setButtons((prev) => !prev);

  // const [newuserForm, setForm] = useState(true);
  // const showForm = () => setForm(!newuserForm);

  return (
    <Link to="#" id="member-buttons" onClick={showButtons}>
      <FontAwesomeIcon icon={faIcons.faPen} />
      <div id={memberButtons ? "delete-file-edit-active" : "delete-file-edit"}>

        <Link to="#" id="file">
          <FontAwesomeIcon icon={faIcons.faUserMinus} />
        </Link>

        <Link to="#" id="edit" onClick={() => onEdit(member)}>
          <FontAwesomeIcon
            icon={faIcons.faEraser}
          />
        </Link>

        <button type="button" id="delete" onClick={() => onDelete({email: member.email})}>
          <FontAwesomeIcon icon={faIcons.faUserXmark} />
        </button>
      </div>
    </Link>
  );
}

export default MembersButton;
