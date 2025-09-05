<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;     


use Illuminate\Foundation\Application;                                                                          
use Illuminate\Support\Facades\Route;                                                                           
use Inertia\Inertia;                                                                            

// Route::get('/',function(){
//     return Inertia::render('Page1');
// });
Route::get('/',[HomeController::class,'index']);
Route::get('/page2',[HomeController::class,'index1']);
Route::get('/UserList',[HomeController::class,'UserList']);