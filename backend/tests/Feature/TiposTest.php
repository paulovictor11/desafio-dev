<?php

namespace Tests\Feature;

use App\Models\Tipos;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TiposTest extends TestCase
{
    use DatabaseMigrations, WithFaker;

    public function testGetAllTipos()
    {
        $response = $this->get('/api/tipos/');

        $response->assertStatus(200);
    }

    public function testPostOneTipo()
    {
        $tipo = factory(Tipos::class)->create()->toArray();

        $response = $this->post('/api/tipos', $tipo);

        $response->assertStatus(201);
        $response->assertJsonStructure([
            'status', 'message'
        ]);
        $response->assertJson([
            'status'  => 'created'
        ]);
    }

    public function testGetOneTipo()
    {
        $tipo = factory(Tipos::class)->create();

        $response = $this->get('/api/tipos/' . $tipo['id']);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'id', 'descricao', 'natureza', 'sinal'
        ]);
    }

    public function testPutOneTipo()
    {
        $tipo = factory(Tipos::class)->create();
        $data = ['descricao' => 'alterado'];

        $response = $this->put('/api/tipos/' . $tipo['id'], $data);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status', 'message'
        ]);
        $response->assertJson([
            'status' => 'updated'
        ]);
    }

    public function testDeleteOneTipo()
    {
        $tipo = factory(Tipos::class)->create();

        $response = $this->delete('/api/tipos/' . $tipo['id']);
        
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status', 'message'
        ]);
        $response->assertJson([
            'status' => 'deleted'
        ]);
    }
}
