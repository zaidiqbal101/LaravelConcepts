<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request){
        $product=Product::all();

        $apiKey=$request->header('apiKey');
        if($apiKey!=='zaid@123'){
            return response()->json(['error'=>'Unauthorized'],401);
        }
        return response()->json($product);
    }

}
