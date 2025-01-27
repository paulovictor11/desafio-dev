<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class CNAB extends Model
{
    protected $table = 'cnabs';
    protected $fillable = [
        'tipo', 'data', 'valor', 'cpf', 'cartao', 'hora', 'donoLoja', 'nomeLoja'
    ];

    public function tipos() {
        return $this->belongsTo(Tipos::class);
    }

    public static function findByDono($nome)
    {
        return DB::table('cnabs as c')
                    ->join('tipos_transacoes as t', 'c.tipo', '=', 't.id')
                    ->select('c.tipo', 't.descricao', 't.natureza', 'c.data', 'c.valor', 'c.hora', 'c.donoLoja', 'c.nomeLoja')
                    ->where('c.donoLoja', '=', $nome)
                    ->get();
    }

    public static function listAllDonos()
    {
        return DB::table('cnabs')->select('donoLoja')->distinct()->get();
    }
}
