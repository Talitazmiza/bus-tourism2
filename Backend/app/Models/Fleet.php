<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Fleet extends Model
{
    use HasFactory;

    protected $fillable = [
        'fleet_name',
        'police_number',
        'capacity',
        'fleet_image',
        'in_service',
    ];

    public function user(): BelongsTo{
        return $this->belongsTo(User::class, 'created_by', 'user_id');
    }

    public function transaction(): HasManyThrough{
        return $this->hasManyThrough(Transaction::class, 'trans_fleets', 'fleet_id', 'transaction_id');
    }
}
