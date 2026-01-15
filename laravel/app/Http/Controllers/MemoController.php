<?php

namespace App\Http\Controllers;

use App\Models\Memo;
use Illuminate\Http\Request;

class MemoController extends Controller
{
    public function store(Request $request)
    {
        $validData = $request->validate([
            'content' => ["required", "string", "max:1000"],
        ]);

        $memo = Memo::create($validData);

        return response()->json($memo, 201);
    }

    public function index() {
        $memos = Memo::all();

        return response()->json($memos, 200);
    }

    public function destroy($id) {
        $memo = Memo::find($id);
        
        if (!$memo) {
            return response()->json(['message' => 'Memo not found'], 404);
        }

        $memo->delete();

        return response()->json(['message' => 'Memo deleted successfully'], 200);
    }
}
