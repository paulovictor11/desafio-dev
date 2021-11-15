<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Tipos;
use Faker\Generator as Faker;

$factory->define(Tipos::class, function (Faker $faker) {
    return [
        "descricao" => $faker->sentence(),
        "natureza"  => $faker->word(),
        "sinal"     => $faker->randomElement(['+', '-']),
    ];
});
