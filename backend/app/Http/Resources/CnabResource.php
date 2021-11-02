<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CnabResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'tipo' => $this->tipo,
            'tipoDescricao' => $this->tipos->descricao,
            'data' => $this->data,
            'valor' => $this->valor,
            'cpf' => $this->cpf,
            'cartao' => $this->cartao,
            'hora' => $this->hora,
            'donoLoja' => $this->donoLoja,
            'nomeLoja' => $this->nomeLoja,
        ];
    }
}
