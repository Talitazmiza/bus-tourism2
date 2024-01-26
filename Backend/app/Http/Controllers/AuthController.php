<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserCreateRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function store(UserCreateRequest $request) {
        $validated = $request->validated();

        $user = User::create($validated);

        if (!$user) {
            return response()->json(['message' => 'Failed to create the user'], 500);
        }

        return new UserResource($user);
    }
}
