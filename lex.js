/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */

var app = angular.module('WebApp', ['ngRoute']);

    /**
     * Configure the Routes
     */
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        // Pages
        .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
        .when("/practice_areas", {templateUrl: "partials/practice_areas.html", controller: "PageCtrl"})
        .when("/our_team_home", {templateUrl: "partials/our_team_home.html", controller: "teamHomeCtrl"})
        .when("/our_team_item", {templateUrl: "partials/our_team_item.html", controller: "teamHomeCtrl"})
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

	app.controller("teamHomeCtrl", function ($scope) {
		var countries = [
            {countryName: "USA",
                profiles: [
        	        {position:  1,
        	        profileName: "Lucius SMEJDA",
        	        profileTitle: "Principal",
        	        profileURL: "Lucius_SMEJDA",
        	        profileImgExt: "jpg"},
        	        {position: 2,
        	        profileName: "Joseph B. McFARLAND",
        	        profileTitle: "Of Counsel",
        	        profileURL: "Joseph_B._McFARLAND",
        	        profileImgExt: "jpg"},
            	    {position: 3,
        	        profileName: "Antonio R. ZAMORA",
        	        profileTitle: "Of Counsel",
        	        profileURL: "Antonio_R._ZAMORA",
        	        profileImgExt: "jpg"},
            	    {position: 4,
        	        profileName: "Elke ROLFF",
        	        profileTitle: "Of Counsel",
        	        profileURL: "Elke_ROLFF",
        	        profileImgExt: "jpg"},
            	    {position: 5,
        	        profileName: "Maxim ISTOMIN",
        	        profileTitle: "Of Counsel",
        	        profileURL: "Maxim_ISTOMIN",
        	        profileImgExt: "jpg"},
            	    {position: 6,
        	        profileName: "Susanne LEONE",
        	        profileTitle: "Jurist",
        	        profileURL: "Susanne_LEONE",
        	        profileImgExt: "jpg"},
            	    {position: 7,
        	        profileName: "Evgeny V. GOLOVANOV",
        	        profileTitle: "Jurist",
        	        profileURL: "Evgeny_V._GOLOVANOV",
        	        profileImgExt: "jpg"}
		        ]
            },
            {countryName: "International",
                profiles: [
        	        {position: 1,
        	        profileName: "Jacques ETHIER",
        	        profileTitle: "Canada",
        	        profileURL: "Jacques_ETHIER",
        	        profileImgExt: "jpg"},
        	        {position: 2,
        	        profileName: "Eric J.P. CITREY",
        	        profileTitle: "France",
        	        profileURL: "Eric_J.P._CITREY",
        	        profileImgExt: "jpg"},
            	    {position: 3,
        	        profileName: "Oliver HANCE",
        	        profileTitle: "Belgium & Luxemburg",
        	        profileURL: "Oliver_HANCE",
        	        profileImgExt: "jpg"},
            	    {position: 4,
        	        profileName: "Aleksandr SMIRNOV",
        	        profileTitle: "Russia",
        	        profileURL: "Aleksandr_SMIRNOV",
        	        profileImgExt: "jpg"},
            	    {position: 5,
        	        profileName: "Vladimir A. TROITSKIY",
        	        profileTitle: "Russia",
        	        profileURL: "Vladimir_A._TROITSKIY",
        	        profileImgExt: "jpg"},
            	    {position: 6,
        	        profileName: "Carlos AUD SOBRINHO",
        	        profileTitle: "Brazil",
        	        profileURL: "Carlos_AUD_SOBRINHO",
        	        profileImgExt: "jpg"},
            	    {position: 7,
        	        profileName: "Eric VIGNERON",
        	        profileTitle: "Dominican Republic",
        	        profileURL: "Eric_VIGNERON",
        	        profileImgExt: "png"}
		        ]
		    }
		];
		$scope.countries = countries;
	});


//
// /**
//  * Controls the Blog
//  */
// app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
//   console.log("Blog Controller reporting for duty.");
// });
//
// /**
//  * Controls all other Pages
//  */
// app.controller('PageCtrl', function (/* $scope, $location, $http */) {
//   console.log("Page Controller reporting for duty.");
//
//   // Activates the Carousel
//   $('.carousel').carousel({
//     interval: 5000
//   });
//
//   // Activates Tooltips for Social Links
//   $('.tooltip-social').tooltip({
//     selector: "a[data-toggle=tooltip]"
//   })
// });



  // JQuery code

$(window).on('scroll', function(){
    var slideHeight = ('50');
	if( $(window).scrollTop()>slideHeight){
		$('.navbar').removeClass('noscroll');
	} else {
		$('.navbar').addClass('noscroll');
	}
});

$('.dropdown-toggle').click(function() {
    var location = $(this).attr('href');
    window.location.href = location;
    return false;
});




