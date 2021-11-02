<?php

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;

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

Route::middleware([])->group(function (Router $router) {
    $router->apiResource('tipos', 'TipoController');
    $router->apiResource('cnabs', 'CnabController');
    $router->get('/cnab/operacao', 'CnabController@byOperation');
});
