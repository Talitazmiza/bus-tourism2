<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FleetResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'fleet_name' => $this->fleet_name,
            'police_number' => $this->police_number,
            'capacity' => $this->capacity,
            'fleet_image' => $this->fleet_image,
            'in_service' => $this->in_service,
            'created_by' => $this->created_by,
        ];
    }
}
