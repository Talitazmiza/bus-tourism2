<?php

namespace App\Http\Controllers;

use App\Http\Requests\TransactionCreateRequest;
use App\Http\Resources\TransactionResource;
use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $transaction = Transaction::all();

        if (is_null($transaction)) {
            return response()->json(['message' => 'Transaction Not Found'], 404);
        }

        return TransactionResource::collection($transaction);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TransactionCreateRequest $request)
    {
//         dd('hello', $request->all());
         $transaction = Transaction::create($request->validated());

        if (!$transaction) {
            return response()->json(['message' => 'Failed to create the transaction'], 500);
        }

         return new TransactionResource($transaction);
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $transaction = Transaction::findOrFail($id);

        if (is_null($transaction)) {
            return response()->json(['message' => 'Transaction not foun'], 500);
        }

        return new TransactionResource($transaction);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TransactionCreateRequest $request, int $id)
    {
        $transaction = Transaction::findOrFail($id);

        if (is_null($transaction)) {
            return response()->json(['message' => 'Transaction not foun'], 500);
        }

        if (!$transaction->update($request->validated())) {
            return response()->json(['message' => 'Failed to update the transaction'], 500);
        }

        return new TransactionResource($transaction);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $transaction = Transaction::findOrFail($id);

        if (is_null($transaction)) {
            return response()->json(['message' => 'Transaction not foun'], 500);
        }

        if (!$transaction->delete()) {
            return response()->json(['message' => 'Failed to delete the transaction'], 500);
        }

        return response()->json(['message' => 'Transaction has been deleted'], 200);
    }
}
