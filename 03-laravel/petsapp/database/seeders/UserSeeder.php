<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = new User;
        $user->document  = 75000001;
        $user->fullname  = 'Mr robot';
        $user->gender    = 'Male';
        $user->birthdate = '1984-10-12';
        $user->phone     = 3205673456;
        $user->email     = 'admin@gmail.com';
        $user->password  = bcrypt('admin');
        $user->role      = 'Admin';
        $user->save();

        $user = new User;
        $user->document  = 75000002;
        $user->fullname  = 'Lara Croft';
        $user->gender    = 'Female';
        $user->birthdate = '1994-08-05';
        $user->phone     = 3209890976;
        $user->email     = 'lara@mail.com';
        $user->password  = bcrypt('12345');
        $user->save();

    }
}
