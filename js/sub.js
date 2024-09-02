/**
 * 서브 탭 변환
 * 
 */



$(document).ready(function () {
  let subTabBtn = $(".tab__wrap .tab__btn button");
  let subTabContent = $(".tab__content .tab");
  let moTabBtn = $(".mobile__tab .swiper .swiper-slide button");
  let moTabContent = $(".mo__open__wrap .mobile__con");

  let activeTabIndex = 0; // PC 및 모바일 공통의 활성화된 탭 인덱스
  let isMobileView = window.innerWidth < 767; // 초기 화면 크기 판단



  function initializeTabs() {
    let currentActiveTabIndex;
    if ($('.tab__wrap').css('display') == 'block') {
      currentActiveTabIndex = subTabBtn.index($(".tab__wrap .tab__btn button.active"));
    } else {
      currentActiveTabIndex = moTabBtn.index($(".mobile__tab .swiper .swiper-slide button.btn--active"));
    }
    console.log(currentActiveTabIndex)
    activeTabIndex = currentActiveTabIndex !== -1 ? currentActiveTabIndex : activeTabIndex;
    updateView();
  }

  function updateView() {
    
    if (isMobileView) {
      moTabBtn.removeClass("btn--active");
      moTabBtn.eq(activeTabIndex).addClass("btn--active");
      moTabContent.hide().eq(activeTabIndex).show();

      if (activeTabIndex == 2) {
        moTabContent.hide();
        $('.tab__3').show() // 모바일로 변해도 pc컨텐츠 유지한 tab show하기
        chartResize()

      } else if (activeTabIndex == 3) {
        $(".tab__4").show();
        chartResize()
      } 
    }
    
    // 모바일 뷰가 아닐때
    subTabBtn.removeClass("active");
    subTabBtn.eq(activeTabIndex).addClass("active");
    subTabContent.hide().eq(activeTabIndex).show();


    if($('.content .motab-1').css('display') == 'block') {
      subTabContent.eq(0).hide();
    }
  }

  function handleResize() {
    // 화면이 변경될때마다 isMobileView 부분을 true, false 를 검사함
    isMobileView = window.innerWidth < 767;
    // 초기화 함수가 실행될 때 initailaizeTabs 함수가 실행됌
    initializeTabs();
  }
      
  subTabBtn.click(function () {
    let tabIndex = $(this).parent().index();

    subTabBtn.removeClass("active");
    $(this).addClass("active");
    subTabContent.hide().eq(tabIndex).show();

    if (tabIndex == 2 || tabIndex ==3){
      chartResize();
    }

    // 클릭한 탭의 인덱스를 저장
    activeTabIndex = tabIndex;
  });

    moTabBtn.click(function () {
    let moTabIndex = $(this).parent().index();
    moTabBtn.removeClass("btn--active");
    $(this).addClass("btn--active");

    moTabContent.hide().eq(moTabIndex).show();

    if (moTabIndex == 2) {
      moTabContent.hide();

      $(".tab__4").hide();
      $(".tab__3").show();
      chartResize()
    } else if (moTabIndex == 3) {
      subTabContent.hide();
      moTabContent.hide();
      $(".tab__3").hide();
      $(".tab__4").show();
      chartResize()
    }

    // 모바일 탭 인덱스를 PC 탭 인덱스에도 반영
    activeTabIndex = moTabIndex;
    console.log('모바일 버튼 클릭시', activeTabIndex)
    if (!isMobileView) {

      subTabBtn.removeClass("active");
      subTabBtn.eq(activeTabIndex).addClass("active");
      subTabContent.hide().eq(activeTabIndex).show();
      chartResize()

    }
  });

  initializeTabs();

  // 화면 크기 변경 시 초기화 함수 재실행
  $(window).resize(function () {
    handleResize();
  });

















  

// Pie Chart 1
var pieChart1 = echarts.init(document.getElementById("pieChart1"));

window.onresize = function () {
  // console.log('차트 리사이징')
  chartResize()
};

function chartResize(){
  pieChart1.resize();
  pieChart2.resize();
  pieChart3.resize();
  pieChart4.resize();
  barChart1.resize();
  barChart2.resize();
  barChart3.resize();
  barChart4.resize();
  barChart5.resize();
  barChart6.resize();
}



var pieOption1 = {
  chart__title: {
    text: "Pie Chart 1",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "현금 및 예금" },
        { value: 735, name: "토지" },
        { value: 580, name: "건물" },
        { value: 484, name: "기타자산" },
        { value: 300, name: "부재재" },
      ],
    },
  ],
};
pieChart1.setOption(pieOption1);

// Pie Chart 2
var pieChart2 = echarts.init(document.getElementById("pieChart2"));
var pieOption2 = {
  chart__title: {
    text: "Pie Chart 2",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "현금 및 예금" },
        { value: 735, name: "토지" },
        { value: 580, name: "건물" },
        { value: 484, name: "기타자산" },
        { value: 300, name: "부재재" },
      ],
    },
  ],
};
pieChart2.setOption(pieOption2);

