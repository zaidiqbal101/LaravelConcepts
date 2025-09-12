<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ADS extends Model
{
    protected $fillable = [
    'stock_name',
    'open',
    'close',
    'High',
    'Low',
];
    protected $table="ads";
}
