
angular.module('main', ['ionic', 'main.services', 'main.controllers', 'main.directives'])



.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tab2', {
      url: "/tab2",
      abstract: true,
      templateUrl: "templates/tabs2.html"
    })

    .state('tab.card0', {
      url: '/card0',
      views: {
        'card-tab': {
          templateUrl: 'templates/card0.html',
          controller: 'cardCtrl',
        }
      }
    })
    .state('tab.card1', {
      url: '/card1',
      views: {
        'card-tab': {
          templateUrl: 'templates/card1.html',
          controller: 'cardCtrl',
        }
      }
    })
    .state('tab.card2', {
      url: '/card2',
      views: {
        'card-tab': {
          templateUrl: 'templates/card2.html',
          controller: 'cardCtrl',
        }
      }
    })

    .state('tab2.cardView', {
      url: '/cardView',
      views: {
        'card-tab2': {
          templateUrl: 'templates/cardView.html',
          controller: 'cardCtrl',
        }
      }
    })
    .state('tab2.settingsBackground', {
      url: '/settingsBackground',
      views: {
        'card-tab2': {
          templateUrl: 'templates/settingsBackground.html',
          controller: 'cardCtrl',
        }
      }
    })
    .state('tab2.settingsUse', {
      url: '/settingsUse',
      views: {
        'card-tab2': {
          templateUrl: 'templates/settingsUse.html',
          controller: 'cardCtrl',
        }
      }
    })
    .state('tab2.settingsTheme', {
      url: '/settingsTheme',
      views: {
        'card-tab2': {
          templateUrl: 'templates/settingsTheme.html',
          controller: 'cardCtrl',
        }
      }
    })


    .state('tab.group', {
      url: '/group',
      views: {
        'group-tab': {
          templateUrl: 'templates/group.html',
		  controller: 'cardCtrl',
        }
      }
    });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/card0');

});