// Pie Chart 3
var pieChart3 = echarts.init(document.getElementById("pieChart3"));
var pieOption3 = {
  chart__title: {
    text: "Pie Chart 3",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "현금 및 예금" },
        { value: 735, name: "토지" },
        { value: 580, name: "건물" },
        { value: 484, name: "기타자산" },
        { value: 300, name: "부재재" },
      ],
    },
  ],
};
pieChart3.setOption(pieOption3);

// Pie Chart 4
var pieChart4 = echarts.init(document.getElementById("pieChart4"));
var pieOption4 = {
  chart__title: {
    text: "Pie Chart 4",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "현금 및 예금" },
        { value: 735, name: "토지" },
        { value: 580, name: "건물" },
        { value: 484, name: "기타자산" },
        { value: 300, name: "부재재" },
      ],
    },
  ],
};
pieChart4.setOption(pieOption4);

// Bar Chart 1
var barChart1 = echarts.init(document.getElementById("barChart1"));
var barOption1 = {
  chart__title: {
    text: "Bar Chart 1",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: ["자산", "부채"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [
        {
          value: 1807,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#8ECCE2",
          },
        },
        {
          value: 1807,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#91cc75",
          },
        },
      ],
      barWidth: "40%",
    },
  ],
};
barChart1.setOption(barOption1);

// Bar Chart 2
var barChart2 = echarts.init(document.getElementById("barChart2"));
var barOption2 = {
  chart__title: {
    text: "Bar Chart 2",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: ["자산", "부채"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [
        {
          value: 1807,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#A4D594",
          },
        },
        {
          value: 1807,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#F8C862",
          },
        },
      ],
      barWidth: "40%",
    },
  ],
};
barChart2.setOption(barOption2);





// 시계열 차트에서 나오는 부분


var barChart3 = echarts.init(document.getElementById("barChart3"));
var barOption3 = {
  chart__title: {
    text: "Bar Chart 3",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: ["2021", "2022", "2023"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [
        {
          value: 0,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#12A59C",
          },
        },
        {
          value: 1388700,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#12A59C",
          },
        },
        {
          value: 1538,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#12A59C",
          },
        },
      ],
      barWidth: "40%",
    },
  ],
};
barChart3.setOption(barOption3);




// Bar Chart 4
var barChart4 = echarts.init(document.getElementById("barChart4"));
var barOption4 = {
  chart__title: {
    text: "Bar Chart 4",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: ["2021", "2022", "2023"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [
        {
          value: 0,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#186DBB",
          },
        },
        {
          value: 12500,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#186DBB",
          },
        },
        {
          value: 1538,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#186DBB",
          },
        },
      ],
      barWidth: "40%",
    },
  ],
};
barChart4.setOption(barOption4);

// Bar Chart 5
var barChart5 = echarts.init(document.getElementById("barChart5"));
var barOption5 = {
  chart__title: {
    text: "Bar Chart 5",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    orient: "vertical",
    right: "right",
  },
  xAxis: {
    type: "category",
    data: ["2021", "2022", "2023"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [
        {
          value: 0,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#28BC78",
          },
        },
        {
          value: 12500,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#28BC78",
          },
        },
        {
          value: 1538,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#28BC78",
          },
        },
      ],
      barWidth: "40%",
    },
  ],
};
barChart5.setOption(barOption5);


// Bar Chart 6
var barChart6 = echarts.init(document.getElementById("barChart6"));
var barOption6 = {
  chart__title: {
    text: "Bar Chart 6",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    orient: "vertical",
    right: "right",
  },
  xAxis: {
    type: "category",
    data: ["2021", "2022", "2023"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [
        {
          value: 0,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#3891E3",
          },
        },
        {
          value: 12500,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#3891E3",
          },
        },
        {
          value: 1538,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#3891E3",
          },
        },
      ],
      barWidth: "40%",
    },
  ],
};
barChart6.setOption(barOption6);























































});


         
/** 모바일 슬라이드 토글 */
 
 

let dataOpen = $(".data--open");

$(document).ready(function () {
  dataOpen.click(function () {
    var currentSlide = $(this).next(".mo__slide");

    $(this).next(".mo__slide").stop().slideToggle();
    $(this).toggleClass("on").siblings().removeClass("on");

    $(".mo__slide").not(currentSlide).slideUp();
    // 클릭하지 않은 ('.mo__slide')는 모두 slideUp() 시키기
  });

  // 기본은 모두 숨김
  $(".mo__slide").hide();
});

var swiper = new Swiper(".moTabSwiper", {
  slidesPerView: "auto",

  // spaceBetween: 4,
  freeMode: true,
  navigation: {
    nextEl: ".moTabSwiper .swiper-button-next",
    prevEl: ".moTabSwiper.swiper-button-prev",
  },
});














