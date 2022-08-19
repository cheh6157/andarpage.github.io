$(function(){

    /*
     * 접근성 & UX 개선 (키보드 사용할때만 포커스 나오게)
     *
     * 
     * *
     *햄버거 메뉴 클릭시 메뉴 팝업
     *@version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (Nico)  
     * 
     */
     $('.ic-hambuger').click(function(e){
        e.preventDefault();

        $('.hb-menu').addClass('active')
        $('.header .b-back').addClass('active')
    })

    $('.btn-close').click(function(e){
        e.preventDefault();

        $('.hb-menu').removeClass('active')
        $('.header .b-back').removeClass('active')
    })

     /* 
     * * row-bottom scoll -fixed영역
     * @version 1.0.0 |||| @since 2022-07-03 |||| @author 본인이름 (은호)
     *
     */
      $( window ).scroll( function() {
        현재스크롤 = $(document).scrollTop();

        if(현재스크롤 > 0){
          $(".header").addClass('fixed')
        }else{
          $('.header').removeClass('fixed')
        }

      });
 



     /* 
     * * row-bottom gnb 영역
     * @version 1.0.0 |||| @since 2022-06-25 |||| @author 본인이름 (은호)
     *
     */
        $('.row-bottom .gnb-inner').click(function(e){
            e.preventDefault();
            $('.row-bottom .sub-list').stop().slideToggle();
            
        })
     

     /*
     * 메인 슬라이드 영역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (Nico)
     */
        var mainSlide = new Swiper(".sc-mainslide .swiper", {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      });



    /*
    
     * 
     * sc-products 슬라이드 구역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (Nico)
     *
     *
     */
        var productsSlide = new Swiper(".sc-products .swiper", {
        slidesPerView: 2.1,
        spaceBetween: 10,
        });

  

     /* 
     * 
     * 
     * hb-menu sub-item 구역
     * @version 1.0.0 |||| @since 2022-01-16 |||| @author 본인이름 (Nico)
     */
    
        $('.hb-menu .link-gnb').click(function(e){

          e.preventDefault();
        
          $(this).siblings('.sub-list').stop().slideToggle();
        })
    
        $('.hb-menu .link-custom').click(function(e){

          e.preventDefault();
        
          $(this).siblings('.sub-list').stop().slideToggle();
        })
    
    
    
    
    
    
    
    })//이거는 하나만 쓰세요 $(function())입니다.