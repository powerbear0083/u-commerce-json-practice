//Global Variable Setting
var _window = $(window);
var _document = $(document);
var $htmlBody = $('html, body');

//Common Effect fn
//write below

//go top effect
var goTopEffect = function(selectors) {

    selectors.on('click', function(e) {
        e.preventDefault();

        $htmlBody.animate({

            scrollTop: 0

        }, 500);

    });
}

//click out side hide effect
var clickOutSide = function(hideElems) {

    var $hideBox = $(hideElems);

    _document.on('mouseup', function(e) {

        if (!$hideBox.is(e.target) && $hideBox.has(e.target).length === 0) {

            $hideBox.hide();
        }

        if ($hideBox.attr('class') == 'n-search__catalog-drop') {

            $hideBox.closest('.n-search__catalog').removeClass('is--drop');

        }

    });
}

//main nav hover count effect
var navHoverCount = function(navID) {

    if (!document.getElementById(navID)) return false;

    var navID = document.getElementById(navID);

    var $navID = $(navID);
    var $navLi = $navID.find('> li');
    var $navCount = $navLi.find('.n-nav__count');

    var _txtStart = '點數';
    var _txtEnd = '倍'


    function addHoverEffect() {

        for (var i = 0; i < $navLi.length; i++) {

            $navLi.eq(i).find('.n-nav__count').closest('li').addClass('n-nav--move');

        }

    }
    addHoverEffect();


    function changeTxt() {


        $navLi.on({
            mouseenter: function() {

                var $this = $(this);
                var $thisCount = $this.find('.n-nav__count');
                var _thisCountTxt = $thisCount.text();

                $this.data('initTxt', _thisCountTxt);

                if ($thisCount.length > 0) {
                    $thisCount.text(_txtStart + _thisCountTxt + _txtEnd);
                }


            },
            mouseleave: function() {

                var $this = $(this);
                var $thisCount = $this.find('.n-nav__count');
                var _thisCountTxt = $thisCount.text();

                $thisCount.text($this.data('initTxt'));

            }

        });

    }
    changeTxt();

}

// tab switch effect
var switchTabEffect = function(tagID) {

    if (!document.getElementById(tagID)) return false;

    var tagID = document.getElementById(tagID);
    var tabLi = tagID.getElementsByTagName('li');
    var tabA = tagID.getElementsByTagName('a');

    var $tagID = $(tagID);
    var $tabLi = $(tabLi);
    var $tabA = $(tabA);

    $tabA.on('click', function(e) {
        e.preventDefault();

        var $this = $(this);
        clickHref = $this.attr('href');

        //tab nav highlight effect
        $this.closest('li').addClass('current');
        $this.closest('li').addClass('current').siblings().removeClass("current");

        $(clickHref).fadeIn(200).siblings('ul, div').hide();
        $(clickHref).siblings('ul').eq(0).show();

    });

}


//cancel bubble event

;(function ($) {
    $.cancelBubble = function (event) {
        if (event.preventDefault) { event.preventDefault(); }

        event.cancelBubble = true;
        if (event.stopPropagation) { event.stopPropagation(); }
    }
}(jQuery));



