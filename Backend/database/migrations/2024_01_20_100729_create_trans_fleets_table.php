<?php

use App\Models\Fleet;
use App\Models\Transaction;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('trans_fleets', function (Blueprint $table) {
            $table->foreignIdFor(Transaction::class, 'transaction_id');
            $table->foreignIdFor(Fleet::class, 'fleet_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trans_fleets');
    }
};
