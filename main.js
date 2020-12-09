
// ==================== TOP-MENU ======================================================

$(document).ready(function () {
  $(".top-header-menu-button").click(function (event) {
    $(".top-menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".top-menu-close").click(function (event) {
    $(".top-menu").removeClass("active");
    $("body").removeClass("lock");
  });
});

// ==============================  SHOW MORE ===========================================

$(document).ready(function () {
  $(".new-objects-show-more").click(function (event) {
    $(".show-more").toggleClass("opened");
    $(".new-objects-items").toggleClass("full");
    $(".new-objects-show-more").toggleClass("hide");
  });
});

// ================================= CONTACT US ACTIVE  =========================================

$(document).ready(function () {
  $(".contacts-button , .top-mngr-btn , .top-menu-mngr-btn").click(function (event) {
    $(".consult").toggleClass("consult-active");
    $("body").toggleClass("lock");
  });
  $(".consult-close").click(function (event) {
    $(".consult").removeClass("consult-active");
    $("body").removeClass("lock");
  });
});

// =============================== NO-VALID-FORM ======================================

function validate() {
  var elementUserName = document.getElementById("n");
  var userName = elementUserName.value;
  var elementUserPhone = document.getElementById("f");
  var userPhone = elementUserPhone.value;
  var elementUserMail = document.getElementById("m");
  var userMail = elementUserMail.value;
  var elementUserFeed = document.getElementById("fd");
  var userFeed = elementUserFeed.value;

  if (!userName) {
    elementUserName.classList.add("no-valid-form");
    document.querySelector(".massage").classList.add("no-valid");
    document.querySelector(".consult-label").classList.add("error");
    return false;
  } else {
    document.querySelector(".name").classList.remove("no-valid-form");
    document.querySelector(".massage").classList.remove("no-valid");
    document.querySelector(".consult-label").classList.remove("error");
    console.log(userName);
  }

  if (userPhone.length < 13) {
    elementUserPhone.classList.add("no-valid-form");
    document.querySelector(".massage-phone").classList.add("no-valid");
    document.querySelector(".consult-label-phone").classList.add("error");
    return false;
  } else {
    document.querySelector(".phone-num").classList.remove("no-valid-form");
    document.querySelector(".massage-phone").classList.remove("no-valid");
    document.querySelector(".consult-label-phone").classList.remove("error");
    console.log(userPhone);
  }

  if (!userMail) {
    elementUserMail.classList.add("no-valid-form");
    document.querySelector(".massage-mail").classList.add("no-valid");
    document.querySelector(".consult-label-mail").classList.add("error");
    return false;
  } else {
    document.querySelector(".mail").classList.remove("no-valid-form");
    document.querySelector(".massage-mail").classList.remove("no-valid");
    document.querySelector(".consult-label-mail").classList.remove("error");
    console.log(userMail);
  }

  if (!userFeed) {
    elementUserFeed.classList.add("no-valid-form");
    document.querySelector(".massage-feed").classList.add("no-valid");
    document.querySelector(".consult-label-feed").classList.add("error");
    return false;
  } else {
    document.querySelector(".feed").classList.remove("no-valid-form");
    document.querySelector(".massage-feed").classList.remove("no-valid");
    document.querySelector(".consult-label-feed").classList.remove("error");
    console.log(userFeed);
    return true;
  }
}

// ====================================== THANK YOU PAGE ========================================

function sub() {
  if (validate()) {
    $(".thank").addClass("thank-active");
    $("body").addClass("lock");
    $(".consult").removeClass("consult-active");

    $(".thank-close , .thank-button").click(function (event) {
      $(".thank").removeClass("thank-active");
      $("body").removeClass("lock");
    });
  }
}

// ============================= ESTATE ACTIVE ========================================

$(document).ready(function () {
  $(".card-button").click(function (event) {
    $(".estate").toggleClass("estate-active");
    $("body").toggleClass("lock");
  });
  $(".estate-close").click(function (event) {
    $(".estate").removeClass("estate-active");
    $("body").removeClass("lock");
  });
});

// =============================== ESTATE NO VALID FORM =============================

function estateValidate() {
  var elementUserName = document.getElementById("en");
  var userName = elementUserName.value;
  var elementUserPhone = document.getElementById("ef");
  var userPhone = elementUserPhone.value;
  var elementUserMail = document.getElementById("em");
  var userMail = elementUserMail.value;
  var elementUserFeed = document.getElementById("efd");
  var userFeed = elementUserFeed.value;

  if (!userName) {
    elementUserName.classList.add("no-valid-form");
    document.querySelector(".estate-massage").classList.add("no-valid");
    document.querySelector(".estate-label").classList.add("error");
    return false;
  } else {
    document.querySelector(".estate-name").classList.remove("no-valid-form");
    document.querySelector(".estate-massage").classList.remove("no-valid");
    document.querySelector(".estate-label").classList.remove("error");
    console.log(userName);
  }

  if (userPhone.length < 13) {
    elementUserPhone.classList.add("no-valid-form");
    document.querySelector(".estate-massage-phone").classList.add("no-valid");
    document.querySelector(".estate-label-phone").classList.add("error");
    return false;
  } else {
    document.querySelector(".estate-phone-num").classList.remove("no-valid-form");
    document.querySelector(".estate-massage-phone").classList.remove("no-valid");
    document.querySelector(".estate-label-phone").classList.remove("error");
    console.log(userPhone);
  }

  if (!userMail) {
    elementUserMail.classList.add("no-valid-form");
    document.querySelector(".estate-massage-mail").classList.add("no-valid");
    document.querySelector(".estate-label-mail").classList.add("error");
    return false;
  } else {
    document.querySelector(".estate-mail").classList.remove("no-valid-form");
    document.querySelector(".estate-massage-mail").classList.remove("no-valid");
    document.querySelector(".estate-label-mail").classList.remove("error");
    console.log(userMail);
  }

  if (!userFeed) {
    elementUserFeed.classList.add("no-valid-form");
    document.querySelector(".estate-massage-feed").classList.add("no-valid");
    document.querySelector(".estate-label-feed").classList.add("error");
    return false;
  } else {
    document.querySelector(".estate-feed").classList.remove("no-valid-form");
    document.querySelector(".estate-massage-feed").classList.remove("no-valid");
    document.querySelector(".estate-label-feed").classList.remove("error");
    console.log(userFeed);
    return true;
  }
}

// ==================================================================================================

function esub() {
  if (estateValidate()) {
    $(".thank").addClass("thank-active");
    $("body").addClass("lock");
    $(".estate").removeClass("estate-active");

    $(".thank-close , .thank-button").click(function (event) {
      $(".thank").removeClass("thank-active");
      $("body").removeClass("lock");
    });
  }
}

// =================== SECONDARY-HEADER ===============================================

window.onscroll = function toTop() {
  document.querySelector(".to-top-btn");
  if (window.pageYOffset > 200) {
    document.querySelector(".top-header-body-secondary").classList.add("fixed");
  } else {
    document.querySelector(".top-header-body-secondary").classList.remove("fixed");
  }
  //================== to-top-function ================================================
  if (window.pageYOffset > 2000) {
    document.querySelector(".to-top-btn").classList.add("init");
  } else {
    document.querySelector(".to-top-btn").classList.remove("init");
  }
  
};


