$(function() {
    $(document).ready(function() {
        if ($.fn.jpreLoader) {
            $('body').jpreLoader({
                showPercentage: false,
                loaderVPos: '50%'
            });
        }
    });
    $('body').on('activate.bs.scrollspy', function() {
        $('.page-scroll.dropdown > .dropdown-toggle').each(function() {
            $(this).attr('data-target', '#');
        });
    });
    var pageScroll = function() {
        $('.page-scroll > a').bind('click', function(e) {
            e.preventDefault();
            var anchor = $(this)
              , href = anchor.attr('href')
              , offset = $('body').attr('data-offset');
            $('html, body').stop().animate({
                scrollTop: $(href).offset().top - (offset - 1)
            }, 1500, 'easeInOutExpo');
            if (!$(this).parent().hasClass('dropdown')) {
                $('.berg-collapse').collapse('hide');
            }
        });
    };
    pageScroll();
    var toggleNavbarMethod = function() {
        var ww = Math.max($(window).width(), window.innerWidth)
          , dropdown = $('.navbar .dropdown');
        if (ww >= 992) {
            dropdown.on('mouseover', function() {
                if (!$(this).hasClass('open')) {
                    $(this).addClass('open');
                }
            }).on('mouseout', function() {
                if ($(this).hasClass('open')) {
                    $(this).removeClass('open');
                }
            });
        } else {
            dropdown.off('mouseover').off('mouseout');
        }
    };
    toggleNavbarMethod();
    $(window).smartresize(function() {
        toggleNavbarMethod();
    });
    $('.dropdown-menu').click(function(e) {
        e.stopPropagation();
    });
    if ($.fn.magnificPopup) {
        $('.portfolio').magnificPopup({
            delegate: 'a.zoom',
            type: 'image',
            fixedContentPos: false,
            removalDelay: 300,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                preload: [0, 2],
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                tPrev: 'Previous Project',
                tNext: 'Next Project'
            }
        });
    }
    var columnChart = function() {
        $('.column-chart').find('.item-progress').each(function() {
            var itemProgress = $(this);
            var itemProgressHeight = $(this).parent().height() * ($(this).data('percent') / 100);
            itemProgress.css('height', itemProgressHeight);
        });
    };
    $(window).smartload(function() {
        columnChart();
    });
    var resumeCollapse = function() {
        var ww = Math.max($(window).width(), window.innerWidth)
          , workItem = $('.collapse:not(:first)', '#work')
          , educationItem = $('.collapse:not(:first)', '#education');
        if (ww < 768) {
            workItem.collapse('show');
            educationItem.collapse('show');
        } else {
            workItem.collapse('hide');
            educationItem.collapse('hide');
        }
    };
    $(window).smartload(function() {
        resumeCollapse();
    });
    $(window).smartresize(function() {
        resumeCollapse();
    });
    $(window).smartload(function() {
        if ($.fn.flexslider) {
            var flex = $('.flexslider.references');
            flex.flexslider({
                selector: ".slides > .item",
                manualControls: ".flex-control-nav li",
                directionNav: false,
                slideshowSpeed: 10000,
                after: function(slider) {
                    if (!slider.playing) {
                        slider.play();
                    }
                }
            });
        }
    });
    $('a.flex-prev').on('click', function(e) {
        e.preventDefault();
        $('.flexslider').flexslider('prev');
    });
    $('a.flex-next').on('click', function(e) {
        e.preventDefault();
        $('.flexslider').flexslider('next');
    });
    var circleChart = function() {
        $('.circle-chart').find('.item-progress').each(function() {
            var item = $(this)
              , maxHeight = 108
              , newHeight = maxHeight * ($(this).data('percent') / 100);
            if (jQuery.browser.mobile === false) {
                item.one('inview', function(isInView) {
                    if (isInView) {
                        item.animate({
                            height: newHeight
                        }, 1500);
                    }
                });
            } else {
                item.css('height', newHeight);
            }
        });
    };
    $(window).smartload(function() {
        circleChart();
    });
    var barChart = function() {
        $('.bar-chart').find('.item-progress').each(function() {
            var item = $(this)
              , percent = $(this).prev()
              , newWidth = $(this).parent().width() * ($(this).data('percent') / 100);
            if (jQuery.browser.mobile === false) {
                item.one('inview', function(isInView) {
                    if (isInView) {
                        item.animate({
                            width: newWidth
                        }, 1500);
                        percent.animate({
                            left: newWidth - percent.width()
                        }, 1500);
                    }
                });
            } else {
                item.css('width', newWidth);
                percent.css('left', newWidth - percent.width());
            }
        });
    };
    $(window).smartload(function() {
        barChart();
    });
    $(window).smartresize(function() {
        barChart();
    });
    var counter = function() {
        var number = $('.milestones').find('.number');
        if ($.fn.countTo) {
            number.countTo({
                speed: 3000
            });
        }
    };
    if (jQuery.browser.mobile === false) {
        var number = $('.milestones .number');
        number.one('inview', function(isInView) {
            if (isInView) {
                counter();
            }
        });
    } else {
        counter();
    }
});