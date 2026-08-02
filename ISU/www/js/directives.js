angular.module('main.directives', ['ngAnimate'])

.directive('box', function($ionicGesture) {
	return {
		restrict: 'C',

		link: function($scope, $element, $attr) {

			var o = function(type, d) {
              // if (d[2] =='right' || d[2]=='left') {
                // console.log("swiped "+d[2]);
                window.history.back();
              // }
          }; 
      



      // var dragGesture = Gesture.on('drag', dragFn, $element);
      // var dragRightGesture = $ionicGesture.on('dragright', dragFn, $element);
      // var dragLeftGesture = $ionicGesture.on('dragleft', dragFn, $element);

    // var dragRightFn = function(e) {
    // 	o('dragright', [e.gesture.touches[0].pageX, e.gesture.touches[0].pageY]);   
    // };
    // var dragRightGesture = $ionicGesture.on('dragright', dragRightFn, $element);

    // var dragLeftFn = function(e) {
    // 	o('dragleft', [e.gesture.touches[0].pageX, e.gesture.touches[0].pageY]);   
    // };
    // var dragLeftGesture = $ionicGesture.on('dragleft', dragLeftFn, $element);

    // var swipeFn = function(e) {
    // 	o('swipe', [e.gesture.touches[0].pageX, e.gesture.touches[0].pageY, e.gesture.direction]);   
    // };
    // var swipeGesture = $ionicGesture.on('swipe', swipeFn, $element);

    var dblFn = function(e) {
    	o('doubletap', [e.gesture.touches[0].pageX, e.gesture.touches[0].pageY]);
    };
    var dblTapGesture = $ionicGesture.on('doubletap', dblFn, $element);

    $scope.$on('$destroy', function () {
    	  // $ionicGesture.off(dragLeftGesture, 'dragleft', dragFn);
       //    $ionicGesture.off(dragRightGesture, 'dragright', dragFn);
    	// $ionicGesture.off(dragRightGesture, 'dragright', dragRightFn);
    	// $ionicGesture.off(dragLeftGesture, 'dragleft', dragLeftFn);
    	$ionicGesture.off(dblTapGesture, 'doubletap', dblFn);
    });
}
};
});