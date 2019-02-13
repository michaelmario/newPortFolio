$(function() {
    if (jQuery.browser.mobile === false) {
        $('.profile-text', '#profile').find('p:not(:first)').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {
                $(this).addClass('animated bounceInUp').css('opacity', 1);
            }
        });
        $('.inner-content', '#services').find('h4').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {
                $(this).addClass('animated fadeInUp').css('opacity', 1);
            }
        });
        $('.legend-left', '#strengths').find('.legend-title').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {
                $(this).addClass('animated bounceInLeft').css('opacity', 1);
            }
        });
        $('.legend-right', '#strengths').find('.item').each(function(i) {
            var element = $(this)
              , itemsDelay = (isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView) {
                    setTimeout(function() {
                        element.addClass('animated bounceInUp').css('opacity', 1);
                    }, itemsDelay * (i * 3));
                }
            });
        });
        $('#education').find('.resume-item:not(:first)').each(function(i) {
            var element = $(this)
              , itemsDelay = (isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView) {
                    setTimeout(function() {
                        element.addClass('animated bounceInUp').css('opacity', 1);
                    }, itemsDelay * (i * 2));
                }
            });
        });
        $('#work').find('.resume-item:not(:first)').each(function(i) {
            var element = $(this)
              , itemsDelay = (isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView) {
                    setTimeout(function() {
                        element.addClass('animated bounceInUp').css('opacity', 1);
                    }, itemsDelay * (i * 2));
                }
            });
        });
        $('.accolades').find('.item:not(:first)').each(function(i) {
            var element = $(this)
              , itemsDelay = (isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView) {
                    setTimeout(function() {
                        element.addClass('animated bounceInUp').css('opacity', 1);
                    }, itemsDelay * (i * 2));
                }
            });
        });
        $('#work-process').find('.title').each(function(i) {
            var element = $(this)
              , itemsDelay = (isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView) {
                    setTimeout(function() {
                        element.addClass('animated fadeInUp').css('opacity', 1);
                    }, itemsDelay * (i * 5));
                }
            });
        });
        $('.contact-details', '#contact').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {
                $(this).addClass('animated flipInX').css('opacity', 1);
            }
        });
    }
});
