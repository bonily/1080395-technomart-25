
var write = document.querySelector(".write-us");
var popup = document.querySelector(".write-reviews");
var overlay = document.querySelector(".overlay");
var overlay = document.querySelector(".overlay");
var map = document.querySelector(".map");
var popupMap = document.querySelector(".big-map");
var popupBasket = document.querySelector(".modal-basket-tools");
var button = document.querySelectorAll(".buy");
var mainBasket = document.querySelector(".main-basket");
var counter = document.querySelector(".link-counter");
var closeBasket = document.querySelector(".close-basket");
var mark = document.querySelector(".main-likes");
var bookmarks = document.querySelectorAll(".bookmark");
var bookmarksCounter = document.querySelector(".mark-counter");
var slaiderDrill = document.querySelector(".slaider-drill");
var right  = document.querySelector(".right-side");
var left = document.querySelector(".left-side");
var dotsRight = document.querySelector(".dots-right");
var dotsLeft = document.querySelector(".dots-left");
var delivery = document.querySelector(".delivery-main-button");
var garantee = document.querySelector(".garantee-main-button");
var credit = document.querySelector(".credit-main-button");
var deliveryInfo = document.querySelector(".delivery")
var garanteeInfo = document.querySelector(".garantee")
var creditInfo = document.querySelector(".credit")

if (delivery || garantee || credit) {

  delivery.addEventListener("click", function(evt) {
    evt.preventDefault();
    delivery.classList.add('main-services');
    garantee.classList.remove('main-services');
    credit.classList.remove('main-services');
    deliveryInfo.classList.add('active-service');
    garanteeInfo.classList.remove('active-service');
    creditInfo.classList.remove('active-service');
}
);

  garantee.addEventListener("click", function(evt) {
    evt.preventDefault();
    delivery.classList.remove('main-services');
    garantee.classList.add('main-services');
    credit.classList.remove('main-services');
    deliveryInfo.classList.remove('active-service');
    garanteeInfo.classList.add('active-service');
    creditInfo.classList.remove('active-service');
}
);

  credit.addEventListener("click", function(evt) {
    evt.preventDefault();
    delivery.classList.remove('main-services');
    garantee.classList.remove('main-services');
    credit.classList.add('main-services');
    deliveryInfo.classList.remove('active-service');
    garanteeInfo.classList.remove('active-service');
    creditInfo.classList.add('active-service');
}
);
};

if (right || left || dotsRight || dotsLeft) {
    right.addEventListener("click", function(evt) {
      evt.preventDefault();
      slaiderDrill.classList.toggle('active-slide');
      dotsRight.classList.toggle('dots-not-active');
      dotsLeft.classList.toggle('dots-not-active');
}
);

  left.addEventListener("click", function(evt) {
    evt.preventDefault();
    slaiderDrill.classList.toggle('active-slide');
    dotsRight.classList.toggle('dots-not-active');
    dotsLeft.classList.toggle('dots-not-active');
}
);

  dotsRight.addEventListener("click", function(evt) {
    evt.preventDefault();
    slaiderDrill.classList.toggle('active-slide');
    dotsRight.classList.toggle('dots-not-active');
    dotsLeft.classList.toggle('dots-not-active');
}
);

  dotsLeft.addEventListener("click", function(evt) {
    evt.preventDefault();
    slaiderDrill.classList.toggle('active-slide');
    dotsRight.classList.toggle('dots-not-active');
    dotsLeft.classList.toggle('dots-not-active');
}
);
};


if (popup || popupMap) {
  var close = popup.querySelector(".modal-close");
  var writerName = popup.querySelector(".write-input");
  var formRewiew = popup.querySelector(".reviews-form");
  var email = popup.querySelector(".write-email");
  var text = popup.querySelector(".write-text");
  var closeMap = popupMap.querySelector(".modal-close");

  write.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-show");
    writerName.focus();
  });

  write.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("modal-show");
    writerName.focus();
  });

  close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
    writerName.classList.remove("write-wrong");
    email.classList.remove("write-wrong");
    text.classList.remove("write-wrong");
    popup.classList.remove("modal-error");
  });

  formRewiew.addEventListener("submit", function(evt) {
    if (!writerName.value || !email.value || !text.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
   popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
      console.log('Нужно все заполнить');
    } else {
      popup.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
      if (writerName.classList.contains("write-wrong")) {
        writerName.classList.remove("write-wrong");
      }
      if (email.classList.contains("write-wrong")) {
        email.classList.remove("write-wrong");
      };
      if (text.classList.contains("write-wrong")) {
        text.classList.remove("write-wrong");
      }
    }
  });

  formRewiew.addEventListener("submit", function(evt) {
    if (!writerName.value) {
      evt.preventDefault();
      writerName.classList.add("write-wrong");
    }
  });

  formRewiew.addEventListener("submit", function(evt) {
    if (!email.value) {
      evt.preventDefault();
      email.classList.add("write-wrong");
    }
  });

  formRewiew.addEventListener("submit", function(evt) {
    if (!text.value) {
      evt.preventDefault();
      text.classList.add("write-wrong");
    }
  });
  map.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
    overlay.classList.add("modal-show");
  });

  closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
  }
);
};

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  popupMap.classList.remove("modal-show");
  if (writerName.classList.contains("write-wrong")) {
    writerName.classList.remove("write-wrong");
  }
  if (email.classList.contains("write-wrong")) {
    email.classList.remove("write-wrong");
  };
  if (text.classList.contains("write-wrong")) {
    text.classList.remove("write-wrong");
  }
}
);

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     evt.preventDefault();
     popup.classList.remove("modal-error");
     if (popup.classList.contains("modal-show")) {
       popup.classList.remove("modal-show");
     }
     if (overlay.classList.contains("modal-show")) {
       overlay.classList.remove("modal-show");
     }
   }
 }
);


 window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
          if (popupBasket.classList.contains("modal-show")) {
        popupBasket.classList.remove("modal-show");
      }
      if (overlay.classList.contains("modal-show")) {
        overlay.classList.remove("modal-show");
      }
    }
  }
);


 function onButtonClick(evt) {
 evt.preventDefault();
 var getNum = parseInt(counter.textContent, 10);
 getNum++;
 counter.textContent = getNum;
 popupBasket.classList.add("modal-show");
 overlay.classList.add("modal-show");
 mainBasket.classList.add("full-basket");
}

 for (var i = 0; i < button.length; i++) {
  button[i].addEventListener('click', onButtonClick);
};

closeBasket.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupBasket.classList.remove("modal-show");
  overlay.classList.remove("modal-show");
  }
);


  function onBookmarkClick(evt) {
  evt.preventDefault();
  var getNum = parseInt(bookmarksCounter.textContent, 10);
  getNum++;
  bookmarksCounter.textContent = getNum;
  mark.classList.add("full-basket");
};


 for (var i = 0; i < bookmarks.length; i++) {
   bookmarks[i].addEventListener('click', onBookmarkClick);
 };
