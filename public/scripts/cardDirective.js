angular.module('CardsAgainstAssembly')
  .directive('wdiCard', wdiCard);

  function wdiCard(){
  	console.log('wdiCard called');
  	var directive = {
  		restrict: 'E',
  		replace: true,
  		templateUrl: 'templates/cardDirective.html',
      transclude: true,
  		// template: "<p>I'm replacing</p>"
  	};
  	return directive;
  }
