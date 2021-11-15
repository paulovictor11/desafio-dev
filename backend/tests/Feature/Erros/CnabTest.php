<?php

namespace Tests\Feature\Erros;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CnabTest extends TestCase
{
    use DatabaseMigrations, WithFaker;

    public function testGetOneCnab()
    {
        $response = $this->get('/api/cnabs/1');

        $response->assertStatus(404);
        $response->assertJsonStructure([
            'status', 'message'
        ]);
        $response->assertJson([
            'status' => 'not found'
        ]);
    }

    public function testPutOneCnab()
    {
        $response = $this->put('/api/cnabs/1', []);

        $response->assertStatus(400);
        $response->assertJsonStructure([
            'status', 'message'
        ]);
        $response->assertJson([
            'status' => 'error'
        ]);
    }

    public function testDeleteOneCnab()
    {
        $response = $this->delete('/api/cnabs/1');
        
        $response->assertStatus(400);
        $response->assertJsonStructure([
            'status', 'message'
        ]);
        $response->assertJson([
            'status' => 'error'
        ]);
    }
}
