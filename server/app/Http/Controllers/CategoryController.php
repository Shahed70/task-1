<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function categoryInsert(Request $req)
    {

        $result = Category::create([
            'cat_name' => $req->input('cat_name'),
            'cat_slug' => $req->input('cat_slug'),
        ]);

        if ($result) {
            return response()->json([
                'msg' => 'success',
                'result' => $result
            ]);
        }
    }
}
