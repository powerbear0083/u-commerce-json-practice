/*!
* this js file is for pages demo use ,
* not real js effect.
* Please, do use this js file.
*/

$(function(){

    function loginDemo(){

        var $topNavs = $('#topNavs'),
            _topInit = $topNavs.html(),
            $loginBox = $('#loginBox'),
            _loginInit = $loginBox.html();
            
        
        var topNavHtml = '<li><a href="" title="會員登出">會員登出</a></li><li class="n-top__account has--drop is--drop"><a href="" title="我的帳戶"><span>我的帳戶</span> <i class="n-icon--dropmenu"></i></a><ul class="n-top__drop"><li><a href="" title="交易記錄">交易記錄</a></li><li><a href="" title="我的優惠">我的優惠</a></li><li><a href="" title="用戶指南">用戶指南</a></li><li><a href="" title="我的收藏">我的收藏</a></li></ul><div class="is--drop-bg"></div></li><li class="n-top__coupon has--drop is--drop"><a href="" title="折價券"><span>折價券</span> <span class="n-font--red">0</span> 張 <i class="n-icon--dropmenu"></i></a><ul class="n-top__drop"><li><div class="n-left">300元折價券</div><div class="n-right"><span class="n-font--red">1</span> 張</div></li><li><div class="n-left">200元折價券</div><div class="n-right"><span class="n-font--red">1</span> 張</div></li><li><div class="n-left">100元折價券</div><div class="n-right"><span class="n-font--red">1</span> 張</div></li><li><div class="n-left">78折折價券</div><div class="n-right"><span class="n-font--red">1</span> 張</div></li><li><div class="n-left">82折折價券</div><div class="n-right"><span class="n-font--red">1</span> 張</div></li><li><div class="n-left"><a href="#" class="" title="查看更多">查看更多</a></div><div class="n-right"><a href="#" class="" title="說明">說明</a></div></li></ul><div class="is--drop-bg"></div></li><li class="n-top__ponta has--drop is--drop"><a href="" title="得易Ponta"><span>得易Ponta</span> <i class="n-icon--dropmenu"></i></a><ul class="n-top__drop"><li><a href="" title="加入得易Ponta">加入得易Ponta</a></li><li><a href="" title="累點公告">累點公告</a></li><li><a href="" title="點數明細">點數明細</a></li><li><a href="" title="常見問題">常見問題</a></li></ul><div class="is--drop-bg"></div></li><li><a href="" title="購物車">購物車 <span class="n-font--red">0</span> 件</a></li>';


        var signedHtml = '<div class="n-login__signed"><div class="n-login__title n-l__title">Hi 王小姐您好</div><p class="n-login__txt title--lv4">專屬優惠</p><ul class="n-login__coupon"><li><span>折價券：</span><span>15%</span></li><li><span>回饋金：</span><span>99,999</span><span>元</span></li><li><span>得易Ponta：</span><span>9,999,999</span><span>點</span></li></ul></div>';


        $topNavs.on('click', 'a' , function(e){
            e.preventDefault();

            var $this = $(this);

            if($this.attr('title') == '登入') {

                $topNavs.html('');
                $loginBox.html('');
                $topNavs.append(topNavHtml);
                $loginBox.append(signedHtml);

            } else if ($this.attr('title') == '會員登出') {

                $topNavs.html('');
                $loginBox.html('');
                $topNavs.append(_topInit);
                $loginBox.append(_loginInit);


            }

        });


        $loginBox.on('click', 'a', function(e){
            e.preventDefault();

            var $this = $(this);

            if($this.attr('title') == '登入') {

                $topNavs.html('');
                $loginBox.html('');
                $topNavs.append(topNavHtml);
                $loginBox.append(signedHtml);

            }


        });

    }

    loginDemo();  

    //ponta rule prototype
    function pontDemo(){

        var $termsWrap = $('.n-terms__wrap');
        var $termsPic = $termsWrap.find('.n-terms__pic');
        var $termsBox = $termsWrap.find('.n-terms__box');
        var $btnAgree = $('#btnAgree');


        var successTxt = '<div class="n-terms__box clearfix"><div class="n-terms__title n-center title--lv3">申辦成功</div><p>親愛的會員，您的得易Ponta聯名卡已申辦成功，即日起消費可累積點數，<br/>同時享有得易Ponta聯名卡提供各項優質特惠服務!</p><div class="n-terms__btn n-center"><a href="index.html" class="n-btn n-btn--primary">立即購物</a></div></div>';

        var recordTxt = '<div class="n-terms__pic"><img src="img201607/ponta-press-800x200-1.jpg" alt="得易Ponta聯名卡會員須知"></div><div class="n-terms__box clearfix"><div class="n-terms__title n-center title--lv3">已有申辦得易Ponta紀錄</div><p>經查詢您的手機號碼已有申辦過得易Ponta卡紀錄，<br/>輸入得易Ponta卡卡號綁定會員帳號後，即可享有消費累點數、點數現折現金等好康優惠！</p><div class="n-terms__btn n-center"><a href="https://www.ponta.com.tw/processLogin.action" class="n-btn n-btn--primary" target="_blank">進行綁定</a></div></div>';

        var memTxt = '<div class="n-terms__pic"><img src="http://media.etmall.com.tw/XML/content/LayoutBuilder//Image/201506/49676_f06e615a-9450-46d7-8251-af9f0803e532.jpg" alt="得易Ponta聯名卡會員須知"></div><div class="n-terms__box clearfix"><div class="n-terms__title n-center title--lv3">成為得易Ponta正式會員</div><p>親愛的會員，您已成為得易Ponta卡正式會員，即日起享有點數折抵現金等好康優惠。</p><div class="n-terms__btn n-center"><a href="index.html" class="n-btn n-btn--primary">立即購物</a></div></div>';

        var failTxt = '<div class="n-terms__box clearfix"><div class="n-terms__title n-center title--lv3">申辦失敗</div><p>親愛的會員，您的得易Ponta聯名卡申請並沒有成功，<br/> 請洽客服專線0800-620-000，以維護您的權益。</p></div>';


        $termsWrap.on('click', '#btnAgree, a', function(e){

            e.preventDefault();

            var $target = $(e.target);

            var $edTarget = $(e.delegateTarget);

            if ($target.val() == '我同意以上條款申辦得易Ponta 聯名卡') {

                $termsBox.remove();
                $termsWrap.append(successTxt);

            } else if($edTarget.find('.n-terms__title').text() == '申辦成功') {
               
                $target.closest('.n-terms__wrap').children('.n-terms__pic').remove();
                $target.closest('.n-terms__box').remove();
                $termsWrap.append(recordTxt);

            } else if ($target.text() == '進行綁定') {

                $target.closest('.n-terms__wrap').children('.n-terms__pic').remove();
                $target.closest('.n-terms__wrap').children('.n-terms__box').remove();
                $termsWrap.append(memTxt);


            } else if ($edTarget.find('.n-terms__title').text() == '成為得易Ponta正式會員') {

                $target.closest('.n-terms__wrap').children('.n-terms__box').remove();
                $termsWrap.append(failTxt);
            }

        });


    }
    pontDemo();

});
