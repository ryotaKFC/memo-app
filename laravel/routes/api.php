<?php

use App\Http\Controllers\MemoController;
use App\Http\Controllers\TagController;
use Illuminate\Support\Facades\Route;

Route::get("memo/", [MemoController::class, "index"]);
Route::post('memo/', [MemoController::class, 'store']);
Route::delete('memo/{id}', [MemoController::class, 'destroy']);
    
Route::get("tag/", [TagController::class, "index"]);
Route::post('tag/', [TagController::class, 'store']);
