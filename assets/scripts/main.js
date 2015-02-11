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
                        $('.product .item main').eq(i).addClass('animated flipInX');
                    }
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
        }
    };

    // init app
    app.initUi();
});