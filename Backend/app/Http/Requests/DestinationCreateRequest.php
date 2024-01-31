<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DestinationCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'dest_name' => 'required|string|min:2',
            'dest_image' => 'nullable|string|max:2048',
            'estimated_price' => 'nullable|integer|min:0',
            'estimated_trip' => 'nullable|integer|min:0',
        ];
    }
}
