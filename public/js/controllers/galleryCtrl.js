function GalleryCtrl($scope) {
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
}