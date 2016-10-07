$(function(){

    //trems overlay effect
    function tremsOverlay() {

        if (!document.getElementById('termsWrap')) return false;

        var termsWrap = document.getElementById('termsWrap');
        var btnAgree = document.getElementById('btnAgree');
        var agree1 = document.getElementById('agree_1');
        var agree2 = document.getElementById('agree_2');

        var $termsWrap = $(termsWrap);
        var $termsChildWrap = $termsWrap.find('.n-terms__wrap');
        var $radioBtn = $termsChildWrap.find('input[type=radio]');
        var $agree1 = $(agree1);
        var $agree2 = $(agree2);
        var $noteBox = $termsChildWrap.find('.n-note__box-lv2');
        var $btnAgree = $(btnAgree);

        //popup effect
        $.magnificPopup.open({

            items: {
                src: '#termsWrap',
                type: 'inline'
            },
            closeOnBgClick: false,
            showCloseBtn: false,
            mainClass: 'n-disable--overlay',
            fixedContentPos: false,
            callbacks: {
                beforeOpen: function() {
                    $termsChildWrap.append('<button title="Close (Esc)" type="button" class="mfp-close">×</button>');
                }

            }

        });

        //show error info
        $radioBtn.on('change', function(){

            var $this = $(this);

            if($this.val() == 'no'){

                $btnAgree.removeClass('n-btn--primary').addClass('n-btn--disabled');
                $noteBox.fadeIn(300);


            } else if($agree1.is(':checked') && $agree2.is(':checked')){

                $noteBox.fadeOut(300);
                $btnAgree.removeClass('n-btn--disabled').addClass('n-btn--primary');

            }


        });


    }
    tremsOverlay();



    // main five banner slider
    function mainBanner() {

        if (!document.getElementById('mainBanner')) return false;

        var mainBanner = document.getElementById('mainBanner');
        var $mainBanner = $(mainBanner);

        $mainBanner.cycle({
            slides: '.n-banner__main',
            slideCss: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto'
                
            },
            speed: 500,
            timeout: 3000,
            pauseOnHover: true,
            pagerEvent: 'mouseover',
            pager: '#bannerNav',
            pagerActiveClass: 'activeSlide',
            pagerTemplate: '<a href="#"></a>'
        });

    }
    mainBanner();



    // switch tab effect call fn
    switchTabEffect('rankTab'); // for rank list tab
    switchTabEffect('infoTab'); // for info ad tab


    //nav hover count effect call fn
    navHoverCount('mainNavBody'); // main nav hover count effect


    //guide nav click change heighlight effect
    
    function guideNav() {

        if (!document.getElementById('guideNav')) return false;

        var navWrap = document.getElementById('navWrap');
        var guideNav = document.getElementById('guideNav');
        var navLi = guideNav.getElementsByTagName('li');
        var navA = guideNav.getElementsByTagName('a');

        var $navWrap = $(navWrap);
        var $guideNav = $(guideNav);
        var $navLi = $(navLi);
        var $navA = $(navA);


        var _navWrapHeight = $navWrap.outerHeight();

        //click change highlight and click move to block effect
        
        $navA.on('click', function(e){
            e.preventDefault();

            var dest = 0;
            var $this = $(this);
            var _currentTop = $(this.hash).offset().top;


            $this.closest('li').removeClass('current');
            $this.closest('li').addClass('current').siblings().removeClass("current");

            if(_currentTop > _document.height() - _window.height()){

                dest = _document.height() - _window.height();

            } else {

                dest = _currentTop;

            }

            $htmlBody.animate({

                scrollTop: dest - (_navWrapHeight * 2)

            }, 500);


        });


    }
    guideNav();


    // scroll page auto heighlight for guide nav
    function scrollAutoHeighlight() {

        if (!document.getElementById('categItem')) return false;

        var categItem = document.getElementById('categItem');
        var guideNav = document.getElementById('guideNav');
        var navLi = guideNav.getElementsByTagName('li');

        var $categItem = $(categItem);
        var $navLi = $(navLi);
        var $navLiA = $navLi.find('a');

        var navArray = [];

        for (var i = 0; i < $navLiA.length; i++) {

            var aChild = $navLiA[i];
            var aHref = aChild.getAttribute('href');

            navArray.push(aHref);

        }


        _window.on('scroll', function() {

            var winPos = _window.scrollTop();
            var winHeight = _window.height();
            var docHeight = _document.height();

            var $this = $(this);
            var currentPos = $this.scrollTop();


            if(currentPos >= 576){

                guideNav.style.display = 'block';

            } else {

                guideNav.style.display = 'none';

            }

            for (var j = 0; j < navArray.length; j++) {

                var theId = navArray[j];
                var divPos = $(theId).offset().top - 200;
                var divHeight = $(theId).height();

                if( winPos >= divPos && winPos < (divPos + divHeight)) {

                    $("a[href='" + theId + "']").parent('li').addClass('current');

                } else {

                    $("a[href='" + theId + "']").parent('li').removeClass('current');

                }

            }




        });


    }
    scrollAutoHeighlight();

    //crazy ad effect
    function crazyStage() {
        if (!document.getElementById('crazyStage')) return false;

        var timer;
        var crazyStage = document.getElementById('crazyStage');
        var rePlay = document.getElementById('rePlay');
        var stage = crazyStage.childNodes[1];
        var btnClose = document.getElementById('cBtnClose');

        var $crazyStage = $(crazyStage);
        var $rePlay = $(rePlay);
        var $btnClose = $(btnClose);

        // main animate
        var mainShow = function() {

            $crazyStage.animate({
                top: 0
            });

        }
        mainShow();

        // set element back to init css
        var backInit = function() {

            $crazyStage.animate({

                right: '-1300px',
                width: 0,

            }, 200, function() {

                crazyStage.removeAttribute('style');
                $rePlay.slideDown(100);

            });
        }


        //close btns
        $btnClose.click(function(e) {
            e.preventDefault();

            backInit();
        });

        // set timer 10 sec
        function endAndStartTimer() {
            window.clearTimeout(timer);

            timer = window.setTimeout(function() {

                backInit();

            }, 10000);
        }
        endAndStartTimer();


        //invoking api form outside of tumult Hype
        //after invoking, can use hype api in here
        function invokingHype(hypeDocument, element, event) {

            //console.log(hypeDocument.documentName(), hypeDocument.documentId());

            //rePlay btn

            $rePlay.on('click', function(e) {
                e.preventDefault();

                var $this = $(this);

                mainShow();
                endAndStartTimer();

                $this.slideUp(100);

                //invoking hype api to setting rePlay
                hypeDocument.startTimelineNamed('Main Timeline', hypeDocument.kDirectionForward);

            });

            return true;
        }


        if ("HYPE_eventListeners" in window === false) {
            window.HYPE_eventListeners = Array();
        }

        window.HYPE_eventListeners.push({
            "type": "HypeDocumentLoad",
            "callback": invokingHype
        });

    }
    crazyStage();


});
