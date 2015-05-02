var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	mix
	.styles(['touch.css'], 'public/css/touch.css')
	.styles(['ie9.css'], 'public/css/ie9.css')
	.scripts(['vendor/classList.js'], 'public/js/classList.js')
	.scripts(['vendor/waypoints.js'], 'public/js/waypoints.js')
	.styles([
		'vendor/z-nav.css',
		'style.css'
	], 'public/css/all.css')
	.scripts([
		'vendor/z-nav.js',
		'vendor/modernizr.js',
		'vendor/scrollTo.js',
		'vendor/raphael.js',
		'vendor/livicons.js',
		'vendor/inview.js',
		'script.js'
	], 'public/js/all.js')
	.version(['css/touch.css', 'css/ie9.css', 'css/all.css', 'js/waypoints.js', 'js/all.js']);
});
