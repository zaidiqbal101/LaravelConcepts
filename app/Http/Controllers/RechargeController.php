<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RechargeController extends Controller
{
   public function recharge(Request $request){
    $request->validate([
        'mobile'=>'required|digits:10',
        'amount'=>'required|numeric|min:1'
    ]);
    $mobile=$request->mobile;
    $amount=$request->amount;
    if($amount<10){
        return response()->json([
        'status'=>'failed',
        'message'=>'Recharge amount should be more than 10 '
        ],400);
    }
    if($amount>1000){
        return response()->json([
            'status'=>'failed',
            'message'=>'Recharge upto 1000 only'
        ],400);
    }
       return response()->json([
        'status'=>'success',
        'message'=>"Recharge of {$amount} is successful for mobile number {$mobile}"
       ],200    );
   }

}
