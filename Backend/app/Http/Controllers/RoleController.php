<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleCreateRequest;
use App\Http\Resources\RoleResource;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $role = Role::all();

        return RoleResource::collection($role);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RoleCreateRequest $request)
    {
        $role = Role::create($request->validated());

        return new RoleResource($role);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $role = Role::findOrFail($id);

        return new RoleResource($role);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RoleCreateRequest $request, int $id)
    {
        $role = Role::findOrFail($id);

        $role->update($request->validated());

        return new RoleResource($role);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $role = Role::findOrFail($id);

        $role->delete();

        if (is_null($role)) {
            return response()->json(['message' => 'Role Not Found'], 404);
        }

        if (!$role) {
            return response()->json(['message' => 'Failed to delete the role'], 500);
        }

        return response()->json(['message' => 'Role has been deleted'], 200);
    }
}
