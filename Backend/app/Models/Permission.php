<?php

namespace App\Models;

use App\Models\Pivot\RolePermissionPivot;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Permission extends Model
{
    use HasFactory;

    protected $fillable = [
        'perm_name',
    ];

    public function role(): BelongsToMany {
        return $this->belongsToMany(Role::class, RolePermissionPivot::class, 'permission_id', 'role_id');
    }
}
