<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageUploadController extends Controller
{
    public function upload(Request $request) {

        $request->validate([
            'path' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $image = $request->file('image');
        $path = $request->get('path');
        $imageName = $image->getClientOriginalName();
        $image->move(public_path('uploads/' . $path . '/'), $imageName);

        return response()->json(['path' => $path , 'image_path' =>  '/uploads/' . $path . '/' . $imageName], 200);
    }
}
