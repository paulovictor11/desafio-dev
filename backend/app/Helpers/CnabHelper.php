<?php

namespace App\Helpers;

class CnabHelper
{
    public static function loadFile($file)
    {
        try {
            $originalName = $file->getClientOriginalName();
            $file->move('uploads', $originalName);

            return fopen('uploads/' . $originalName, 'r');
        } catch (\Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage()
            ], 400);
        }
    }

    public static function retrieveInfo($string, $offset, $length)
    {
        return substr($string, $offset, $length);
    }

    public static function normalizeValue($value)
    {
        return $value / 100.00;
    }
}