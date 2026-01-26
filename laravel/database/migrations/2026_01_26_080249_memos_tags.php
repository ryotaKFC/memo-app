<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create("memos_tags", function (Blueprint $table) {
            $table->id();
            $table->foreignId(column: "memo_id")->constrained(table: "memos")->onDelete("cascade");
            $table->foreignId(column: "tag_id")->constrained(table: "tags")->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
