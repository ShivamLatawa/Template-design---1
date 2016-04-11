app.controller('HomeController', function($scope) {

    $scope.showLogin = false;

    $scope.showLoginPopUp = function() {
        $scope.showLogin = true;
    }

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 200) {
            $('body').find('.dockedHeader').addClass('active');
        } else {
            $('body').find('.dockedHeader').removeClass('active');
        }

        if ($(this).scrollTop() > 280) {
            $('body').find('.fixedPos').addClass('fixTop');
        } else {
            $('body').find('.fixedPos').removeClass('fixTop');
        }

    });

    $('.right-arrow').on('click', function() {
        var $ulContainer = $('.imgContainer').find('ul');
        $ulContainer.animate({
            marginLeft: '+=-330px'
        });
    })

    $('.left-arrow').on('click', function() {
        var $ulContainer = $('.imgContainer').find('ul');
        $ulContainer.animate({
            marginLeft: '+=330px'
        });
    })

    $('body').on('click', '.close', function(e) {
        $scope.$apply(function() {
            $scope.showLogin = false;
        })

    })

    $('.menu').on('click', function() {

        var ulElement = $('body').find('.ulTablet');
        if (!$(this).hasClass('activeMenu')) {
            ulElement.slideDown();
            $(this).addClass('activeMenu');
        }

        else{
            ulElement.slideUp();
            $(this).removeClass('activeMenu');
        }
    })
})
