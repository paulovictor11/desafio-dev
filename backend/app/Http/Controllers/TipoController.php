<?php

namespace App\Http\Controllers;

use App\Http\Resources\TipoCollection;
use App\Http\Resources\TipoResource;
use App\Models\Tipos;
use App\Transformers\TiposTransformer;
use Illuminate\Http\Request;

class TipoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return TipoResource::collection(Tipos::all());
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
            $model = new Tipos();
            $model->fill($request->all());
            $model->save();

            return response()->json([
                'status'  => 'created',
                'message' =>  $model->getTable() . ' created successfully'
            ], 201);
        } catch(\Exception $e) {
            return response()->json([
                'status' => 'error',
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
            return new TipoResource(Tipos::findOrFail($id));
        } catch(\Exception $e) {
            return response()->json([
                'status' => 'not found',
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
            $model = Tipos::findOrFail($id);
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
            $model = Tipos::findOrFail($id);
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
}
