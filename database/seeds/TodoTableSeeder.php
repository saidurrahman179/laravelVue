<?php

use Illuminate\Database\Seeder;

class TodoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$faker = Faker\Factory::create();

	    for($i = 0; $i < 10; $i++) {
	        App\Todo::create([
	            'title' => $faker->sentence,
	            'description' => $faker->paragraph
	        ]);
	    }
    }
}
