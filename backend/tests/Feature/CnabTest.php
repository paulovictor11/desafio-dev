<?php

namespace Tests\Feature;

use App\Models\CNAB;
use App\Models\Tipos;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Tests\TestCase;

class CnabTest extends TestCase
{
    use DatabaseMigrations, WithFaker;

    public function testGetAllCnabs()
    {
        $response = $this->get('/api/cnabs');

        $response->assertStatus(200);
    }

    public function testPostOneCnab()
    {
        factory(Tipos::class, 9)->create();

        $testPath = public_path('uploads\CNAB.txt');
        $filePath = public_path('tests\CNAB.txt');

        File::copy($testPath, $filePath);

        $file = new UploadedFile($filePath, 'CNAB.txt', null, null, true);

        $response = $this->post('/api/cnabs', ['file' => $file]);

        $response->assertStatus(201);
        $response->assertJsonStructure([
            'status', 'message'
        ]);
        $response->assertJson([
            'status' => 'created'
        ]);
    }

    public function testGetOneCnab()
    {
        $cnab = factory(CNAB::class)->create();

        $response = $this->get('/api/cnabs/' . $cnab['id']);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'id', 'tipo', 'data', 'valor', 'cpf',
            'cartao', 'hora', 'donoLoja', 'nomeLoja'
        ]);
    }

    public function testPutOneCnab()
    {
        $cnab = factory(CNAB::class)->create();
        $data = ['donoLoja' => 'alterado'];

        $response = $this->put('/api/cnabs/' . $cnab['id'], $data);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status', 'message'
        ]);
        $response->assertJson([
            'status' => 'updated'
        ]);
    }

    public function testDeleteOneCnab()
    {
        $cnab = factory(CNAB::class)->create();

        $response = $this->delete('/api/cnabs/' . $cnab['id']);
        
        $response->assertStatus(200);
        $response->assertJsonStructure([
            'status', 'message'
        ]);
        $response->assertJson([
            'status' => 'deleted'
        ]);
    }
}
