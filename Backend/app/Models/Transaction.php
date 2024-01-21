<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'details',
        'status',
        'timestamp',
        'price',
        'dest_id',
        'start_date',
        'end_date',
    ];

    public function user(): BelongsTo{
        return $this->belongsTo(User::class);
    }

    public function destination(): BelongsTo{
        return $this->belongsTo(Destination::class);
    }

    public function fleet(): HasManyThrough{
        return $this->hasManyThrough(Fleet::class, 'trans_fleets', 'transaction_id', 'fleet_id');
    }
}
