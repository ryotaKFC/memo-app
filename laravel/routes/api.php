<?php

use App\Http\Controllers\MemoController;
use Illuminate\Support\Facades\Route;

Route::get("memo/", [MemoController::class, "index"]);
Route::post('memo/', [MemoController::class, 'store']);
