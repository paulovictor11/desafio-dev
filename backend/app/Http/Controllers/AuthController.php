<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name'     => 'required|max:55',
                'email'    => 'email|required|unique:users',
                'password' => 'required|confirmed'
            ]);
    
            $validatedData['password'] = bcrypt($request->password);
    
            $user = User::create($validatedData);
    
            $accessToken = $user->createToken('authToken')->accessToken;
    
            return response()->json([
                'access_token' => $accessToken,
                'user'         => $user
            ], 201);
        } catch(\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 400);
        }
    }

    public function login(Request $request)
    {
        try {
            $loginData = $request->validate([
                'email'    => 'email|required',
                'password' => 'required'
            ]);

            if (!auth()->attempt($loginData)) {
                return response()->json([
                    'status'  => 'failed',
                    'message' => 'Invalid Credentials'
                ], 400);
            }

            $accessToken = auth()->user()->createToken('authToken')->accessToken;

            return response()->json([
                'access_token' => $accessToken,
                'user'         => auth()->user()
            ], 200);
        } catch(\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()
            ], 400);
        }
    }
}
