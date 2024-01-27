<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserCreateRequest;
use App\Http\Resources\UserResource;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request) {
//        dd('hello', $request->all());
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string'],
            'password' => ['required'],
            'role_id' => [
                'required',
                Rule::exists(Role::class, 'id')
            ]
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => $request->role_id,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'User Registered Successfully',
            'data' => $user
        ]);

    }

    public function login(Request $request){
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $token = JWTAuth::attempt([
            'email' => $request->email,
            'password' => $request->password
        ]);

        if (empty($token)){
           return response()->json([
               'status' => false,
               'message' => 'Invalid Details'
           ]);
        }

        return response()->json([
            'status' => true,
            'message' => 'User Logged In Successfully',
            'token' =>  $token
        ]);
    }

     public function profile() {
        $userData = auth()->user();

        return response()->json([
            'status' => true,
            'message' => 'Profile Data',
            'data' => $userData
        ]);
     }

     public function refresh() {
        $newToken = auth()->refresh();

        return response()->json([
            'status' => true,
            'message' => "New Access Token",
            'token' => $newToken
        ]);
     }

    public function logout() {
        auth()->logout();

        return response()->json([
            'status' => true,
            'message' => "User Logged Out Successfully"
        ]);
    }
}
