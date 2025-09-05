<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Http\Request;

class HomeController extends Controller
{
   public function index(){
    return Inertia::render('Page1');
   }
   public function index1(){
    return Inertia::render('Page2');
   }
   public function UserList(){
      $users=User::all();
      return Inertia::render('UserList',[
       'users'=>$users
      ]);
   }
}
