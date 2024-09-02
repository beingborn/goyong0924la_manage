/**
 * 서브 탭 변환 (PC 모바일)
 */

$(document).ready(function () {
  let subTabBtn = $(".tab__wrap .tab__btn button");
  let subTabContent = $(".tab__content .tab");
  let moTabBtn = $(".mobile__tab .swiper .swiper-slide button");
  let moTabContent = $(".mo__open__wrap .mobile__con");
  let activeTabIndex = 0; // PC 및 모바일 공통의 활성화된 탭 인덱스
  let isMobileView = window.innerWidth < 767; // 초기 화면 크기 판단

  // 활성값 업데이트 및 초기화
  function initializeTabs() {
    if ($('.tab__wrap').css('display') == 'block') {
      activeTabIndex  = subTabBtn.index($(".tab__wrap .tab__btn button.active"));
    } else {
      activeTabIndex  = moTabBtn.index($(".mobile__tab .swiper .swiper-slide button.btn--active"));
    }

    if(activeTabIndex == -1) activeTabIndex = 0; // 할당된 값이 없으면 0 할당
    updateView();
  }


  // 탭 변환 핸들러
  function updateView() {
    console.log("현재", isMobileView)
    if (isMobileView) {
      subTabContent.hide();
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
    if (!isMobileView) {
      subTabBtn.removeClass("active");
      subTabBtn.eq(activeTabIndex).addClass("active");
      subTabContent.hide().eq(activeTabIndex).show();
    }

    if($('.content .motab-1').css('display') == 'block') {
      subTabContent.eq(0).hide();
    }
  }


  function handleClick(tabIndex){
    activeTabIndex = tabIndex;
    updateView()

    if (tabIndex == 2 || tabIndex == 3) {
      chartResize();
    } 
  }
  
  subTabBtn.click(function () {
    let tabIndex = $(this).parent().index();
    handleClick(tabIndex)
  });

  moTabBtn.click(function () {
    let moTabIndex = $(this).parent().index();
    handleClick(moTabIndex)
  });

  initializeTabs();

  // 화면 리사이즈 시 초기화
  function handleResize() {
    isMobileView = window.innerWidth < 767;
    initializeTabs();
  }

  $(window).resize(function () {
    handleResize();
  });



// Pie Chart 1
let pieChart1 = echarts.init(document.getElementById("pieChart1"));


// 차트 리사이즈
window.onresize = function () {
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



let pieOption1 = {
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
let pieChart2 = echarts.init(document.getElementById("pieChart2"));
let pieOption2 = {
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
let pieChart3 = echarts.init(document.getElementById("pieChart3"));
let pieOption3 = {
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
let pieChart4 = echarts.init(document.getElementById("pieChart4"));
let pieOption4 = {
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
let barChart1 = echarts.init(document.getElementById("barChart1"));
let barOption1 = {
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
let barChart2 = echarts.init(document.getElementById("barChart2"));
let barOption2 = {
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


let barChart3 = echarts.init(document.getElementById("barChart3"));
let barOption3 = {
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
            color: "#A4D594",
          },
        },
        {
          value: 1388700,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#8ECCE2",
          },
        },
        {
          value: 1538,
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
barChart3.setOption(barOption3);




// Bar Chart 4
let barChart4 = echarts.init(document.getElementById("barChart4"));
let barOption4 = {
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
            color: "#A4D594",
          },
        },
        {
          value: 12500,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#A4D594",
          },
        },
        {
          value: 1538,
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
barChart4.setOption(barOption4);

// Bar Chart 5
let barChart5 = echarts.init(document.getElementById("barChart5"));
let barOption5 = {
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
            color: "#A4D594",
          },
        },
        {
          value: 12500,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#8F8CAA",
          },
        },
        {
          value: 1538,
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
barChart5.setOption(barOption5);


// Bar Chart 6
let barChart6 = echarts.init(document.getElementById("barChart6"));
let barOption6 = {
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
            color: "#A4D594",
          },
        },
        {
          value: 12500,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#FDD784",
          },
        },
        {
          value: 1538,
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
barChart6.setOption(barOption6);























































});


         
/** 모바일 슬라이드 토글 */
 
 

let dataOpen = $(".data--open");

$(document).ready(function () {
  dataOpen.click(function () {
    let currentSlide = $(this).next(".mo__slide");

    $(this).next(".mo__slide").stop().slideToggle();
    $(this).toggleClass("on").siblings().removeClass("on");

    $(".mo__slide").not(currentSlide).slideUp();
    // 클릭하지 않은 ('.mo__slide')는 모두 slideUp() 시키기
  });

  // 기본은 모두 숨김
  $(".mo__slide").hide();
});

let swiper = new Swiper(".moTabSwiper", {
  slidesPerView: "auto",

  // spaceBetween: 4,
  freeMode: true,
  navigation: {
    nextEl: ".moTabSwiper .swiper-button-next",
    prevEl: ".moTabSwiper.swiper-button-prev",
  },
});














