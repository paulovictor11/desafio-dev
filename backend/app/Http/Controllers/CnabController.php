<?php

namespace App\Http\Controllers;

use App\Helpers\CnabHelper;
use App\Http\Resources\CnabResource;
use App\Models\CNAB;
use Illuminate\Http\Request;

class CnabController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return CnabResource::collection(CNAB::all());
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 400);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $handleFile = CnabHelper::loadFile($request->file('file'));

            while (($string = fgets($handleFile)) !== false) {
                $model = new CNAB();
                
                $model->tipo     = intval(CnabHelper::retrieveInfo($string, 0, 1));
                $model->data     = CnabHelper::retrieveInfo($string, 1, 8);
                $model->valor    = CnabHelper::normalizeValue(CnabHelper::retrieveInfo($string, 9, 10));
                $model->cpf      = CnabHelper::retrieveInfo($string, 19, 11);
                $model->cartao   = CnabHelper::retrieveInfo($string, 30, 12);
                $model->hora     = CnabHelper::retrieveInfo($string, 42, 6);
                $model->donoLoja = trim(CnabHelper::retrieveInfo($string, 48, 14));
                $model->nomeLoja = trim(CnabHelper::retrieveInfo($string, 62, 19));

                $model->save();
            }

            fclose($handleFile);

            return response()->json([
                'status'  => 'created',
                'message' => $model->getTable() . ' created successfully',
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage()
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            return new CnabResource(CNAB::findOrFail($id));
        } catch(\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $model = CNAB::findOrFail($id);
            $model->fill($request->all());
            $model->save();

            return response()->json([
                'status'  => 'updated',
                'message' =>  $model->getTable() . ' updated successfully'
            ], 200);
        } catch(\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $model = CNAB::findOrFail($id);
            $model->delete();

            return response()->json([
                'status' => 'deleted',
                'message' => $model->getTable() . ' deleted successfully'
            ], 200);
        } catch(\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 400);
        }
    }

    /**
     * Display a listing of the resource by operation.
     *
     * @return \Illuminate\Http\Response
     */
    public function byOperation()
    {
        try {
            $donos = CNAB::listAllDonos();
            $data = [];

            foreach($donos as $key => $value) {
                $lojas = CNAB::findByDono($value->donoLoja);

                $data[$key]['dono'] = $value->donoLoja;
                $data[$key]['lojas'] = $lojas;

                $valorSaldo = 0.0;
                foreach($lojas as $l) {
                    if ($l->natureza == 'Saída') {
                        $valorSaldo -= floatval($l->valor);
                    } else {
                        $valorSaldo += floatval($l->valor);
                    }
                }

                $data[$key]['saldoTotal'] = $valorSaldo;
            }

            return response()->json($data, 200);
        } catch(\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 400);
        }
    }
}
