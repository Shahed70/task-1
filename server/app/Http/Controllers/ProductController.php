<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function productInsert (Request $req) {
  
        if($req){
            $result = Product::create([
                "category_id" =>$req->input('category_id'),
                "title"=>$req->input('productTitle'),
                'image' => $req->input('productImage'),
                'description' => $req->input('description'),
                'price' => $req->input('price'),
                'quantity' => $req->input('quantity'),
                'inStock' => $req->input('inStock')
            ]);
        }
        return $result;
        
    }


    public function getProducts () {

        $products = Category::with('products')->get();
        return response()->json($products) ;
    }
}
