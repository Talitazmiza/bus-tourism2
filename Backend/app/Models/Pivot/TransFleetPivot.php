<?php

namespace App\Models\Pivot;

use App\Models\Fleet;
use App\Models\Transaction;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TransFleetPivot extends Model
{
    use HasFactory;

    public function transaction(): BelongsTo {
        return $this->belongsTo(Transaction::class);
    }

    public function fleet(): BelongsTo {
        return $this->belongsTo(Fleet::class);
    }
}
