<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCnabsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cnabs', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('tipo');
            $table->foreign('tipo')->references('id')->on('tipos_transacoes');

            $table->string('data', 8);
            $table->string('valor', 10);
            $table->string('cpf', 11);
            $table->string('cartao', 12);
            $table->string('hora', 6);
            $table->string('donoLoja', 14);
            $table->string('nomeLoja', 19);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cnabs');
    }
}
