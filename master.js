document
  .querySelector(".imgContaienr")
  .addEventListener("mouseenter", function () {
    document.querySelector(".imgContaienr span").style.height = "100%";
    document.querySelector(".imgContaienr span").style.transition = ".3s";
  });
document
  .querySelector(".imgContaienr")
  .addEventListener("mouseleave", function () {
    document.querySelector(".imgContaienr span").style.height = "0%";
  });

document.getElementById("showCart").addEventListener("click", function () {
  document.getElementById("cartContent").classList.toggle("d-none");
});

document.getElementById("btnCloseCart").addEventListener("click", function () {
  document.getElementById("cartContent").classList.add("d-none");
});

function hideAllElements() {
  document
    .querySelectorAll(
      "#carouselExampleCaptions , #BlogPage , #showProduct, #wishListPage, #page404, #emelentPage, #GallryPage, #faqsPage, #servicesPage, #BlogPage, #ContactUsPage, #shopItemsPage, #featurePage, #MainItems, #FeaturedItems, #CategoryProduct, #Banner"
    )
    .forEach((element) => {
      element.style.display = "none";
    });
}

function scrollToTop() {
  window.scroll(0, 0);
}

document
  .querySelectorAll("#ShopBtnLg, #shopBtn, #ShopFromVio")
  .forEach((button) => {
    button.addEventListener("click", function () {
      hideAllElements();
      getAllProducts();
      GetAllCategories();
      document.querySelectorAll("#shopItemsPage").forEach((element) => {
        element.style.display = "block";
      });
    });
  });

document
  .querySelectorAll("#HomeBtnLg, #HomeFromLogo, #HomeBtn")
  .forEach((button) => {
    button.addEventListener("click", function () {
      getAllProducts();
      hideAllElements();
      document
        .querySelectorAll(
          "#carouselExampleCaptions, #MainItems, #FeaturedItems, #CategoryProduct, #Banner"
        )
        .forEach((element) => {
          element.style.display = "block";
        });
      document
        .querySelectorAll(
          "#shopItemsPage, #page404, #showProduct, #wishListPage, #servicesPage, #emelentPage, #GallryPage, #faqsPage, #ContactUsPage, #featurePage"
        )
        .forEach((element) => {
          element.style.display = "none";
        });
    });
  });

document
  .querySelectorAll("#showFeaturesLg, #featuresFooter, #featurePageBtn")
  .forEach((button) => {
    button.addEventListener("click", function () {
      hideAllElements();
      document.querySelectorAll("#featurePage").forEach((element) => {
        element.style.display = "flex";
      });
    });
  });

document
  .querySelectorAll("#ContactUsLg, #contactUsFooter, #ContactPageBtn")
  .forEach((button) => {
    button.addEventListener("click", function () {
      hideAllElements();
      document.querySelectorAll("#ContactUsPage").forEach((element) => {
        element.style.display = "flex";
      });
    });
  });

document
  .querySelectorAll("#BlogPageLg1, #BlogPageLg2, #BlogPageLg3, #BlogBtn")
  .forEach((button) => {
    button.addEventListener("click", function () {
      hideAllElements();
      document.querySelectorAll("#BlogPage").forEach((element) => {
        element.style.display = "flex";
      });
    });
  });

document
  .querySelectorAll("#servicesPageBtn, #servicesBtnPagesSm")
  .forEach((button) => {
    button.addEventListener("click", function () {
      hideAllElements();
      scrollToTop();
      document.querySelector("#servicesPage").style.display = "block";
    });
  });

document
  .querySelectorAll("#faqsPagePageBtnLg, #faqsPagePageBtnSm, #faqsFooter")
  .forEach((button) => {
    button.addEventListener("click", function () {
      hideAllElements();
      scrollToTop();
      document.querySelector("#faqsPage").style.display = "flex";
    });
  });

document
  .querySelectorAll(
    "#galleryPagePageBtnLg, #galleryFooter, #galleryPagePageBtnSm"
  )
  .forEach((button) => {
    button.addEventListener("click", function () {
      hideAllElements();
      scrollToTop();
      document.querySelector("#GallryPage").style.display = "flex";
    });
  });

document
  .querySelectorAll(
    "#elementsPagePageBtnLg, #elementsFooter, #elementsPagePageBtnSm"
  )
  .forEach((button) => {
    button.addEventListener("click", function () {
      hideAllElements();
      scrollToTop();
      document.querySelector("#emelentPage").style.display = "block";
    });
  });

