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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FleetCreateRequest $request)
    {
//        dd('hello', $request->all());
        $fleet = Fleet::create($request->validated());

        return new FleetResource($fleet);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
