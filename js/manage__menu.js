

// 메뉴 권한 애니메이션 높이 제어
$(document).ready(function(){
    let menuList = $('.menu-wrap')
    let menuHeight = menuList.innerHeight();

    menuList.css('height', menuHeight)
})

// 테이블 페이지 네이션 전환

$(document).ready(function(){
    let tablePagination = $('.pagination .page-link') 
    tablePagination.click(function (e) {
    e.preventDefault(); // 링크 기본 동작 방지

    $(this).addClass("active");
    tablePagination.not($(this)).removeClass('active')
  });

  tablePagination.eq(0).addClass('active')

})





    // 임시 코드

    $(document).ready(function(){
        for (i = 0; i <= 21; i++) {
            if(i % 2 == 0 ){
                $('.manager__auth .radio__wrap input[type="radio"]').eq(i).first().prop('checked', true)
            }
        }

    })


// 회계공시 조합 임시 radio 체크 표시
$(document).ready(function(){
    for (i = 0; i <= 21; i++) {
        if(i % 2 == 0 ){
            $('.union__auth .radio__wrap input[type="radio"]').eq(i).first().prop('checked', true)
        }
    }

})
   


