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

use App\Categories;
use App\User;
use Illuminate\Http\Response;

Route::get('/', function () {return view('index');});

Route::get('/api/getCategories', function () {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'); // allow certain headers
    return $content = (new Categories)->getCategories();
});

Route::get('/api/getUsersByCategoriesId/{id}', function ($id) {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'); // allow certain headers
    return $content = (new User)->getUsersByCategoriesId($id);
});
