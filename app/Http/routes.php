<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'PageController@index');
Route::get('/what', 'PageController@what');
Route::get('/we', 'PageController@we');
Route::get('/you', 'PageController@you');
Route::get('/contact', 'PageController@contact');
Route::post('/contact', 'ContactController@store');