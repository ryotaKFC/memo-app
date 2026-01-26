<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Memo extends Model
{
    use HasFactory;
    protected $fillable = ["content"];

    public function tags() {
        return $this->belongsToMany(Tag::class, 'memos_tags', 'memo_id', 'tag_id');
    }
}
