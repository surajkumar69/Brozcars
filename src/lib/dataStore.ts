import { Car, SiteSettings } from '@/types';
import { INITIAL_CARS, SITE_SETTINGS } from './constants';

export const APPROVED_CAR_IDS = [
  'tata-altroz',
  'maruti-baleno',
  'hyundai-i20-sunroof',
  'mahindra-thar-4x4',
  'toyota-innova-crysta',
  'maruti-swift',
  'honda-city',
  'hyundai-venue',
  'mahindra-scorpio'
];

/**
 * Pure static fleet fetcher - returns the strict 9 verified Brozcars models
 */
export async function fetchCars(): Promise<Car[]> {
  return INITIAL_CARS;
}

export function getAllCars(): Car[] {
  return INITIAL_CARS;
}

export function getCarById(id: string): Car | undefined {
  return INITIAL_CARS.find((c) => c.id === id);
}

export async function fetchSettings(): Promise<SiteSettings> {
  return SITE_SETTINGS;
}

export function getSettings(): SiteSettings {
  return SITE_SETTINGS;
}
