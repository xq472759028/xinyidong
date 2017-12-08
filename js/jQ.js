window.onload=function(){
    $(".sanbu1").find(".sanbu-box").hover(function () {
        $(this).children(".ss-xl").show(100);
    }, function () {
        $(this).children(".ss-xl").hide(100);
    })


    // 轮播图
    // var i = 0;
    // var timer;
    // $(document).ready(function () {
    //     //用jquery方法设置第一张图片显示，其余隐藏
    //     $(".center-box li").eq(0).show().siblings(".center-box li").hide();
    //
    //     //调用showTime()函数（轮播函数）
    //     showTime();
    //     //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
    //     $(".yuan").hover(function () {
    //         //获取当前i的值，并显示，同时还要清除定时器
    //         i = $(this).index();
    //         Show();
    //         clearInterval(timer);
    //     }, function () {
    //         showTime();
    //     });
    //     //鼠标点击左侧的箭头
    //     $('.zuofushou').click(function () {
    //         clearInterval(timer);
    //         if (i == 0) {
    //             i = 7;//注意此时i的值
    //         }
    //         i--;
    //         Show();
    //         showTime();
    //     });
    //
    //     //鼠标点击右侧的箭头
    //     $('.youfushou').click(function () {
    //         clearInterval(timer);
    //         if (i == 6) {
    //             i = -1;//注意此时i的值
    //         }
    //         i++;
    //         Show();
    //         showTime();
    //     });
    // })
    //
    // // 创建一个showTime函数
    // function showTime() {
    //     //定时器
    //     timer = setInterval(function () {
    //         //调用一个Show()函数
    //         Show();
    //         i++;
    //         //当图片是最后一张的后面时，设置图片为第一张
    //         if (i == 5) {
    //             i = 0;
    //         }
    //     }, 2000);
    // }
    //
    //
    // //创建一个Show函数
    // function Show() {
    //     //在这里可以用其他jquery的动画
    //     $('.center-box li').eq(i).fadeIn(300).siblings('.center-box li').fadeOut(300);
    //
    //     //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
    //     // $('.yuan').eq(i).addClass('bg').siblings('.yuan').removeClass('bg');
    //
    //     /*
    //     * css中添加的代码：
    //     * .bg{ background-color: #f00; }
    //     * */
    // }


    // 轮播图开始
    let dong=$(".dong");
    console.log(dong)
    let zuofushou=$(".zuofushou");
    let youfushou=$(".youfushou");
    let yuan=$(".yuan");
    let imgwidth=$(".dong img:first-child").eq(0).width();
    let _index = 0;
    let timer = null;
    let flag = true;
    youfushou.on("click", function () {
//右箭头
        flag = false;
        clearInterval(timer);
        _index++;
        selectPic(_index);
    })
    zuofushou.on("click", function () {
//左箭头
        flag = false;
        clearInterval(timer);
        if (_index == 0) {
            _index = dong.length - 1;
            $(".dong").css("left", -(dong.length - 1) * imgwidth);
        }
        _index--;
        selectPic(_index);
    })
    yuan.on("click", function () {
//导航切换
        _index = yuan.index($(this));
        selectPic(_index);
    })
    $(".center-box").hover(function () {
//鼠标移入
        clearInterval(timer);
        flag = false;
    }, function () {
        flag = true;
        timer = setInterval(go, 3000);
    });

    function autoGo(bol) {
//自动行走
        if (bol) {
            timer = setInterval(go, 3000);
        }
    }

    autoGo(flag);

    function go() {
//计时器的函数
        _index++;
        selectPic(_index);
    }
    function selectPic(num) {
        $(".yuan").eq(num).addClass("quan").siblings().removeClass("quan");
        $(".dong").animate({
            left: -num * imgwidth,
        }, 1000, function () {
//检查是否到最后一张
            if (_index == dong.length - 1) {
                _index %= 7;
                $(".dong").css("left", "0px");
                $(".yuan").eq(0).addClass("quan").siblings().removeClass("quan");
            }
        })
    }

}