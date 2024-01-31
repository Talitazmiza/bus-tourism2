<?php

namespace App\Http\Controllers;

use App\Http\Requests\FleetCreateRequest;
use App\Http\Resources\FleetResource;
use App\Models\Fleet;
use Illuminate\Http\Request;

class FleetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $fleet = Fleet::all();

        if (is_null($fleet)) {
            return response()->json(['message' => 'Fleet Not Found'], 404);
        }

        return FleetResource::collection($fleet);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FleetCreateRequest $request)
    {
        $fleet = Fleet::create($request->validated());

        if (!$fleet) {
            return response()->json(['message' => 'Failed to create the fleet'], 500);
        }

        return new FleetResource($fleet);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $fleet = Fleet::findOrFail($id);

        if (is_null($fleet)) {
            return response()->json(['message' => 'Fleet Not Found'], 404);
        }

        return new FleetResource($fleet);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FleetCreateRequest $request, int $id)
    {
        $fleet = Fleet::findOrFail($id);

        if (is_null($fleet)) {
            return response()->json(['message' => 'Fleet Not Found'], 404);
        }

        if (!$fleet->update($request->validated())) {
            return response()->json(['message' => 'Failed to create the fleet'], 500);
        }

        return new FleetResource($fleet);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $fleet = Fleet::findOrFail($id);

        if (is_null($fleet)) {
            return response()->json(['message' => 'Fleet Not Found'], 404);
        }

        if (!$fleet->delete()) {
            return response()->json(['message' => 'Failed to create the fleet'], 500);
        }

        return response()->json(['message' => 'Fleet has been deleted'], 200);
    }
}
