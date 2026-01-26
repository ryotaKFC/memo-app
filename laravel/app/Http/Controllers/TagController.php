<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function index()
    {
        $tags = Tag::all();
        
        return response()->json($tags, 200);
    }

    public function store(Request $request)
    {
        $validData = $request->validate([
            'tag_name' => ["required", "string", "min:1", "max:15"],
        ]);

        $tag = Tag::create($validData);

        return response()->json($tag, 201);
    }
}