$(function(){

    // top six banner 
	function adCarouse() {
		if(!document.getElementById('topFiveBanner')) return false;

		var adCarousel = document.getElementById('topFiveBanner');
		var $adCarousel = $(adCarousel);

		$adCarousel.cycle({
			slides: 'a',
			speed: 500,
			timeout: 3000,
			pauseOnHover: true,
            pagerEvent: 'mouseover',
            pager: '#topBannerNav',
            pagerActiveClass: 'activeSlide',
            pagerTemplate: '<a href="#"></a>'
		});
	}
	adCarouse();


    //single function write below

	//header drop effect
	function headSearchEffect() {

		if(!document.getElementById('headSearch')) return false;

		var headSearch = document.getElementById('headSearch');
		var headForm = headSearch.getElementsByTagName('form');

		var $headSearch = $(headSearch);
		var $headForm = $(headForm);
		var $searchCatalogA = $headForm.find('.n-search__catalog > a');
		var $catalogDropMenu = $headForm.find('.n-search__catalog-drop > ul');
		var $catalogDropAs = $headForm.find('.n-search__catalog-drop ul a');


		//drop effect
		$searchCatalogA.on('click', function(e){
			e.preventDefault();

			var $this = $(this);

			$this.parent().addClass('is--drop');
			$this.siblings('.n-search__catalog-drop').slideDown(200);


		});

		//select drop of text return to $searchCatalogA
		$catalogDropAs.on('click', function(e){
			e.preventDefault();

			var $this = $(this);
			var txt = $(e.target).text();

			$searchCatalogA.children('span').text(txt);
			$this.closest('.n-search__catalog').removeClass('is--drop');
			$this.closest('.n-search__catalog-drop').hide();

		});

        clickOutSide('.n-search__catalog-drop'); // call clickOutSide fn hide catalogDropMenu
		
	}
	headSearchEffect();

    //nav hover count effect call fn
    navHoverCount('mainNav'); // main nav hover count effect


    //nav hover effect
    function mainNavHover() {

        if (!document.getElementById('mainNav')) return false;

        var mainNav = document.getElementById('mainNav');
        var navFake = document.getElementById('navFake');
        var navFlagship = document.getElementById('navFlagship');
        var navFlagshipWrap = document.getElementById('navFlagshipWrap');

        var $mainNav = $(mainNav);
        var $navLi = $mainNav.find('> li');
        var $navFake = $(navFake);
        var $navFlagship = $(navFlagship);
        var $navFlagshipWrap = $(navFlagshipWrap);
        var $navFlagshipUl = $navFlagshipWrap.find('ul');

        var $navFakeBottom = $navFake.offset().top + $navFake.outerHeight(); 

        var liTops = [];


       

        //get all nav li offset top value
        for (var i = 0; i < $navLi.length; i++) {

            var getTop = $navLi.eq(i).offset().top;

                liTops.push(getTop);

        }
        
        //all main nav hover
        $mainNav.menuAim({
            activate: activeMenu,
            deactivate: deactiveMenu,
            exitMenu: function() {
                return true;
            }
        });

        function activeMenu(li) {

            var $li = $(li);
            var $liHeight = $li.outerHeight();
            var $navSubMenu = $li.find('.n-nav__sub');
            //var $liNumber = $li.attr('num');

            $navSubMenu.css({

                display: 'block'

            });


            //console.log(($liHeight + $liHeight), ($liHeight * 2));
   
            
            //main nav is scroll, do this fn
            if (_document.scrollTop() >= ($navFakeBottom + 100)) {


                if ( $li.prevAll().length === 0) {

                    $navLi.slice(0, 1).find('.n-nav__sub').css({

                        top: -1

                    });


                } else {

                    var liPrevSiblings;

                    liPrevSiblings = $li.prevAll().length;


                    $navLi.find('.n-nav__sub').css({

                        top: (liPrevSiblings * 31) * -1

                    });


                }

                /*$navLi.slice(1, 5).find('.n-nav__sub').css({

                    top: -32 - 30 * $liNumber - 1 * $liNumber

                });

                $navLi.slice(5, 14).find('.n-nav__sub').css({

                    top: -32 - 30 * $liNumber - 1 * $liNumber - 1

                });

                $navLi.slice(14, 18).find('.n-nav__sub').css({

                    top: -32 - 30 * $liNumber - 1 * $liNumber - 2

                });*/


            } else { //main nav not scroll, do this fn


                $navSubMenu.offset({

                    top: liTops[0]

                });

            }
                    
        }

        function deactiveMenu(li) {

            var $li = $(li);

            $li.find('.n-nav__sub').css({

                display: 'none'

            });

        }

        //nav flagship hover 
        $navFlagship.menuAim({

            activate: activeFlagshipMenu,
            exitMenu: function() {
                return true;
            }

        });

        function activeFlagshipMenu( flagshipLi ){

            var $flagshipLi = $(flagshipLi);
            var liIndex = $flagshipLi.index();
            
            $flagshipLi.siblings('li').children('a').removeClass('current');
            $flagshipLi.children('a').addClass('current');

            $navFlagshipUl.eq(liIndex).siblings('ul').hide();
            $navFlagshipUl.eq(liIndex).show();

        }



    }
    mainNavHover();


    // when scroll fix main nav effect
    function scrollFixNav(){

    	if(!document.getElementById('navWrap')) return false;

                var headSearch = document.getElementById('headSearch');
                var navWrap = document.getElementById('navWrap');
                var mainNav = document.getElementById('mainNav');
                var navFake = document.getElementById('navFake');


                var $headSearch = $(headSearch);
                var $navWrap = $(navWrap);
                var $navH2 = $navWrap.find('h2');
                var $mainNav = $(mainNav);
                var $mainIcon = $navWrap.find('i');
                var $navFake = $(navFake);

                var $navFakeBottom = $navFake.offset().top + $navFake.outerHeight(); 


                _window.on('scroll', function(event) {

                    //停止泡泡事件發生
                    $.cancelBubble(event);
                    

                    //hide main nav
                    if(_document.scrollTop() >= $navFakeBottom) {

                        $mainNav.addClass('n-is--hide n-nav--fixed');
                        $('.n-nav__box h2').addClass('hoverEffect');
                        $('.n-nav__menu').css('background-color','rgba(255, 255, 255, 1)');
                        $('.hoverEffect').hover(function(){

                            window.mytimeout = setTimeout(function(){

                                $mainNav.removeClass('n-is--hide n-nav--fixed');

                            }, 300);


                        } , function(){

                            clearTimeout(window.mytimeout);
                            $mainNav.addClass('n-is--hide n-nav--fixed');
                            

                        });

                        //this hover effect generate bubbling event
                        
                        /*$navH2.on({
                            mouseenter: function() {

                                console.log('enter');


                            },
                            mouseleave: function() {

                                console.log('leave');

                            }

                        });*/
                      
                        $mainNav.mouseover(function(){
                            $mainNav.removeClass('n-is--hide n-nav--fixed');
                        
                        });
                        $mainNav.mouseout(function(){
                            $mainNav.addClass('n-is--hide n-nav--fixed');
                        });


                    } else {

                        $mainNav.removeClass('n-is--hide n-nav--fixed');
                        $('.n-nav__menu').css('background-color','rgba(255, 255, 255,0.9)');
                        $('.n-nav__box h2').removeClass('hoverEffect');
                        $mainNav.mouseout(function(){
                            $mainNav.removeClass('n-is--hide n-nav--fixed');
                        });

                    }

                    //detect scrollTop fix header, nav , search
                    if(_document.scrollTop() >= ($navFakeBottom + 100)){

                            //$mainNav.addClass('n-nav--fixed')
                            $mainIcon.removeClass('n-is--hide');
                            $navWrap.addClass('is--fixed'); //enable nav hover effect
                            $headSearch.addClass('move--nav'); //change search box position

                    } else {

                            //$mainNav.removeClass('n-nav--fixed');
                            $mainIcon.addClass('n-is--hide');
                            $navWrap.removeClass('is--fixed'); //disable nav hover effect
                            $headSearch.removeClass('move--nav'); //back init position for search box 

                    }

                    


                });


    }
    scrollFixNav();


    //fixedTool
    function fixedToolEffect(){

        if (!document.getElementById('fixedTool')) return false;

        var fixedTool = document.getElementById('fixedTool');

        var $fixedTool = $(fixedTool);
        var $fixedAd = $fixedTool.find('.n-fixed__ad');
        var $switchBtn = $fixedTool.find('.n-fixed__switch');
        var $topBtn = $fixedTool.find('.n-fixed__top');

        var _showTxt = $switchBtn.text();
        var _hideTxt = '開啟優惠';

        //switch effect
        $switchBtn.on('click', function(e) {
            e.preventDefault();

            var $this = $(this);
            var _thisParent = $this.parent('.n-fixed__tool');
            var hasActive = _thisParent.hasClass('n-is--active');

            if (!hasActive) {

                _thisParent.animate({

                    right: '-90px',
                    width: '30px'

                }, 300, function() {

                    $fixedAd.fadeOut(200);

                    _thisParent.animate({

                        right: 0

                    }, 200, function() {

                        $this.text(_hideTxt);
                        _thisParent.addClass('n-is--active');

                    });
                });


            } else {

                _thisParent.animate({

                    right: '-180px',
                    width: '90px'

                }, 300, function() {

                    $fixedAd.fadeIn(200);

                    _thisParent.animate({

                        right: 0

                    }, 200, function() {

                        $this.text(_showTxt);
                        _thisParent.removeClass('n-is--active');

                    });
                });


            }

        });

        //Go top effect
        //Call to top function
        goTopEffect($topBtn);


    }
    fixedToolEffect();


});
