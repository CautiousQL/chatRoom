import Swal from "sweetalert2";

/**
 * @data 2023/11/11
 * @author KingRuo ling
 * @name successAlert -成功提示框
 * @param {String} title - 提示框标题
 * @param {String} timer -提示框显示时长
 */
const successAlert = ({ title, timer }) => {
    Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: title,
        timer: timer,
        showConfirmButton: false,
        timerProgressBar: true,
    });
};

/**
 * @data 2023/11/11
 * @author KingRuo ling
 * @name errorAlert -失败提示框
 * @param {String} title - 提示框标题
 * @param {String} timer -提示框显示时长
 */
const errorAlert = ({ title, timer }) => {
    Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: title,
        timer: timer,
        showConfirmButton: false,
        timerProgressBar: true,
    });
};

/**
 * @data 2023/11/11
 * @author KingRuo ling
 * @name loadingAlert -加载提示框
 * @param {*} param
 */
const loadingAlert = ({}) => {};

export { successAlert, errorAlert, loadingAlert };
