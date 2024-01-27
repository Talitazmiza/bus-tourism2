<?php

namespace App\Http\Controllers;

use App\Http\Requests\PermissionCreateRequest;
use App\Http\Requests\PermissionUpdateRequest;
use App\Http\Resources\PermissionResource;
use App\Models\Permission;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $perm = Permission::all();

        if (is_null($perm)) {
            return response()->json(['message' => 'Permission Not Found'], 404);
        }

        return PermissionResource::collection($perm);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PermissionCreateRequest $request)
    {
        $perm = Permission::create($request->validated());

        if (!$perm) {
            return response()->json(['message' => 'Failed to create the permission'], 500);
        }

        return new PermissionResource($perm);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $perm = Permission::findOrFail($id);

        if (is_null($perm)) {
            return response()->json(['message' => 'Permission Not Found'], 404);
        }

        return new PermissionResource($perm);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PermissionUpdateRequest $request, int $id)
    {
        $perm = Permission::findOrFail($id);

        if (is_null($perm)) {
            return response()->json(['message' => 'Permission Not Found'], 404);
        }

        $perm->update($request->validated());

        return new PermissionResource($perm);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $perm = Permission::findOrFail($id);

        $perm->delete();

        if (is_null($perm)) {
            return response()->json(['message' => 'Permission Not Found'], 404);
        }

        if (!$perm) {
            return response()->json(['message' => 'Failed to delete the permission'], 500);
        }

        return response()->json(['message' => 'Permission has been deleted'], 200);
    }
}