document
  .querySelectorAll("#errorPagePageBtnLg, #errorPagePageBtnSm")
  .forEach((button) => {
    button.addEventListener("click", function () {
      hideAllElements();
      scrollToTop();
      document.querySelector("#page404").style.display = "block";
    });
  });

document.querySelectorAll("#wishListBtn, #WishListBtnSm").forEach((button) => {
  button.addEventListener("click", function () {
    hideAllElements();
    document.querySelector("#wishListPage").style.display = "block";
  });
});

document.querySelectorAll(".productCard").forEach((card) => {
  card.addEventListener("click", function () {
    hideAllElements();
    scrollToTop();
    document.querySelector("#showProduct").style.display = "flex";
  });
});

function getParams() {
  const params = {};
  const queryString = window.location.hash.substring(1);
  const prefix = "showProduct?";
  const cleanQueryString = queryString.startsWith(prefix)
    ? queryString.slice(prefix.length)
    : queryString;
  const urlParams = new URLSearchParams(cleanQueryString);
  urlParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
}

function updateProductDetails() {
  const params = getParams();
  const productContent = document.getElementById("showProduct");
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
    // history.back();
  }
}

const apiUrl = "http://localhost:3000/";
var data;
var s;
var user;
var allProducts = new Promise((resolve, reject) => {
  fetch(`${apiUrl}products`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      resolve(data);
    })
    .catch((er) => {
      reject(er);
    });
});

var LastIdPromise = new Promise((resolve, reject) => {
  fetch(`${apiUrl}user`)
    .then((response) => response.text())
    .then((data) => {
      resolve(JSON.parse(data));
    })
    .catch((er) => {
      reject(er);
    });
});

var allCategories = new Promise((resolve, reject) => {
  fetch(`${apiUrl}categories`)
    .then((response) => response.text())
    .then((data) => {
      resolve(JSON.parse(data));
    })
    .catch((er) => {
      reject(er);
    });
});

async function setData() {
  const name = document.getElementById("Inputname").value.toString();
  const email = document.getElementById("InputEmail1").value.toString();
  const pass = document.getElementById("Password1").value.toString();
  const confPass = document
    .getElementById("InputConfPassword1")
    .value.toString();
  s = await LastIdPromise;
  const lastId = s.length == 0 ? 0 : s[s.length - 1]["id"];
  if (
    name.length != 0 &&
    email.length != 0 &&
    pass.length != 0 &&
    confPass.length != 0 &&
    pass == confPass
  ) {
    const data = {
      id: lastId + 1,
      name: name,
      email: email,
      status: "online",
      password: pass,
      cart: [],
      wishlist: [],
    };
    console.log(data);
    document
      .getElementById("createAccount")
      .setAttribute("data-bs-toggle", "modal");
    return data;
  } else {
    document.getElementById("createAccount").setAttribute("data-bs-toggle", "");
    return "";
  }
}

