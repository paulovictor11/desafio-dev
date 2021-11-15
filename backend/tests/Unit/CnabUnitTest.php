<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class CnabUnitTest extends TestCase
{
    use DatabaseMigrations;

    public function testIfDatabaseTableCnabsExists()
    {
        $this->assertTrue(Schema::hasTable('cnabs'));
    }

    public function testIfTableCnabsHasColumns()
    {
        $this->assertTrue(Schema::hasColumns(
            'cnabs',
            [
                'tipo', 'data', 'valor', 'cpf',
                'cartao', 'hora', 'donoLoja', 'nomeLoja'
            ]
        ));
    }
}
