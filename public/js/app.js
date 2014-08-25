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
        var headerHeight = $('header').css('height').replace('px', '') * 1;

        if (isNaN(headerHeight)) headerHeight = 0;

        if(target.length) {
          $('html,body').animate({scrollTop:target.offset().top - headerHeight},1000);
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

  $('#contact-form form').validate({ errorElement: 'span'});
  $('#subscribe-form').validate({ errorElement: 'span'});

  
  // Function to create the google map in the contact page
  function initialize() {
    var map_canvas = document.getElementById('map');

    var latlng = new google.maps.LatLng(51.2374507,-0.5300000);
    
    var map_options = {
      zoom: 15,
      center: latlng,
      scrollwheel: false,
      scaleControl: false,
      streetViewControl: false,
      draggable: true, 
      mapTypeControl: false,
      zoomControl: false,
      panControl: false
    }
    
    var map = new google.maps.Map(map_canvas, map_options)

    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      icon: 'public/images/marker.png'
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});