import Swal from "sweetalert2";

const successfullyName = ({ title, timer }) => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: title,
        showConfirmButton: false,
        timer: timer,
    });
};

export default successfullyName;
