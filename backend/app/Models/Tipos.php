<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tipos extends Model
{
    protected $table = 'tipos_transacoes';
    protected $fillable = [
        'descricao', 'natureza', 'sinal'
    ];

    public function cnabs() {
        return $this->hasMany(CNAB::class);
    }
}
