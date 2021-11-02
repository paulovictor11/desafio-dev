<?php

namespace App\Transformers;

use App\Models\Tipos;
use League\Fractal\TransformerAbstract;

class TiposTransformer extends TransformerAbstract
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
    public function transform(Tipos $model)
    {
        return [
            'id'        => $model->id,
            'descricao' => $model->descricao,
            'natureza'  => $model->natureza,
            'sinal'     => $model->sinal
        ];
    }
}
