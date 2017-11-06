(function() {

    //ÅäÖÃ
    var config = {
        'audio': {
            'icon': 'audio-record-play',
            'text': true
        },
        'loading': 'loading-ic'
    };

    //loading
    // window.onload = function(){
    //     $('#loading').hide();
    //     $("#page-content").show();
    //     // $("#audios").show();

    // }
    window.onload = function() {
            var x = document.getElementById("audio");
            $('#loading').hide();
            x.pause();
            $(".in").show();
            // $("#audios").show();

        }
        //分享

    $('#js-btn-share').bind('tap', function() {
        $('#js-share').show();
    })
    $('#js-share').bind('tap', function() {
        $(this).hide();
    });


    var pageIndex = 1,
        pageTotal = $('.page').length,
        towards = { up: 1, right: 2, down: 3, left: 4 },
        isAnimating = false;


    //禁用手机默认的触屏滚动行为
    document.addEventListener('touchmove', function(event) {
        event.preventDefault();
    }, false);
    //向上滑动
    $(document).swipeUp(function() {
            if (isAnimating) return;

            if (pageIndex < pageTotal) {
                pageIndex += 1;
            } else {
                pageIndex = 1;
            };
            pageMove(towards.up);
        })
        //向下滑动
    $(document).swipeDown(function() {
            if (isAnimating) return;
            //禁止向上滚动
            if (pageIndex == 1) {
                return
            }
            

            if (pageIndex > 1) {
                pageIndex -= 1;
            } else {
                pageIndex = pageTotal;
            };
            pageMove(towards.down);
        })
        //事件handle
    function pageMove(tw) {
        var lastPage;
        if (tw == '1') {
            if (pageIndex == 1) {
                lastPage = ".page-" + pageTotal;
            } else {
                lastPage = ".page-" + (pageIndex - 1);
            }

        } else if (tw == '3') {
            if (pageIndex == pageTotal) {
                lastPage = ".page-1";
            } else {
                lastPage = ".page-" + (pageIndex + 1);
            }

        }

        var nowPage = ".page-" + pageIndex;
        //过渡动画
        switch (tw) {
            case towards.up:
                outClass = 'pt-page-moveToTop';
                inClass = 'pt-page-moveFromBottom';
                break;
            case towards.down:
                outClass = 'pt-page-moveToBottom';
                inClass = 'pt-page-moveFromTop';
                break;
        }
        isAnimating = true;
        $(nowPage).removeClass("pt-page-scaleUp");
        $(nowPage).removeClass("pt-page-delay300");
        $(nowPage).removeClass("hide");

        $(lastPage).addClass(outClass);
        $(nowPage).addClass(inClass);

        setTimeout(function() {
            $(lastPage).removeClass('page-current');
            $(lastPage).removeClass(outClass);
            $(lastPage).addClass("hide");
            $(lastPage).find("img").addClass("hide");

            $(nowPage).addClass('page-current');
            $(nowPage).removeClass(inClass);
            $(nowPage).find("img").removeClass("hide");
            $(".page5-info").css('display', 'none');
            $(".iphone").addClass('iphoneShake')
            console.log(pageIndex)
            	 
            if (pageIndex == 5) {
                console.log(3333);

                function laidian() {
                    var x = document.getElementById("audio");
                    x.src = '2.mp3'
                }
                setTimeout(laidian,2000)
            }
            isAnimating = false;


        }, 600);

    }

})();
