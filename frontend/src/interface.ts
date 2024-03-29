// import { Dispatch, SetStateAction } from "react";

export interface INavbar {
  hamburgerMenuIsOpen: boolean;
}

export interface IFormVehicleInfo {
  id: number | string;
  name: string;
  model: string;
  price: number | string;
}

export interface IVehicle {
  currentVehicle: number;
}

export interface IVehicleInfo {
  id: number;
  name: string;
  model: string;
  price: number;
  available: boolean;
  owner: string;
}
