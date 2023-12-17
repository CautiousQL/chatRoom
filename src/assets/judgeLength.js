import config from "../settings/config";
import { successAlert, errorAlert } from "../assets/sweetalert";

const arrLength = (arr) => {
    let number = 0;

    for (let i = 0; i < arr.length; i++) {
        number += arr[i].length;
    }

    const judge = new RegExp("[\u4E00-\u9FA5]+");
    const result = judge.test(arr) ? number * 2 : number;

    return result;
};

const judgeLength = (userSetName) => {
    const pattern_CN = /([\u4E00-\u9FA5])\1*/g;
    const pattern_ = /([^\u4E00-\u9FA5])\1*/g;
    const userNameArr_CN = userSetName.match(pattern_CN);
    const userNameArr_ = userSetName.match(pattern_);
    let userNameLength = null;

    if (userNameArr_CN == null) {
        userNameLength = arrLength(userNameArr_);
    } else if (userNameArr_ == null) {
        userNameLength = arrLength(userNameArr_CN);
    } else {
        userNameLength = arrLength(userNameArr_) + arrLength(userNameArr_CN);
    }

    //maxUserNameLength_CN = 7 ; maxUserNameLength_US && digital = 11
    if (userNameLength > 0 && userNameLength < 11) {
        successAlert({
            title: `欢迎你 ${userSetName}`,
            timer: config.time,
        });
    } else {
        errorAlert({
            title: `名称最长11位 
            汉字占2位 英文,数字占1位`,
            timer: config.time,
        });
    }

    return userNameLength;
};

export default judgeLength;
