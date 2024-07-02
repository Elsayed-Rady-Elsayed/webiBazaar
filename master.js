$(document).ready(function () {
    $(".imgContaienr").on("mouseenter ",function () {
        $(".imgContaienr span").animate({
            height:"100%",
        });
      });
      $(".imgContaienr").on("mouseleave ",function () {
        $(".imgContaienr span").animate({
            height:"0%",
        });
      })
    $("#showCart").on("click",function () {
        $(".cart").slideToggle();
      });
      $(".btn-close").on("click",function () {
        $(".cart").slideUp();
      })
      $("#ShopBtnLg").on("click",function(){
        $("#carouselExampleCaptions ,  #ContactUsPage  , #featurePage , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"none"
        });
        $("#shopItemsPage").css({
          display:"block"
      })
      });
      $("#HomeBtnLg").on("click",function(){
        $("#carouselExampleCaptions , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"block"
        });
        $("#shopItemsPage ,  #ContactUsPage  , #featurePage").css({
          display:"none"
      })
      });
      var s = $("#cardsShopPage").children();
    
      $("#gridOne").on("click",function(){
        $("#cardsShopPage").removeClass("gap-3")
        s.each(function(idx,el){
          $(el).addClass("col-md-3 col-6 ");
          $(el).removeClass("d-flex gap-2 flex-row col-12 align-items-center");
          console.log(el);
          el.style = "";
      });
    });
      $("#gridTwo").on("click",function(){
        $("#cardsShopPage").addClass("gap-3")
        s.each(function(idx,el){
          $(el).removeClass("col-md-3 col-6 h-50");
          $(el).addClass("d-flex gap-2 flex-row col-12 align-items-center");
          console.log(el.children[0]);
          el.style.width = "80%";
          el.style.height = "300px";
          el.children[0].style.maxWidth = "85%";
        });
      });
      $("#showFeaturesLg").on("click",function(){
        $("#carouselExampleCaptions , #shopItemsPage , #ContactUsPage , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"none"
        });
        $("#featurePage").css({
          display:"flex"
      })
      });
      $("#ContactUsLg").on("click",function(){
        $("#carouselExampleCaptions , #shopItemsPage , #featurePage , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"none"
        });
        $("#ContactUsPage").css({
          display:"flex"
      })
      });
  });