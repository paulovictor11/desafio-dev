<?php

namespace App\Http\Controllers;

use App\Models\Tipos;
use App\Transformers\TiposTransformer;
use Illuminate\Http\Request;

class TipoController extends Controller
{
    private $model;

    public function __construct(Tipos $model)
    {
        $this->model = $model;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $data = $this->model->all();
            return response()->json($data, 200);
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
            $this->model->fill($request->all());
            $this->model->save();

            return response()->json([
                'status'  => 'created',
                'message' =>  $this->model->getTable() . ' created successfully'
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
            $data = $this->model->findOrFail($id);
            return response()->json($data, 200);
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
            $this->model->fill($request->all());
            $this->model->save();

            return response()->json([
                'status'  => 'updated',
                'message' =>  $this->model->getTable() . ' updated successfully'
            ], 201);
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
            $data = $this->model->findOrFail($id);
            $data->delete();

            return response()->json([
                'status' => 'deleted',
                'message' => $this->model->getTable() . ' deleted successfully'
            ], 200);
        } catch(\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 400);
        }
    }
}
