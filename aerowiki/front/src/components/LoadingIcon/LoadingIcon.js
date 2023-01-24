import React from 'react'
import "./LoadingIcon.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export default function LoadingIcon(alertIcon, alertTitle, alertText) {
    const LoadBackground = document.getElementById("load-bg")
    const LoadingIcon = document.getElementById("load")

    LoadBackground.classList.remove('form-bg')
    LoadBackground.classList.add('form-bg-active')

    LoadingIcon.classList.remove('logoLoadoff')
    LoadingIcon.classList.add('logoLoad')
    setTimeout(function () { resultado(alertIcon, alertTitle, alertText); }, 1)

    function resultado(alertIcon, alertTitle, alertText) {
        LoadBackground.classList.remove('form-bg-active')
        LoadBackground.classList.add('form-bg')

        LoadingIcon.classList.remove('logoLoad')
        LoadingIcon.classList.add('logoLoadoff')
        if(alertIcon && alertTitle){
            MySwal.fire({
            title: alertTitle,
            text: alertText,
            icon: alertIcon,
            confirmButtonText: 'OK',
            allowOutsideClick: false
            }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "/membros";
            }
            })            
        }

    }
}