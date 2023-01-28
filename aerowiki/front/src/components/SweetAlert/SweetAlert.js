import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export default function SweetAlert(alertIcon, alertTitle, alertText) {
    if (alertIcon && alertTitle) {
        MySwal.fire({
            title: alertTitle,
            text: alertText,
            icon: alertIcon,
            confirmButtonText: 'OK',
            allowOutsideClick: false
        }).then((result) => {
            if (result.isConfirmed) {
                // window.location.href = "/membros";
            }
        })
    }

}