angular.module('main.controllers', [])


.controller('cardCtrl', function($scope, $rootScope, cardService, cardService2) {
  $scope.allCards = cardService.all();
  $scope.showSubheader = true;
  
$scope.cardReturn = function() {
    window.history.back();
    return true;
  };



  $scope.cardClick = function(allCards, num) {
    headGet='allCards.head'+num;
    var headCard = 'eval(headGet)';
    $rootScope.headCard = eval(headCard);

    contentGet='allCards.content'+num;
    var contentCard = 'eval(contentGet)';
    $rootScope.contentCard = eval(contentCard);

    contentGetB='allCards.contentB'+num;
    var contentCardB = 'eval(contentGetB)';
    $rootScope.contentCardB = eval(contentCardB);

    footGet='allCards.foot'+num;
    var footCard = 'eval(footGet)';
    $rootScope.footCard = eval(footCard);

    colorGet='allCards.colorDef';
    var colorCard = 'eval(colorGet)';
    $rootScope.colorCard = eval(colorCard);

    fabricGet='allCards.fabricDef';
    var fabricCard = 'eval(fabricGet)';
    $rootScope.fabricCard = eval(fabricCard);

    cardsymbolGet='allCards.cardsymbol'+num;
    var cardsymbolCard = 'eval(cardsymbolGet)';
    $rootScope.cardsymbolCard = eval(cardsymbolCard);
    


    // console.log(allCards.colorDef);
    // console.log(contentCard);
    // console.log(contentCardB);
    // console.log(footCard);

    window.location = '#/tab2/cardView';
    
    return true;

  };


})
.controller('groupCtrl', function($scope, cardService) {
  $scope.allCards = cardService.all();
})
.controller('settingsCtrl', function($scope, cardService) {

})
.controller('cardView', function($scope, $rootScope, cardService) {

})


     


.controller('AppCtrl', function($scope, $ionicActionSheet) {


  //Theme switch
  $scope.stylesheets = [
  {
    href: 'theme',
  }
  ];
  $scope.theme0 = function(item) {
    $scope.stylesheets = [
      { href: 'theme',}
    ];
  }
  $scope.theme1 = function(item) {
    $scope.stylesheets = [
      { href: 'theme1',}
    ];
  }
  $scope.theme2 = function(item) {
    $scope.stylesheets = [
      { href: 'theme2',}
    ];
  }
  $scope.theme3 = function(item) {
    $scope.stylesheets = [
      { href: 'theme3',}
    ];
  }
  $scope.theme4 = function(item) {
    $scope.stylesheets = [
      { href: 'theme4',}
    ];
  }
  $scope.theme5 = function(item) {
    $scope.stylesheets = [
      { href: 'theme5',}
    ];
  }
  //Theme switch end



  $scope.leftButtons = [
  {
    type: 'button-clear',
    content: '<i class="icon ion-arrow-left-c"></i>',
    tap: function(e) {
    window.history.back();
    }
  }
  ];
  $scope.addButtons = [
  {
    type: 'button-clear',
    content: '<i class="ion-plus-circled"></i>',
    tap: function(e) {
    
    }
  }
  ];
  $scope.rightButtons = [
  {
    type: 'button-clear',
    content: '<i class="icon ion-more"></i>',
    tap: function(e) {
     $ionicActionSheet.show({

      buttons: [
      { text: 'Background' },
      { text: 'Use of the Cards' },
      { text: 'Theme' },
      ],

      cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
        return true;
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        if(index=='0') {
         window.location.href="#/tab2/settingsBackground";
       }
       else 
        if(index=='1') {
          window.location.href="#/tab2/settingsUse";
        }
        else {
          window.location.href="#/tab2/settingsTheme";
        }
        return true;
      }
    });
   }
 }
 ]
});
