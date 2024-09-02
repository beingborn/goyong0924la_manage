

/**
 *  table 버튼 클릭 시
 *  active class를 토글하여
 *  강조 색상을 지정 (css에 따로 지정)
 *  모든 테이블 페이지 네이션에 적용
 */

$(document).ready(function(){
    let tablePagination = $('.pagination .page-link') 


    tablePagination.click(function (e) {
    e.preventDefault(); // 링크 기본 동작 방지



    $(this).addClass("active");
    tablePagination.not($(this)).removeClass('active')
  });

  tablePagination.eq(0).addClass('active')

})


/**
 * 조회 버튼 클릭 시 모달 팝업
 * 
 */



$(document).ready(function() {

    // 모달의 너비 설정 함수 호출
    setModalWidth();

   
    $('[data-target]').click(function() {  // 모달 열기 이벤트 핸들러
        const targetModal = $(this).data('target');
        setModalWidth(targetModal)

        $(targetModal).show();
        $('.modal__bg').show();

    });

    // 모달 닫기 이벤트 핸들러
    $('.modal__close button').click(function() {
        $('.modal, .modal__bg').hide();  // 모든 모달 요소를 숨김
    });

    // 배경 숨기기

    // 모달의 너비를 부모 요소에 맞게 설정하는 함수
    function setModalWidth(targetModal) {
        const modalWidth = $('.main__inner').innerWidth() - 20;
        $(targetModal).css('width', modalWidth);
    }

    $('.modal__bg').hide();

});