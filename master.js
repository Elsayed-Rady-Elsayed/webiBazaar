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

      $("#ShopBtnLg , #shopBtn,#ShopFromVio").on("click",function(){
        $("#carouselExampleCaptions ,#showProduct , #wishListPage , #page404  , #emelentPage , #GallryPage , #faqsPage , #servicesPage  , #BlogPage , #ContactUsPage  , #featurePage , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"none"
        });
        $("#shopItemsPage").css({
          display:"block"
      })
      });

      $("#HomeBtnLg , #HomeFromLogo , #HomeBtn").on("click",function(){
        $("#carouselExampleCaptions , #BlogPage , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"block"
        });
        $("#shopItemsPage , #page404 , #showProduct , #wishListPage , #servicesPage , #emelentPage , #GallryPage , #faqsPage , #BlogPage ,  #ContactUsPage  , #featurePage").css({
          display:"none"
      })
      });

      $("#showFeaturesLg , #featuresFooter , #featurePageBtn").on("click",function(){
        $("#carouselExampleCaptions , #showProduct , #wishListPage , #page404  , #emelentPage , #GallryPage , #faqsPage , #servicesPage   , #BlogPage , #shopItemsPage , #ContactUsPage , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"none"
        });
        $("#featurePage").css({
          display:"flex"
      })
      });

      $("#ContactUsLg , #contactUsFooter , #ContactPageBtn").on("click",function(){
        $("#carouselExampleCaptions , #showProduct , #wishListPage , #page404  , #emelentPage , #GallryPage , #faqsPage , #servicesPage , #BlogPage , #shopItemsPage , #featurePage , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"none"
        });
        $("#ContactUsPage").css({
          display:"flex"
      })
      });

      $("#BlogPageLg1 , #BlogPageLg2 , #BlogPageLg3 , #BlogBtn").on("click",function(){
        $("#carouselExampleCaptions , #showProduct , #wishListPage , #page404  , #emelentPage , #GallryPage , #faqsPage , #servicesPage , #ContactUsPage , #shopItemsPage , #featurePage , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"none"
        });
        $("#BlogPage").css({
          display:"flex"
      })
      });

      $("#servicesPageBtn , #servicesBtnPagesSm").on("click",function(){
        $("#carouselExampleCaptions , #showProduct , #wishListPage , #page404  , #emelentPage , #GallryPage , #faqsPage , #BlogPage , #ContactUsPage , #shopItemsPage , #featurePage , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"none"
        });
        $("#servicesPage").css({
          display:"block"
      })
      });

      $("#faqsPagePageBtnLg , #faqsPagePageBtnSm , #faqsFooter").on("click",function(){
        $("#carouselExampleCaptions , #showProduct , #wishListPage , #page404  , #emelentPage , #GallryPage  , #servicesPage , #BlogPage , #ContactUsPage , #shopItemsPage , #featurePage , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"none"
        });
        $("#faqsPage").css({
          display:"flex"
      })
      });

      $("#galleryPagePageBtnLg , #galleryFooter , #galleryPagePageBtnSm").on("click",function(){
        $("#carouselExampleCaptions , #showProduct , #wishListPage , #page404  , #emelentPage , #faqsPage , #servicesPage , #BlogPage , #ContactUsPage , #shopItemsPage , #featurePage , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"none"
        });
        $("#GallryPage").css({
          display:"flex"
      })
      });

      $("#elementsPagePageBtnLg , #elementsFooter , #elementsPagePageBtnSm").on("click",function(){
        $("#carouselExampleCaptions  , #showProduct , #wishListPage , #page404  , #GallryPage , #faqsPage , #servicesPage , #BlogPage , #ContactUsPage , #shopItemsPage , #featurePage , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"none"
        });
        $("#emelentPage").css({
          display:"block"
      })
      });
      $("#errorPagePageBtnLg  , #errorPagePageBtnSm").on("click",function(){
        $("#carouselExampleCaptions , #showProduct , #wishListPage , #emelentPage , #GallryPage , #faqsPage , #servicesPage , #BlogPage , #ContactUsPage , #shopItemsPage , #featurePage , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"none"
        });
        $("#page404").css({
          display:"block"
      })
      });
      $("#wishListBtn").on("click",function(){
        $("#carouselExampleCaptions , #showProduct , #page404 , #emelentPage , #GallryPage , #faqsPage , #servicesPage , #BlogPage , #ContactUsPage , #shopItemsPage , #featurePage , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"none"
        });
        $("#wishListPage").css({
          display:"block"
      })
      });
      $(".productCard").on("click",function(){
        $("#carouselExampleCaptions , #wishListPage , #page404 , #emelentPage , #GallryPage , #faqsPage , #servicesPage , #BlogPage , #ContactUsPage , #shopItemsPage , #featurePage , #MainItems , #FeaturedItems , #CategoryProduct , #Banner ").css({
            display:"none"
        });
        $("#showProduct").css({
          display:"flex"
      })
      });
      function getParams() {
        const params = {};
        const queryString = window.location.hash.substring(1);
        const prefix = 'showProduct?';
        const cleanQueryString = queryString.startsWith(prefix) ? queryString.slice(prefix.length) : queryString;

        const urlParams = new URLSearchParams(cleanQueryString);
        urlParams.forEach((value, key) => {
            params[key] = value;
        });

        return params;
    }
    function updateProductDetails() {
        const params = getParams();
        const productContent = document.getElementById('showProduct');
        console.log(params);
        if (params.id && params.name && params.img && params.price) {
            productContent.innerHTML = `
            <div class="col-12 align-items-center justify-content-center col-md-4">
        <img src="${params.img}" class="img-thumbnail w-100" alt="">
      </div>
      <div class="right col-12 col-md-8 d-flex flex-column h-100 justify-content-between ">
        <h3 class="text-capitalize fw-bold fs-2">${params.name}</h3>
        <hr>
        <h5 class="fs-3 fw-semibold">$${params.price}</h5>
        <hr>
        <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta suscipit ullam quibusdam voluptatum tenetur, rerum aspernatur! Placeat soluta consequuntur repellat, ex, earum ipsa velit eaque, asperiores delectus illum possimus natus.</p>
        <hr>
        <div class="quntity d-flex w-100 justify-content-between align-items-center">
          <div class="select w-75">
            <div class="btn btn-warning text-light">+</div>
            <div class="btn w-25 border border-1 border-warning">0</div>
            <div class="btn btn-warning text-light">-</div>
          </div>
          <div class="price fw-bold">
            price: <span class="text-warning">$578</span>
          </div>
        </div>
        <hr>
        <div class="btn btn-warning text-light w-50 ">add to cart</div>
      </div>
      <ul class="nav nav-tabs mt-5" id="ProductsTap" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="DESCRIPTION-tab" data-bs-toggle="tab" data-bs-target="#DESCRIPTION-tab-pane" type="button" role="tab" aria-controls="DESCRIPTION-tab-pane" aria-selected="true">DESCRIPTION</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="ADDITIONAL-tab" data-bs-toggle="tab" data-bs-target="#ADDITIONAL-tab-pane" type="button" role="tab" aria-controls="ADDITIONAL-tab-pane" aria-selected="false">
            ADDITIONAL INFORMATION</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="REVIEWS-tab" data-bs-toggle="tab" data-bs-target="#REVIEWS-tab-pane" type="button" role="tab" aria-controls="REVIEWS-tab-pane" aria-selected="false">REVIEWS</button>
        </li>
      </ul>
      <div class="tab-content border border-1 mb-4" id="myTabContent">
        <div class="tab-pane fade show active" id="DESCRIPTION-tab-pane" role="tabpanel" aria-labelledby="DESCRIPTION-tab" tabindex="0">
          <p class="text-capitalize fw-semibold text-dark mt-3">Paragraph text</p>
          <p class="text-secondary">Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
          <ul class="mb-4">
            <li class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li class="text-secondary">Maecenas ullamcorper est et massa mattis condimentum.</li>
            <li class="text-secondary">Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
            <li class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li class="text-secondary">Mauris eget diam magna, in blandit turpis.</li>
          </ul>
          <ol class="mb-4">
            <li class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li class="text-secondary">Maecenas ullamcorper est et massa mattis condimentum.</li>
            <li class="text-secondary">Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
            <li class="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li class="text-secondary">Mauris eget diam magna, in blandit turpis.</li>
          </ol>
          <p class="text-secondary">
            In cursus faucibus tortor eu vestibulum. Ut eget turpis ac justo porta varius. Donec vel felis ante, ac vehicula ipsum. Quisque sed diam metus. Quisque eget leo sit amet erat varius rutrum vitae dapibus lectus. Vivamus et sapien ante. Suspendisse potenti. Fusce in tellus est, ac consequat lacus. Nulla risus massa, commodo in imperdiet ut, ornare in leo. Duis pellentesque sagittis lorem, sed mollis lorem venenatis id.
          </p>
        </div>
        <div class="tab-pane fade p-2" id="ADDITIONAL-tab-pane" role="tabpanel" aria-labelledby="ADDITIONAL-tab" tabindex="0">
          <p class="text-capitalize fw-semibold text-dark mt-3">
            ADDITIONAL INFORMATION
          </p>
          <div class="additional border border-1 my-5">
            <div class="ite1 d-flex align-items-center p-2 h-100">
              <p class="fw-bold me-5 text-dark">weight</p>
              <p class="text-secondary">15kg</p>
            </div>
            <hr class="text-dark p-0 m-0">
            <div class="ite1 d-flex align-items-center h-100 p-2">
              <p class="fw-bold me-5 text-dark">Dimensions</p>
              <p class="text-secondary">124 × 451 × 215 cm</p>
            </div>
          </div>
        </div>
        <div class="tab-pane fade p-2" id="REVIEWS-tab-pane" role="tabpanel" aria-labelledby="REVIEWS-tab" tabindex="0">
          <p class="text-capitalize fw-semibold text-dark mt-3">
            REVIEWS
          </p>
          <div class="rev mb-4">
            no reviews yet
          </div>
          <form>
            <div class="mb-3">
              <label for="" class="form-label">Email address</label>
              <input type="email" class="form-control" id="" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Name</label>
              <input type="text" class="form-control" id="" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Review</label>
              <textarea name="" rows="7" class="form-control" id=""></textarea>
            </div>
            <button type="submit" class="btn btn-warning text-light">Submit</button>
          </form>
        </div>
      </div>
            `;
        } else {
          history.back();
        }
    }
    window.addEventListener('hashchange', updateProductDetails);
    updateProductDetails();
  });