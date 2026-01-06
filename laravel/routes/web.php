<?php

use App\Http\Controllers\MemoController;
use Illuminate\Support\Facades\Route;

/**
 * SPAのルーティングを全て受け取る
 */
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
