<?php

namespace Tests\Feature\Errors;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TiposTest extends TestCase
{
    use DatabaseMigrations, WithFaker;

    public function testPostOneTipo()
    {
        $response = $this->post('/api/tipos', []);

        $response->assertStatus(400);
        $response->assertJsonStructure([
            'status', 'message'
        ]);
        $response->assertJson([
            'status'  => 'error'
        ]);
    }

    public function testGetOneTipo()
    {
        $response = $this->get('/api/tipos/1');

        $response->assertStatus(404);
        $response->assertJsonStructure([
            'status', 'message'
        ]);
        $response->assertJson([
            'status'  => 'not found'
        ]);
    }

    public function testPutOneTipo()
    {
        $response = $this->put('/api/tipos/1');

        $response->assertStatus(400);
        $response->assertJsonStructure([
            'status', 'message'
        ]);
        $response->assertJson([
            'status' => 'error'
        ]);
    }

    public function testDeleteOneTipo()
    {
        $response = $this->delete('/api/tipos/1');
        
        $response->assertStatus(400);
        $response->assertJsonStructure([
            'status', 'message'
        ]);
        $response->assertJson([
            'status' => 'error'
        ]);
    }
}
