// 等待页面DOM加载完后自动加载
function main_onload() {

    //测试方法
    init_ranklogin();

    // 图表一
    init_echarts_1();
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

// 测试方法
function init_echarts_1() {

    var ec_test_1 = echarts.init(document.getElementById('test_1'));

    option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220]
            }
        ]
    };

    ec_test_1.setOption(option);


}