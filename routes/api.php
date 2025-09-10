<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\RechargeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ADSController;

Route::get('/novatech_employees',function(){
    return response()->json([
        [
        'name'=>'Zaid Iqbal',
        'role'=>'Software Developer',
        'age' =>'22',
        ],
        [
        'name'=>'Geetanjali Sharma',
        'role'=>'Frontend Developer',
        'age'=>'23',    
        ],
        [
        'name'=>'Shahid',
        'role'=>'TL',
        'age'=>'26',
        ],
        [
        'name'=>'Punit Nigam',
        'role'=>'Intern',
        'age'=>'21',
        ]
    ]);
});

Route::get('/team_details',[TeamController::class,'names']);

Route::middleware('apikey')->group(function () {
Route::get('/payout',[TeamController::class,'payout']);
});

Route::post('/recharge',[RechargeController::class,'recharge']);

Route::get('/product',[ProductController::class,'index']);
