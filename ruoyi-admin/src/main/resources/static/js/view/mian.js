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
        title: {
            text: ''
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data:['温度','湿度','氨气','光照']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
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
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'光照',
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data:[125, 130, 135, 140, 145, 150, 155]
            },
            {
                name:'温度',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data:[18, 20, 21, 24, 28, 15, 16]
            },
            {
                name:'湿度',
                type:'line',
                stack: '总量',
                areaStyle: {},
                data:[20, 19, 21, 14, 20, 19, 20]
            },
            {
                name:'氨气',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[2.36, 2.56, 2.34, 2.04, 2.65, 2.12, 2.30]
            },

        ]
    };

    ec_test_1.setOption(option);


}