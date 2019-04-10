// 等待页面DOM加载完后自动加载
function main_onload() {

    //测试方法
    init_ranklogin();
}

// 测试方法
function init_ranklogin() {
    $.ajax({
        type: "GET",
        url: "/api/sys_log/CountLoLogDescMonth",
        datatype: "JSON",
        success: function (data) {
        }
    })
}