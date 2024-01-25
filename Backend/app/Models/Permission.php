<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Permission extends Model
{
    use HasFactory;

    protected $fillable = [
        'perm_name',
    ];

    public function role(): HasManyThrough {
        return $this->hasManyThrough(Role::class, 'role_perms', 'perm_id', 'role_id');
    }
}
