<?php

namespace App\Http\Requests;

use App\Models\Destination;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TransactionCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
//        dd('hello');
        return [
            'details' => ['nullable', 'string'],
            'status' => ['required', 'string', 'in:completed,on_progress,drafted'],
            'price' => ['required', 'integer', 'min:0'],
            'created_by' => [
                'required',
                Rule::exists(User::class, 'id')
            ],
            'dest_id' => [
                'required',
                Rule::exists(Destination::class, 'id')
            ],
            'start_date' => ['required', 'date_format:Y-m-d'],
            'end_date' => ['required', 'date_format:Y-m-d', 'after:start_date'],
        ];
    }
}