async function createAccountFunction() {
  var data = await setData();
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(`${apiUrl}user`, options)
    .then((response) => {
      if (response.ok) {
        document
          .getElementById("createAccount")
          .setAttribute("data-bs-toggle", "modal");
        return response.json();
      } else {
        throw new Error("problem occured" + response.statusText);
      }
    })
    .then((data) => {
      console.log("success" + data);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function LoginFunction() {
  var users = await LastIdPromise;
  const email = document
    .getElementById("exampleInputEmail1Login")
    .value.toString();
  const pass = document
    .getElementById("exampleInputPassword1Login")
    .value.toString();
  users.forEach((el) => {
    if (el["email"] == email && el["password"] == pass) {
      document
        .getElementById("LoginBtn")
        .setAttribute("data-bs-toggle", "modal");
      window.localStorage.setItem("isLogined", true);
      window.localStorage.setItem("user", JSON.stringify(el));
    }
  });
  console.log(users);
}
console.log(window.localStorage.getItem("user"));
function addToCartOrWishList(elment) {
  document.querySelector(elment).addEventListener("click", function (ev) {
    if (ev.target.classList.contains("addToCart")) {
      if (
        ev.target.parentElement.previousElementSibling.classList.contains(
          "item"
        )
      ) {
        console.log("add to cart");
        user.cart.push(
          Number(
            ev.target.parentElement.previousElementSibling.getAttribute(
              "data-bs-pid"
            )
          )
        );
      }
    }
    if (ev.target.classList.contains("addToCartWishes")) {
      if (
        ev.target.parentElement.previousElementSibling.classList.contains(
          "item"
        )
      ) {
        console.log(
          ev.target.parentElement.previousElementSibling.getAttribute(
            "data-bs-pid"
          )
        );
        user.wishlist.push(
          Number(
            ev.target.parentElement.previousElementSibling.getAttribute(
              "data-bs-pid"
            )
          )
        );
      }
    }
    const data = {
      id: user.id,
      name: user.name,
      email: user.email,
      status: user.status,
      password: user.password,
      cart: user.cart,
      wishlist: user.wishlist,
    };
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(`${apiUrl}user/${user.id}`, options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problem occurred: " + response.statusText);
        }
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    window.localStorage.setItem("user", JSON.stringify(user));
    console.log(user);
  });
}

async function getAllProducts() {
  document.getElementById("productsCardSection").innerHTML = " ";
  document.getElementById("productCategorySection").innerHTML = " ";
  document.getElementById("cardsShopPage").innerHTML = " ";
  var p = await allProducts;
  p.forEach((el, idx) => {
    var div = document.createElement("div");
    var productCard = `
        <div class="col-12 col-md-2  d-flex flex-column justify-content-between mt-1">
                  <a data-bs-pid="${el.id}" href="shop.html?id=${el.id}&name=${el.name}&img=${el.img}&price=${el.price}" class="item productCard card border-0  pointer-event h-50  text-decoration-none">         
                    <img src="${el.img}" class="img-fluid" alt="">
                      <div class="text">
                          <div class="stars mt-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star" viewBox="0 0 16 16">
                                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star" viewBox="0 0 16 16">
                                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star" viewBox="0 0 16 16">
                                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star" viewBox="0 0 16 16">
                                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star" viewBox="0 0 16 16">
                                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                </svg>
                          </div>
                          <p class="m-0 fw-semibold text-capitalize">${el.name}</p>
                          <div class="price d-flex gap-3">
                          <p class="fw-bold">$${el.price}</p>
                          <p class="fw-light text-decoration-line-through text-black-50 small">$${el.old_price}</p>
                          </div>
                      </div>
                  </a>
                  <div class="gap-2 d-flex align-items-center justify-content-center ">
                    <span class="bg-body-secondary p-2 rounded rounded-2 addToCart w-50 text-center z-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="addToCart bi bi-basket" viewBox="0 0 16 16">
                          <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/>
                        </svg>
                  </span>
                  <span class="bg-body-secondary p-2 rounded rounded-2 addToCartWishes w-50 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="addToCartWishes bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                </span>
                  </div>
                </div>
        `;
    if (idx < 4) {
      document.getElementById("productsCardSection").innerHTML += productCard;
      document.getElementById("productCategorySection").innerHTML +=
        productCard;
    }
    document.getElementById("cardsShopPage").innerHTML += productCard;
  });
}

async function getAllProductsBasedOnCategory(category) {
  document.getElementById("productsCardSection").innerHTML = " ";
  document.getElementById("productCategorySection").innerHTML = " ";
  document.getElementById("cardsShopPage").innerHTML = " ";
  var p = await allProducts;
  p.forEach((el, idx) => {
    var div = document.createElement("div");
    var productCard = `
        <div class="col-12 col-md-3  d-flex flex-column justify-content-between">
                  <a data-bs-pid="${el.id}" href="shop.html?id=${el.id}&name=${el.name}&img=${el.img}&price=${el.price}" class="item productCard card border-0  p-1 pointer-event h-50  text-decoration-none">         
                    <img src="${el.img}" class="img-fluid" alt="">
                      <div class="text">
                          <div class="stars mt-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star" viewBox="0 0 16 16">
                                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star" viewBox="0 0 16 16">
                                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star" viewBox="0 0 16 16">
                                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star" viewBox="0 0 16 16">
                                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star" viewBox="0 0 16 16">
                                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                </svg>
                          </div>
                          <p class="m-0 fw-semibold text-capitalize">${el.name}</p>
                          <div class="price d-flex gap-3">
                          <p class="fw-bold">$${el.price}</p>
                          <p class="fw-light text-decoration-line-through text-black-50 small">$${el.old_price}</p>
                          </div>
                      </div>
                  </a>
                  <div class="gap-2 d-flex align-items-center justify-content-center ">
                    <span class="bg-body-secondary p-2 rounded rounded-2 addToCart w-50 text-center z-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="addToCart bi bi-basket" viewBox="0 0 16 16">
                          <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/>
                        </svg>
                  </span>
                  <span class="bg-body-secondary p-2 rounded rounded-2 addToCartWishes w-50 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="addToCartWishes bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                </span>
                  </div>
                </div>
        `;
    if (el.category == category) {
      if (idx < 4) {
        document.getElementById("productsCardSection").innerHTML += productCard;
        document.getElementById("productCategorySection").innerHTML +=
          productCard;
      }
      document.getElementById("cardsShopPage").innerHTML += productCard;
    }
  });
}

document
  .getElementById("cateProductUlShopPage")
  .addEventListener("click", setProductsBasedOnCategory);

document
  .getElementById("cateProductUl")
  .addEventListener("click", setProductsBasedOnCategory);

async function setProductsBasedOnCategory(evt) {
  // var allCategoiesHolder = await allCategories;
  // if(ev)
  if (evt.target.classList.contains("ELECTRONICS")) {
    getAllProductsBasedOnCategory("ELECTRONICS");
  } else if (evt.target.classList.contains("CLOTHES")) {
    getAllProductsBasedOnCategory("CLOTHES");
  } else if (evt.target.classList.contains("MOBILES")) {
    getAllProductsBasedOnCategory("MOBILES");
  } else if (evt.target.classList.contains("LAPTOPS")) {
    getAllProductsBasedOnCategory("LAPTOPS");
  } else {
    getAllProducts();
  }
  console.log(evt.target.classList);
}

async function showUserWishList() {
  var allProductshere = await fetch(`${apiUrl}products`)
    .then((res) => res.json())
    .then((data) => data);
  console.log(allProductshere);
  var userWishList = user.wishlist;
  var ProuctsToWishList = [];
  allProductshere.forEach((el) => {
    userWishList.forEach((c) => {
      if (c == Number(el["id"])) {
        ProuctsToWishList.push(el);
      }
    });
  });
  let WishListConent = document.querySelector("#wishListPage .cards");
  ProuctsToWishList.forEach((el) => {
    var item = `
        <div class="wishCard d-flex align-items-center row col-12 col-md-5 mb-2" >
              <img src="${el.img}" class="img-fluid col-5" alt="">
              <div class="text col-7">
                <h4 class="h6">${el.name}</h4>
                <p>price:${el.price}$</p>
                <p>category:${el.category}$</p>
                <div class="btn btn-danger removeFromWishList" data-bs-remove=${el.id} id="removeFromWishList">remove</div>
              </div>
            </div>
            <hr/>
        `;
    WishListConent.innerHTML += item;
  });
}

async function showUserCart() {
  var allProductshere = await fetch(`${apiUrl}products`)
    .then((res) => res.json())
    .then((data) => data);
  var userCart = user.cart;
  var ProuctsToCart = [];
  allProductshere.forEach((el) => {
    userCart.forEach((c) => {
      if (c == Number(el["id"])) {
        ProuctsToCart.push(el);
      }
    });
  });
  document.getElementById("NumOfItemsInCart").innerHTML = ProuctsToCart.length;
  let cartConent = document.getElementById("cartContent");
  ProuctsToCart.forEach((el) => {
    var item = `
        <a data-bs-pid="${el.id}" href="shop.html?id=${el.id}&name=${
      el.name
    }&img=${el.img}&price=${
      el.price
    }" class="text-dark item productCard border-0 pointer-event text-decoration-none d-flex row">
              <img src="${el.img}" class="img-fluid col-4" alt="">
              <div class="text col-7">
               <h4 class="h6">${el.name}</h4>
               <p>price:${el.price}$</p>
                <p>category: ${el.category.toLowerCase()}</p>
              </div>
            </a>
          <div class="btn btn-danger removeFromCart w-100" data-bs-remove=${
            el.id
          } id="removeFromCart">remove</div>
            <hr/>
        `;
    cartConent.innerHTML += item;
  });
}

document.getElementById("logoutBtn").onclick = function () {
  window.localStorage.clear();
  window.location.reload();
};

document
  .querySelector(".products .cards")
  .addEventListener("click", function (evt) {
    if (evt.target.tagName == "IMG") {
      console.log(evt.target.tagName);
      window.addEventListener("hashchange", updateProductDetails);
      updateProductDetails();
    }
  });

document
  .getElementById("searchField")
  .addEventListener("keydown", async function (evt) {
    document.getElementById("searchContent").innerHTML = " ";
    var allProductsHolder = [];
    allProductsHolder = await fetch(`${apiUrl}products`)
      .then((res) => res.json())
      .then((data) => data);
    var searchMatch = [];
    allProductsHolder.forEach((el) => {
      if (
        el.name.toLowerCase().includes(evt.target.value.toLowerCase()) &&
        evt.target.value != ""
      ) {
        searchMatch.push(el);
      }
    });
    searchMatch.forEach((el) => {
      var item = `
        <a data-bs-pid="${el.id}" href="shop.html?id=${el.id}&name=${el.name}&img=${el.img}&price=${el.price}" class="text-dark item productCard border-0 pointer-event text-decoration-none d-flex row">
              <img src="${el.img}" class="img-fluid col-5" style="width:250px;height:250px" alt="">
              <div class="text col-7">
                <h4 class="h6">${el.name}</h4>
                <p>price:${el.price}$</p>
              </div>
            </a>
            <hr/>
        `;
      document.getElementById("searchContent").innerHTML += item;
      document.getElementById("searchContent").style.display = "block";
    });
    if (searchMatch.length == 0) {
      document.getElementById("searchContent").style.display = "none";
    }
  });

document
  .getElementById("headerCategory")
  .addEventListener("click", function (evt) {
    hideAllElements();
    document.querySelectorAll("#shopItemsPage").forEach((element) => {
      element.style.display = "block";
    });
    setProductsBasedOnCategory(evt);
  });

async function GetAllCategories() {
  document.getElementById("DropDownList").innerHTML = " ";
  document.getElementById("headerCategory").innerHTML = " ";
  document.getElementById("cateProductUl").innerHTML = " ";
  document.getElementById("cateProductUlShopPage").innerHTML = " ";
  var allCategoiesHolder = await allCategories;
  document.getElementById(
    "cateProductUl"
  ).innerHTML += `<li class=""><a class="text-decoration-none text-dark fw-semibold">ALL</a></li>`;
  document.getElementById(
    "cateProductUlShopPage"
  ).innerHTML += `<li class="btn btn-primary"><a class="text-decoration-none text-light fw-semibold">ALL</a></li>`;
  allCategoiesHolder.forEach((el) => {
    var item = `
        <li><a class="dropdown-item ${el.name}">${el.name}</a></li>
        <li><hr class="dropdown-divider"></li>
      `;
    var cateProductSectionMain = `
        <li class=""><a class="text-decoration-none text-dark fw-semibold ${el.name}">${el.name}</a></li>
      `;
    var cateProductSection = `
        <li class="btn btn-primary"><a class="text-decoration-none text-light fw-semibold ${el.name}">${el.name}</a></li>
      `;
    document.getElementById("DropDownList").innerHTML += item;
    document.getElementById("headerCategory").innerHTML += item;
    document.getElementById("cateProductUl").innerHTML +=
      cateProductSectionMain;
    document.getElementById("cateProductUlShopPage").innerHTML +=
      cateProductSection;
  });
}

async function sortProductsWithPrice(evt) {
  document.getElementById("cardsShopPage").innerHTML = " ";
  var p = await allProducts;
  if (evt.target.classList.contains("sortByPriceascending")) {
    p.sort((a, b) => a.price - b.price);
  } else if (evt.target.classList.contains("sortByPricedescending")) {
    p.sort((a, b) => b.price - a.price);
  } else if (evt.target.classList.contains("sortByName")) {
    p.sort((a, b) => a.name.localeCompare(b.name));
  }
  p.forEach((el, idx) => {
    var div = document.createElement("div");
    var productCard = `
        <div class="col-12 col-md-2  d-flex flex-column justify-content-between mt-1">
                  <a data-bs-pid="${el.id}" href="shop.html?id=${el.id}&name=${el.name}&img=${el.img}&price=${el.price}" class="item productCard card border-0  pointer-event h-50  text-decoration-none">         
                    <img src="${el.img}" class="img-fluid" alt="">
                      <div class="text">
                          <div class="stars mt-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star" viewBox="0 0 16 16">
                                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star" viewBox="0 0 16 16">
                                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star" viewBox="0 0 16 16">
                                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star" viewBox="0 0 16 16">
                                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" class="bi bi-star" viewBox="0 0 16 16">
                                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                </svg>
                          </div>
                          <p class="m-0 fw-semibold text-capitalize">${el.name}</p>
                          <div class="price d-flex gap-3">
                          <p class="fw-bold">$${el.price}</p>
                          <p class="fw-light text-decoration-line-through text-black-50 small">$${el.old_price}</p>
                          </div>
                      </div>
                  </a>
                  <div class="gap-2 d-flex align-items-center justify-content-center ">
                    <span class="bg-body-secondary p-2 rounded rounded-2 addToCart w-50 text-center z-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="addToCart bi bi-basket" viewBox="0 0 16 16">
                          <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/>
                        </svg>
                  </span>
                  <span class="bg-body-secondary p-2 rounded rounded-2 addToCartWishes w-50 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="addToCartWishes bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                    </svg>
                </span>
                  </div>
                </div>
        `;
    document.getElementById("cardsShopPage").innerHTML += productCard;
  });
}

function deleteFromCart(element) {
  if (element.classList.contains("removeFromCart")) {
    var newCart = user.cart.filter(
      (n) => n != Number(element.getAttribute("data-bs-remove"))
    );
    user.cart = newCart;
  }
  if (element.classList.contains("removeFromWishList")) {
    var Newwishlist = user.wishlist.filter(
      (n) => n != Number(element.getAttribute("data-bs-remove"))
    );
    user.wishlist = Newwishlist;
  }
  const data = {
    id: user.id,
    name: user.name,
    email: user.email,
    status: user.status,
    password: user.password,
    cart: user.cart,
    wishlist: user.wishlist,
  };
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(`${apiUrl}user/${user.id}`, options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Problem occurred: " + response.statusText);
      }
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  window.localStorage.setItem("user", JSON.stringify(user));
  console.log(user);
}

document
  .getElementById("wishListPage")
  .addEventListener("click", function (evt) {
    if (evt.target.classList.contains("removeFromWishList")) {
      deleteFromCart(evt.target);
    }
  });

document
  .getElementById("cartContent")
  .addEventListener("click", function (evt) {
    if (evt.target.classList.contains("removeFromCart")) {
      deleteFromCart(evt.target);
    }
  });

document
  .getElementById("sortByPriceascending")
  .addEventListener("click", sortProductsWithPrice);

document
  .getElementById("sortByPricedescending")
  .addEventListener("click", sortProductsWithPrice);

document
  .getElementById("sortingByName")
  .addEventListener("click", sortProductsWithPrice);

document
  .getElementById("createAccount")
  .addEventListener("click", createAccountFunction);

document.getElementById("LoginBtn").addEventListener("click", LoginFunction);

getAllProducts();
GetAllCategories();

if (window.localStorage.getItem("isLogined")) {
  addToCartOrWishList(".products .cards");
  addToCartOrWishList("#CategoryProduct #productCategorySection");
  addToCartOrWishList("#shopItemsPage .cards");
}
if (window.localStorage.getItem("isLogined")) {
  user = JSON.parse(window.localStorage.getItem("user"));
  document.getElementById("profileBtn").classList.remove("d-none");
  document.getElementById("logoutBtn").classList.remove("d-none");
  document.getElementById("LoginBtnShow").classList.add("d-none");
  document.getElementById("createAccountShow").classList.add("d-none");
  document.getElementById("WishListBtnSm").classList.remove("d-none");
  document.getElementById("wishListBtn").classList.remove("d-none");
  document.getElementById("cartBtnShow").classList.remove("d-none");
  showUserCart();
  showUserWishList();
} else {
  document.getElementById("WishListBtnSm").classList.add("d-none");
  document.getElementById("wishListBtn").classList.add("d-none");
  document.getElementById("cartBtnShow").classList.add("d-none");
  document.getElementById("profileBtn").classList.add("d-none");
  document.getElementById("logoutBtn").classList.add("d-none");
  document.getElementById("LoginBtnShow").classList.remove("d-none");
  document.getElementById("createAccountShow").classList.remove("d-none");
}
