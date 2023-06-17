"use strict";

// NAV ONSCROLL FUNCTION
let explore_nav = document.querySelector(".explore_nav");
window.addEventListener("scroll", function () {
  explore_nav?.classList.toggle("active", this.scrollY > 0);
});

// DOM SELECTIONS
let modal_closer = document.querySelectorAll(".modal_close");
let overlay = document.querySelector(".overlay");
let comment_btn = document.querySelector(".comment_btn");
let comment_con = document.querySelector(".addcomment");
let postcomment_btn = document.querySelector(".addcomment .btn");
let addnew_camp_btn = document.querySelector(".addnew_camp_btn");
let addnew_camp = document.querySelector(".addnew_camp");
let submit_newcamp = document.querySelector(".submit_camp");
let explore_page = document.querySelector(".explore");
let view_camp_page = document.querySelector(".view_camp");
let view_camp_btn = document.querySelectorAll(".view_camp_btn");
let target_camp_name = document.querySelectorAll(".camp_name");
let target_camp_img = document.querySelector(".camp_img img");
let success_modal = document.querySelector(".success_modal");
let error_modal = document.querySelector(".error_modal");
let view_back = document.querySelector(".view_camp .back");
let login_swicth = document.querySelectorAll(".switch");
let login_form = document.querySelector(".login");
let newacc_form = document.querySelector(".create_acc");
let menu_btn = document.querySelector(".menu_btn");
let link_con = document.querySelector(".links");

// OBJECT WITH GENERAL FUNCTIONS (OOP)
const html_functions = {
  curr_modal: [],

  pop_modal: function (ele) {
    ele.classList.add("active");
    overlay.classList.add("active");
    explore_nav.classList.contains("active") ||
      explore_nav.classList.add("active");
    this.curr_modal = ele;
  },

  remove_modal: function () {
    this.curr_modal.classList.remove("active");
    overlay.classList.remove("active");
    let inputs = this.curr_modal.querySelectorAll(`.input`);
    inputs?.forEach((i) => {
      i.value = "";
    });
  },
};

//  DISPLAY MENU FUNCTION
menu_btn?.addEventListener("click", () => {
  menu_btn.classList.toggle("active");
  link_con.classList.toggle("active");
  overlay.classList.toggle("active");
});

// FROM VIEW CAMP BACK TO CAMPS PAGE FUNCTION
view_back?.addEventListener("click", () => {
  view_camp_page.classList.add("remove");
  explore_page.classList.remove("remove");
});

login_swicth?.forEach((i) => {
  i.onclick = () => {
    login_form.classList.toggle("remove");
    newacc_form.classList.toggle("remove");
  };
});

// POST COMMENT FUNCTION
postcomment_btn?.addEventListener("click", () => {
  html_functions.remove_modal();
});

// OPEN COMMENT SECTION FUNCTION
comment_btn?.addEventListener("click", () => {
  html_functions.pop_modal(comment_con);
});

addnew_camp_btn?.addEventListener("click", () => {
  html_functions.pop_modal(addnew_camp);
});

// ADD NEW CAMP FUNCTION
modal_closer?.forEach((i) => {
  i.onclick = () => {
    html_functions.remove_modal();
  };
});

// OVERLAY DISPLAY FUNCTION
overlay?.addEventListener("click", () => {
  html_functions.remove_modal();
});

// ADD NEW CAMP VERIFICATION OF FORM FUNCTION
let inputs = document.querySelectorAll(".addnew_camp .input");
let complete = [];
let url = document.querySelector(".url");

submit_newcamp?.addEventListener("click", () => {
  inputs.forEach((input, index) => {
    if (input.value === "") {
      input.focus();
    } else if (input.value !== "") {
      complete[index] = true;
    }
  });
  if (
    complete[0] === true &&
    complete[1] === true &&
    complete[2] === true &&
    complete[3] === true
  ) {
    complete[4] = url.value;
    html_functions.remove_modal();

    setTimeout(() => {
      console.log(url.value);
      if (complete[4].includes("https://")) {
        html_functions.pop_modal(success_modal);
      } else {
        html_functions.pop_modal(error_modal);
        console.log(url.value);
      }
    }, 1000);
    setTimeout(() => {
      html_functions.remove_modal();
    }, 5000);
  }
  setTimeout(() => (complete = []), 7000);
});

// VIEW CLICK CAMP FUNCTION
view_camp_btn?.forEach((i) => {
  i.onclick = () => {
    let con = i.parentElement.parentElement;
    let img = con.querySelector(".img img").src;
    let camp_name = con.querySelector(".name").textContent;

    explore_page.classList.add("remove");
    view_camp_page.classList.remove("remove");
    target_camp_name.forEach((i) => {
      i.textContent = camp_name;
    });
    target_camp_img.src = img;
  };
});

// LOGIN / CREATE ACC FUNCTION
login_swicth?.forEach((i) => {
  i.addEventListener("click", () => {
    login_form.classList.toggle("active");
    newacc_form.classList.toggle("active");
  });
});
