<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = ["tag_name"];
    public function memos() {
        return $this->belongsToMany(Memo::class, 'memos_tags', 'tag_id', 'memo_id');
    }
}
