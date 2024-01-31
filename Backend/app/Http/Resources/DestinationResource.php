<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DestinationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'dest_name' => $this->dest_name,
            'dest_image' => $this->dest_image,
            'estimated_price' => $this->estimated_price,
            'estimated_trip' => $this->estimated_trip
        ];
    }
}
