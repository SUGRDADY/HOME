// ==============================================================
// loading
// ==============================================================
$(window).on("load", function () {
    $('body').addClass('loaded');
    $("#preloader-logo").fadeOut();
});
$(document).on('click', '.btn-checking', function () {
    $('body').addClass('loaded-checking');

    setTimeout(function () { $('body').removeClass('loaded-checking'); }, 3000);

});
$('[data-toggle="tooltip"]').tooltip({
    boundary: 'window'
})
$(function () {
    "use strict";
    // ==============================================================
    // Parsley
    // ==============================================================
    if ($('form').length) {
        var attr = $('form').attr('data-parsley-validate');
        // For some browsers, `attr` is undefined; for others,
        // `attr` is false.  Check for both.
        if (typeof attr !== typeof undefined && attr !== false) {
            window.Parsley.on('form:validated', function () {
                $('select').on('select2:select', function (evt) {
                    $(this).parsley().validate();
                });
            });
        }
    }
    // ==============================================================
    // top navbar hover
    // ==============================================================
    $(".top-navbar  .navbar-nav .nav-link , .top-navbar  .navbar-nav .dropdown-menu").on({
        mouseenter: function () {
            $(this).addClass('hover');
            $(this).closest('nav').addClass('nav-link-hover');
        },
        mouseleave: function () {
            $(this).removeClass('hover');
            $(this).closest('nav').removeClass('nav-link-hover');
        }
    });
    // ==============================================================
    // stop navbar close on click
    // ==============================================================

    jQuery(document).on('click', '.top-navbar .dropdown-menu', function (e) {
        e.stopPropagation();
    });
    // ==============================================================
    // transfer-service-modal
    // ==============================================================
    $('.transfer-service-modal').on('show.bs.modal', function () {
        // $('.service-modal:not(.transfer-service-modal)').modal('hide');
        $('body').addClass('modal-open');
        // setTimeout(function() {
        //   $('body').addClass('modal-open');
        // }, 500);
    })
    $('.transfer-service-modal').on('hide.bs.modal', function () {
        $('.service-modal:not(.transfer-service-modal)').modal('hide');
    })
    // ==============================================================
    // header open dropdown event
    // ==============================================================
    $('.site-header .dropdown ').on('show.bs.dropdown', function () {
        $('body').addClass('menu-dropdown-open');
    })

    $('.site-header .dropdown ').on('hide.bs.dropdown', function () {
        $('body').removeClass('menu-dropdown-open');
    })
    // ==============================================================
    //   $.scrollIt();
    // ==============================================================
    if ($('.scrollIt').length) {
        $.scrollIt();
    }
    // ==============================================================
    // Fixed header
    // ==============================================================
    fixed_header();
    $(window).scroll(function () {
        fixed_header();
    });
    function fixed_header() {
        var ht = $('.site-header').height();
        var st = $(window).scrollTop();
        var sf = ht + 200;
        var sb = 800;
        if (st > ht) {
            $('.site-header').addClass('nav-fixed');
            $('.top-navbar').addClass('nav-fixed');
            $('.page-top-fixed').addClass('nav-fixed');
        } else {
            $('.site-header').removeClass('nav-fixed');
            $('.top-navbar').removeClass('nav-fixed');
            $('.page-top-fixed').removeClass('nav-fixed');
        }
        if (st > sf) {
            $('.site-header').addClass('fixed');
            $('.top-navbar').addClass('fixed');
            // $('.page-top-fixed').addClass('fixed');

        } else {
            $('.site-header').removeClass('fixed');
            $('.top-navbar').removeClass('fixed');
            // $('.page-top-fixed').removeClass('fixed');
        }

    }
    // ==============================================================
    // choose-custom-date-type
    // ==============================================================
    $('.choose-custom-date-type input').on('change', function () {

        $(this).closest('.date-type-cont').find('.collapse').collapse('hide');
        if ($(this).attr('data-date-type') === "hijri") {
            $(this).closest('.date-type-cont').find($(this).attr('data-target')).collapse('hide');
            $(this).closest('.date-type-cont').find($(this).attr('data-target')).collapse('show');
        } else {
            $(this).closest('.date-type-cont').find($(this).attr('data-target')).collapse('hide');
            $(this).closest('.date-type-cont').find($(this).attr('data-target')).collapse('show');
        }
    });
    // ==============================================================
    // select2
    // ==============================================================
    // Adding placeholder for search input
    if ($("select").length) {
        $(function () {
            'use strict'
            var Placeholder = 'Ø§Ø¨Ø­Ø« Ù‡Ù†Ø§ ';
            if ($('html').attr('dir') == "ltr") {
                Placeholder = 'Search options';
            }
            // Basic with search
            $('.select2:not(.select2-icon)').select2({
                language: $('html').attr('lnag'),
                dir: $('html').attr('dir'),
                searchInputPlaceholder: Placeholder,
                width: "100%"
            });
            function formatState(state) {
                if (!state.id) {
                    return state.text;
                }
                var $state = $(
                    '<span><i class="' + state.element.value.toLowerCase() + ' "  /> ' + state.text + '</span>'
                );
                return $state;
            };
            // Basic with search
            $('.select2-icon').select2({
                language: $('html').attr('lnag'),
                dir: $('html').attr('dir'),
                searchInputPlaceholder: Placeholder,
                templateResult: formatState,
                width: "100%"
            });

        });
    }
    //====================================
    //     file upload
    //====================================
   

});
