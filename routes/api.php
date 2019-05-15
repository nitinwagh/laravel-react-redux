<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::any('/register', 'Api\AuthController@register');
Route::any('/login', 'Api\AuthController@login')->name('login');
Route::resource('/users', 'Api\UserController');

Route::group(['middleware' => 'auth:api', 'namespace' => 'Api', ], function (){
    Route::any('/me', 'AuthController@me');
    Route::any('/refresh', 'AuthController@refresh');
    Route::any('/logout', 'AuthController@logout');

    // Route::resource('/users', 'UserController');
});
