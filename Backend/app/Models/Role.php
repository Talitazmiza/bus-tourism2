<?php

namespace App\Models;

use App\Models\Pivot\RolePermissionPivot;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Role extends Model
{
    use HasFactory;

    protected $fillable = [
        'role_name',
    ];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function permission(): HasManyThrough {
        return $this->hasManyThrough(Permission::class, RolePermissionPivot::class, 'role_id', 'id','permission_id', 'permission_id');
    }
}
