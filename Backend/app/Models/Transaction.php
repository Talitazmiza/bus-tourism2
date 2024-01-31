<?php

namespace App\Models;

use App\Models\Pivot\TransFleetPivot;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'details',
        'status',
        'price',
        'created_by',
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

    public function fleet(): BelongsToMany {
        return $this->belongsToMany(Fleet::class, TransFleetPivot::class, 'transaction_id', 'fleet_id');
    }
}
