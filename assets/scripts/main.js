$(function (){
    var app = {
        productAnimate: function () {
            var anchorPosition = [],
                items = $('.product .item');

            for (var i = 0; i < items.length; i++) {
                anchorPosition.push(items.eq(i).offset().top);
                console.log(anchorPosition[i]);
            }

            $(window).scroll(function () {
                var toTop = $('body').scrollTop();
                for (var i = 0; i < anchorPosition.length; i++) {
                    if (toTop >= anchorPosition[i] - 300) {
                        $('.product .item main').eq(i).addClass('animated flash');
                    }
                }
            });
        },
        service:function (){
            function initType(){
                $(".service").typed({
                    strings: ['<dt>航拍服务按次数收费</dt><dd>航拍范围：高50米、出海50米<br />DJI无人机航拍服务：1000元/10分钟/次<br />每次航拍提供10分钟高清拍摄素材</dd>'],
                    typeSpeed: 0,
                    showCursor: false
                });
            }

            var servicePosition = $('.section02').offset().top;

            $(window).scroll(function (){
                var toTop = $('body').scrollTop();

                if (toTop >= servicePosition - 500){
                    initType();
                }
            });
        },
        initUi: function (){
            // set kv inspire
            setTimeout(function (){
                // show
                $('.fly').addClass('animated');
                // bind parallax
                $('.scene').parallax();
            }, 1000);

            app.productAnimate();
            app.service();
        }
    };

    // init app
    app.initUi();
});