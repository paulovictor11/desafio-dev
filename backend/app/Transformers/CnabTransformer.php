<?php

namespace App\Transformers;

use App\Models\CNAB;
use League\Fractal\TransformerAbstract;

class CnabTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //
    ];
    
    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        //
    ];
    
    /**
     * A Fractal transformer.
     *
     * @return array
     */
    public function transform(CNAB $model)
    {
        return [
            'id' => $model->id,
            'tipo' => $model->tipo,
            'descricaoTipo' => $model->tipos->descricao,
            'data' => $model->data,
            'valor' => $model->valor,
            'cpf' => $model->cpf,
            'cartao' => $model->cartao,
            'hora' => $model->hora,
            'donoLoja' => $model->donoLoja,
            'nomeLoja' => $model->nomeLoja
        ];
    }
}
