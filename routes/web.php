<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;     
use App\Http\Controllers\RechargeController; 
use App\Http\Controllers\ADSController;     

use Illuminate\Foundation\Application;                                                                          
use Illuminate\Support\Facades\Route;                                                                           
use Inertia\Inertia;                                                                            

Route::get('/',[HomeController::class,'index']);
Route::get('/UserList',[HomeController::class,'UserList']);
Route::delete('/users/{id}',[HomeController::class,'destroy']);
Route::post('/users',[HomeController::class,'store']);

Route::get('/apiwala',function(){
    return Inertia::render('Apiwala');
});
Route::get('/recharge', function() {
    return Inertia::render('Recharge');
});
Route::get('/table',function(){
    return Inertia::render('Table');
});
Route::post('/recharge', [RechargeController::class, 'recharge']);

Route::get('/ADS',[ADSController::class,'ADS']);)