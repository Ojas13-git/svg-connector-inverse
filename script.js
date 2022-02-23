
var initAnimations = function() {
    var $animatable = $('.revealOnScroll');
    $animatable.each( function() {
        var pathLength = this.getTotalLength();

        this.setAttribute('stroke-dasharray', pathLength+' '+pathLength);
        this.setAttribute('stroke-dashoffset', pathLength);
    });
};

var initAnimationsDelayed = function() {
    var $animatableDelayed = $('.revealOnScrollDelayed');

    $animatableDelayed.each( function() {
        var pathLength = this.getTotalLength();

        this.setAttribute('stroke-dasharray', pathLength+' '+pathLength);
        this.setAttribute('stroke-dashoffset', pathLength);
    });
};

var initAnimationsDelayedLast = function() {
    var $animatableDelayedLast = $('.revealOnScrollDelayedLast');

    $animatableDelayedLast.each( function() {
        var pathLength = this.getTotalLength();

        this.setAttribute('stroke-dasharray', pathLength+' '+pathLength);
        this.setAttribute('stroke-dashoffset', pathLength);
    });
};

$(document).ready(function() {
    var $window = $(window);
    var $windowDelayed = $(window);
    var $windowDelayedLast = $(window);
    $window.on('scroll', revealOnScroll);
    $windowDelayed.on('scroll', revealOnScrollDelayed);
    $windowDelayedLast.on('scroll', revealOnScrollDelayedLast);

    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() * 1.1;

        
        $(".revealOnScroll:not(.animateSVG)").each(function () {

            
            var $this = $(this);
            var offsetTop = $this.offset().top;

            
            if (scrolled + win_height_padded > offsetTop) {
                $this.addClass('animateSVG');
            }
        });

        
        $(".revealOnScroll.animateSVG").each(function () {

            
            var $this = $(this);
            var offsetTop = $this.offset().top;

            
            if (scrolled + win_height_padded < offsetTop) {
                $this.removeClass('animateSVG');
            }
        });
    }

    function revealOnScrollDelayed() {
        var scrolled = $windowDelayed.scrollTop(),
            win_height_padded = $windowDelayed.height() * 1.1;

        $(".revealOnScrollDelayed:not(.delayAnimateSVG)").each(function () {

            
            var $this = $(this);
            var offsetTop = $this.offset().top;

           
            if (scrolled + win_height_padded > offsetTop) {
                $this.addClass('delayAnimateSVG');
            }
        });

        $(".revealOnScrollDelayed.delayAnimateSVG").each(function () {

            
            var $this = $(this);
            var offsetTop = $this.offset().top;

            
            if (scrolled + win_height_padded < offsetTop) {
                $this.removeClass('delayAnimateSVG');
            }
        });
    }

    function revealOnScrollDelayedLast() {
        var scrolled = $windowDelayedLast.scrollTop(),
            win_height_padded = $windowDelayedLast.height() * 1.1;

        $(".revealOnScrollDelayedLast:not(.delayAnimateSVGLast)").each(function () {

            
            var $this = $(this);
            var offsetTop = $this.offset().top;

            
            if (scrolled + win_height_padded > offsetTop) {
                $this.addClass('delayAnimateSVGLast');
            }
        });

        $(".revealOnScrollDelayedLast.delayAnimateSVGLast").each(function () {

            
            var $this = $(this);
            var offsetTop = $this.offset().top;

            
            if (scrolled + win_height_padded < offsetTop) {
                $this.removeClass('delayAnimateSVGLast');
            }
        });
    }
    
    initAnimations();
    initAnimationsDelayed();
    initAnimationsDelayedLast();
    revealOnScroll();
    revealOnScrollDelayed();
    revealOnScrollDelayedLast();
});