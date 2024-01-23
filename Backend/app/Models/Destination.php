<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Destination extends Model
{
    use HasFactory;

    protected $fillable = [
        'dest_name',
        'dest_image',
        'estimated_price',
        'estimated_trip',
    ];

    public function transaction(): HasMany {
        return $this->hasMany(Transaction::class);
    }
}
