/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('WebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/practice_areas", {templateUrl: "partials/practice_areas.html", controller: "PageCtrl"})
    .when("/our_team", {templateUrl: "partials/our_team.html", controller: "PageCtrl"})
    .when("/links_events", {templateUrl: "partials/links_events.html", controller: "PageCtrl"})
    .when("/practice_areas", {templateUrl: "partials/practice_areas.html", controller: "PageCtrl"})
    .when("/the_firm", {templateUrl: "partials/the_firm.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

$(window).on('scroll', function(){
    var slideHeight = $('.banner').outerHeight();
    var slideHeight = slideHeight - ($('.nav').outerHeight());
    var slideHeight = ('50');
	if( $(window).scrollTop()>slideHeight){
		$('.navbar').addClass('scrolled');
	} else {
		$('.navbar').removeClass('scrolled');
	}
});

$('.dropdown-toggle').click(function() {
    var location = $(this).attr('href');
    window.location.href = location;
    return false;
});

