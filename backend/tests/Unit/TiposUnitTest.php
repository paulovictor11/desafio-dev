<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class TiposUnitTest extends TestCase
{
    use DatabaseMigrations;

    public function testIfDatabaseTableTiposExists()
    {
        $this->assertTrue(Schema::hasTable('tipos_transacoes'));
    }

    public function testIfTableTiposHasColumns()
    {
        $this->assertTrue(Schema::hasColumns(
            'tipos_transacoes',
            [
                'descricao', 'natureza', 'sinal'
            ]
        ));
    }
}
