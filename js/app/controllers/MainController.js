function MainController($scope) {

  $scope.contact = {
    name: 'Sarah',
    phone: '01234567890',
    email: 'sarah@email.com'
  };
};

angular
  .module('app')
  .controller('MainController', MainController);
