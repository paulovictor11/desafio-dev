<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CNAB extends Model
{
    protected $table = 'cnabs';
    protected $fillable = [
        'tipo', 'data', 'valor', 'cpf', 'cartao', 'hora', 'donoLoja', 'nomeLoja'
    ];

    public function tipos() {
        return $this->belongsTo(Tipos::class);
    }
}
