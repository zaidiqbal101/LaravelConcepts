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
}
