


  $(document).ready(function(){
    console.log("불러졌음")
  })

  /**
   * 스크롤 이벤트 감지해서 헤더 고정 
   * or 숨기기
   * 
   * 1. 윈도우 스크롤 값 저장 
   * 2. 스크롤 값이 초기값 보다 커진다 => 스크롤을 내린다 true , headerHeight 보다 더 커졌을 때 header fixed
   * 3. 그 반대도 똑같이 진행
   * 4. 단 스크롤 높이 값이 헤더 높이 보다 작아진다면 다시 position relative 로 전환
   */


  $(document).ready(function() {
    let lastScrollTop = 0;

    $(window).scroll(function() {
      let scrollTop = $(this).scrollTop();
      let headerHeight = $('.header').outerHeight();
  
      if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
        // 스크롤을 내릴 때 헤더를 숨김 (단 스크롤이 헤더 높이보다 높을 때만)
        
        $('.header').css('transform', 'translateY(-100%)').removeClass('header__fixed');
      } else if (scrollTop < lastScrollTop || scrollTop <= headerHeight){
        // 스크롤을 올릴 때 헤더를 고정
        $('.header').css('transform', 'translateY(0)').addClass('header__fixed');
      } 
      
      if (scrollTop <= headerHeight) {
        // 단 스크롤 높이 값이 headerHeight값보다 작아진다면 relative로 다시 전환하기
        $('.header').css('transform', 'translateY(0%)').removeClass('header__fixed');
      }
      
      lastScrollTop = scrollTop;
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 스크롤이 0일 때 음수로 가지 않게 함
    });
  });


  /**
   * 헤더 영역 토글 함수
   * 
   * 
   * 1. active 값에 따라 펼치기
   * 
   */

  $(document).ready(function() {
    const gnbTop__Menu = $('#gnb1 > .top__menu > li.plus > a');
    const gnbSub__Menu = $('#gnb1 .sub__menu > ul > li > a');

    gnbTop__Menu.click(function() {
        const gnbOpenMenu = $(this).parent(); 
        const isItOpen = gnbOpenMenu.hasClass('active');
     
        if (isItOpen) {
            gnbOpenMenu.removeClass('active');
            $('.gnb__bg').hide()

        } else {
            // 모든 상위 메뉴에서 'active' 클래스 제거
            gnbTop__Menu.parent().removeClass('active');
            // 현재 클릭된 상위 메뉴에 'active' 클래스 추가
            gnbOpenMenu.addClass('active');
            $('.gnb__bg').show()

        }

        const firstSub__MenuItem = gnbOpenMenu.find('.sub__menu ul li:first-child a');
        if (firstSub__MenuItem.length > 0) {
            gnbOpenMenu.siblings().find('.sub__menu ul li').removeClass('active');
            firstSub__MenuItem.parent().addClass('active');
        }
        });

        gnbSub__Menu.click(function() {
        const gnbOpenSub__Menu = $(this).parent();
        // 모든 서브메뉴에서 'active' 클래스 제거
        gnbSub__Menu.parent().removeClass('active');
        // 현재 클릭된 서브메뉴에 'active' 클래스 추가
        gnbOpenSub__Menu.addClass('active');
        });
    });




    $('[dat').click(function() {  // 모달 열기 이벤트 핸들러
      const targetModal = $(this).data('target');
      setModalWidth(targetModal)

      $(targetModal).show();
      $('.modal__bg').show();

  });

  // 모달 닫기 이벤트 핸들러
  $('.modal__close button').click(function() {
      $('.modal, .modal__bg').hide();  // 모든 모달 요소를 숨김
  });
