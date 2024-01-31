<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class FleetCreateRequest extends FormRequest
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
            'fleet_name' => 'required',
            'police_number' => 'required',
            'capacity' => 'required',
            'fleet_image' => 'nullable',
            'in_service' => 'required',
            'created_by' => [
                'required',
                Rule::exists(User::class, 'id'),
            ]
        ];
    }
}
