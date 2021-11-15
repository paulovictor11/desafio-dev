<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\CNAB;
use App\Models\Tipos;
use Faker\Generator as Faker;

$factory->define(CNAB::class, function (Faker $faker) {

    $tipo = factory(Tipos::class)->create();

    return [
        "tipo" => $tipo->id,
        "data" => $faker->date('Ymd'),
        "valor" => $faker->randomNumber(),
        "cpf" => '11122233344',
        "cartao" => $faker->creditCardNumber(),
        "hora" => $faker->time('His'),
        "donoLoja" => $faker->name(),
        "nomeLoja" => $faker->company()
    ];
});
