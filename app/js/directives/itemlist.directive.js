app.directive('itemContainer', function() {
  return {
    restrict: 'AE',
    scope: true,
    controller: function($scope) {

    },
    link: function(scope, $element, attrs) {
      var $dealName = $element.find('.dealName');
      scope.type = attrs.type;
      scope.services = attrs.services;
      $dealName.click(function() {
        var listDetailContainer = $element.find('.listDetail'),
            numberOfServices = $element.find('.numberOfServices');

        numberOfServices.toggle();
        listDetailContainer.slideToggle();
      });
    },

    templateUrl: 'app/views/itemlistView.html'
  }
})