<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::query()->insert([
            [
                'id' => 1,
                'name' => 'busOwner',
                'email' => 'busowner@gmail.com',
                'role_id' => 2,
                'password' => 'busOwner@123'
            ]
        ]);

    }
}
