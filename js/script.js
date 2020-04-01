const $=window.jQuery;
$(function(){


    $("#spool .item__link-product").click(function () {

        $(".catalogue1__menu__closed").toggleClass("catalogue__menu__open");
        $(this).closest(".product-group__item").toggleClass("product-group__item_blue");
        $(this).toggleClass("item__link-product_blue");


    });

   $("#spool .link-product_button").click(function () {

        $(".catalogue1__menu__closed").toggleClass("catalogue__menu__open");
        $(this).closest(".product-group__item").toggleClass("product-group__item_blue");
        $(this).prev(".item__link-product").toggleClass("item__link-product_blue");

    });






});
