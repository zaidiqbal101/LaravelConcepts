<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RechargeController extends Controller
{
    public function recharge(Request $request)
    {
        $request->validate([
            'mobile' => 'required|digits:10',
            'amount' => 'required|numeric|min:1',

        ]);

        $mobile = $request->mobile;
        $amount = $request->amount;
        if($amount>1000){
            return response()->json([
                'status'=>'failed',
                'message'=>'Insufficient funds ask operator to top up',
            ],400);
        }
        if($amount<10){
            return response()->json([
                'status'=>'failed',
                'message'=>'Minimum of 10 rupees recharge plan',
            ],400);
        }
        return response()->json([
            'status'  => 'success',
            'message' => "Recharge of ₹{$amount} for number {$mobile} is successful."
        ], 200);
    }
}
