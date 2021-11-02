<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TiposSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tipos_transacoes')->insert([
            ['descricao' => 'Débito', 'natureza' => 'Entrada', 'sinal' => '+'],
            ['descricao' => 'Boleto', 'natureza' => 'Saída', 'sinal' => '-'],
            ['descricao' => 'Financiamento', 'natureza' => 'Saída', 'sinal' => '-'],
            ['descricao' => 'Crédito', 'natureza' => 'Entrada', 'sinal' => '+'],
            ['descricao' => 'Recebimento Empréstimo', 'natureza' => 'Entrada', 'sinal' => '+'],
            ['descricao' => 'Vendas', 'natureza' => 'Entrada', 'sinal' => '+'],
            ['descricao' => 'Recebimento TED', 'natureza' => 'Entrada', 'sinal' => '+'],
            ['descricao' => 'Recebimento DOC', 'natureza' => 'Entrada', 'sinal' => '+'],
            ['descricao' => 'Aluguel', 'natureza' => 'Saída', 'sinal' => '-'],
        ]);
    }
}
