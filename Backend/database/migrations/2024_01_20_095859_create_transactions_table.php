<?php

use App\Models\Destination;
use App\Models\User;
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
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->text('details')->nullable();
            $table->enum('status',['completed', 'on_progress', 'drafted'])->default('drafted');
            $table->integer('price');
            $table->foreignIdFor(Destination::class, 'dest_id');
            $table->date('start_date');
            $table->date('end_date');
            $table->foreignIdFor(User::class, 'created_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
