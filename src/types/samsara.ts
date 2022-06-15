export declare namespace VehicleTypes {
  export type Vehicle = {
    id: string;
    make: string;
    model: string;
    name: string;
    notes: string;
    serial: string;
    vin: string;
    year: string;
    vehicleRegulationMode: string;
    cameraSerial: string;
    externalIds: object;
    gateway: {
      serial: string;
      model: string;
    };
    harshAccelerationSettingType: string;
    createdAtTime: string;
    updatedAtTime: string;
  };

  export type ApiRes = {
    data: Vehicle[];
    pagination: {
      endCursor: string;
      hasNextPage: false;
    };
  };
}
