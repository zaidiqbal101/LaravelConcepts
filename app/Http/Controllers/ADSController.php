<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\ADS;
use Illuminate\Http\Request;

class ADSController extends Controller
{
    public function ADS(){
        $data=ADS::all();
        return Inertia::render('ADS',[
            'data'=>$data
        ]);
    }
    public function store(Request $request){
        $request->validate([
            'stock_name'=>'required|string|max:255',
            'open'=>'required|numeric',
            'close'=>'required|numeric',
            'High'=>'required|numeric',
            'Low'=>'required|numeric'
        ]);

    ADS::create([
        'stock_name'=>$request->stock_name,
        'open'=>$request->open,
        'close'=>$request->close,
        'High'=>$request->High,
        'Low'=>$request->Low,
    ]);    
    return redirect()->back();
    }
    public function destroy($id){
        $ad=ADS::findOrFail($id);
        $ad->delete();
}
}
