'use strict';

var myapp = angular.module('heatWorks', []);

myapp.controller('GalleryCtrl', ['$scope', function ($scope) {
  $scope.thumbnails = [1, 2, 3, 4, 5];
  $scope.activeThumbnail = 1;
  
  $scope.changeImage = function (index) {
    $scope.activeThumbnail = index;
  };

  $scope.previousImage = function () {
    $scope.activeThumbnail--;
  };

  $scope.nextImage = function () {
    $scope.activeThumbnail++;
  };

  $scope.hoverIn = function(dot, gallery) {
    var selector = '.text-' + dot + '-gallery-' + gallery;
    var $gallery = $(selector);
    $gallery.addClass('current');
  };

  $scope.hoverOut = function(dot, gallery) {
    var selector = '.text-' + dot + '-gallery-' + gallery;
    var $gallery = $(selector);
    $gallery.removeClass('current');
  };
}]);

$(document).ready(function() {
  $(function() {
    $('.inner-link').click(function() {
      if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname) { 
        var target=$(this.hash);
        target=target.length?target:$('[name='+ this.hash.slice(1)+']');

        if(target.length) {
          $('html,body').animate({scrollTop:target.offset().top},1000);
          return false;
        }
      }
    });
  });
  $('#myModal').on('hide.bs.modal', function(e) { 
    var player=$(e.target).find('iframe'),
    vidSrc=player.prop('src');
    player.prop('src','');
    player.prop('src',vidSrc);
  });
});