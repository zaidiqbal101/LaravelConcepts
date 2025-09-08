<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TeamController extends Controller
{
    public function names(){
        $employees=[
            [
                'id'=>'1',
                'name'=>'ZAID IQBAL',
                'role'=>'SOFTWARE DEVELOPER',
                  'contact'=>'----',
            ],
            [
                'id'=>'2',
                'name'=>'GEETANJALI SHARMA',
                'role'=>'FRONTEND DEVELOPER',
                'contact'=>'----',
            ],
            [
                'id'=>'3',
                'name'=>'SHAHID KHAN',
                'role'=>'TEAM LEAD',
                'contact'=>'----',
            ],
            [
                'id'=>'4',
                'name'=>'ALQUAMA ANSARI',
                'role'=>'Backend Developer',
                'contact'=>'----',
            ],
            [   'id'=>'5',
                'name'=>'HIRA LAL',
                'role'=>'Backend Developer',
                'contact'=>'----,'
            ] 
        ];
        return response()->json($employees);
    }
    public function payout(){
        $payout=[
            ['Transaction_id'=>'0001','Amount'=>'Rs 120000'],
            ['Transaction_id'=>'0002','Amount'=>'Rs 380000'],
            ['Transaction_id'=>'0003','Amount'=>'Rs 650000'],
            ['Transaction_id'=>'0004','Amount'=>'Rs 105000'],
            ['Transaction_id'=>'0005','Amount'=>'Rs 850000'],
        ];
        return response()->json($payout);
    }
    
}
