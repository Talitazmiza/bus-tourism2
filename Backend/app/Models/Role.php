<?php

namespace App\Models;

use App\Models\Pivot\RolePermissionPivot;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Role extends Model
{
    use HasFactory;

    protected $fillable = [
        'role_name',
    ];

//    public function hasPermissionTo(string $permissionName): {
//
//    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function permission(): BelongsToMany {
        return $this->belongsToMany(Permission::class, RolePermissionPivot::class, 'role_id', 'permission_id');
    }

}
