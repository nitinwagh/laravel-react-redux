<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Exception;
use App\User;

class AuthController extends Controller
{
    /**
     * Create user
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        try {
            $user = User::create($request->toArray());
            $token = auth()->login($user);
            return $this->respondWithToken($token);
        } catch (Exception $ex) {
            return response()->json(['status' => false, 'message' => $ex->getMessage()]);
        }
    }

    /**
     * Login
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        try {
            $credentials = request(['email', 'password']);
            if (! $token = auth()->attempt($credentials)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
            return $this->respondWithToken($token);
        } catch (Exception $ex) {
            return response()->json(['status' => false, 'message' => $ex->getMessage()]);
        }
    }

    /**
     * Logout
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        try {
            auth()->logout();
            return response()->json(['message' => 'Successfully logged out']);
        } catch (Exception $ex) {
            return response()->json(['status' => true, 'message' => $ex->getMessage()]);
        }
    }
    
    /**
     * Get the authenticated User
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        try {
            return response()->json(['status' => true, 'user' => auth()->user()]);
        } catch (Exception $ex) {
            return response()->json(['status' => true, 'message' => $ex->getMessage()]);
        }
    }
    
    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        try {
            return $this->respondWithToken(auth()->refresh());
        } catch (Exception $ex) {
            return response()->json(['status' => false, 'message' => $ex->getMessage()]);
        }
    }

    /**
     * Build response
     *
     * @param type $token
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token) {
        return response()->json([
            'status' => true,
            'token_details' => [
                    'access_token' => $token,
                    'token_type'   => 'bearer',
                    'expires_in'   => auth()->factory()->getTTL() * 60
            ]
        ]);
    }
}
