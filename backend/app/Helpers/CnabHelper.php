<?php

namespace App\Helpers;

class CnabHelper
{
    public static function loadFile($file)
    {
        $originalName = $file->getClientOriginalName();
        $file->move('uploads', $originalName);

        return fopen('uploads/' . $originalName, 'r');
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