import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcons from "@fortawesome/free-solid-svg-icons";
import { deleteMember } from "../../services/deleteMember";

function MembersButton({ onUpdate, onDelete, onEdit, member }) {
  console.log("item", member)
  const [memberButtons, setButtons] = useState(false);
  const showButtons = () => setButtons((prev) => !prev);

  // const [newuserForm, setForm] = useState(true);
  // const showForm = () => setForm(!newuserForm);

  return (
    <Link to="#" id="member-buttons" onClick={showButtons}>
      <FontAwesomeIcon icon={faIcons.faEllipsis} />
      <div id={memberButtons ? "delete-file-edit-active" : "delete-file-edit"}>

        <Link to="#" id="file" onClick={() => onUpdate({
            email: member.email,
            role: member.role,
            area: member.area,
            active: !member.active
          })}
        >
          <FontAwesomeIcon icon={faIcons.faUserMinus} />
        </Link>

        <Link id="edit" onClick={() => onEdit(member)}>
          <FontAwesomeIcon
            icon={faIcons.faEraser}
          />
        </Link>

        <Link id="delete" onClick={() => onDelete({email: member.email})}>
          <FontAwesomeIcon icon={faIcons.faUserXmark} />
        </Link>
      </div>
    </Link>
  );
}

export default MembersButton;
