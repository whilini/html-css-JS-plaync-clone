const fullPageInit = () => {
  window.fullpage = $(document).ready(() => {
    $("#fullpage").fullpage({
      //options here
      autoScrolling: true,
      scrollHorizontally: true,
      scrollOverflow: true,
      slidesNavigation: true,
      slidesNavPosition: "bottom",
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);
  })[0];
};

const iScrollOnload = () => {
  const script = document.createElement("script");
  script.src = "./js/jquery.fullPage.js";
  script.onload = () => {
    fullPageInit();
  };
  document.head.appendChild(script);
};
