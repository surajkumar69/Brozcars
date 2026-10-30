export type TransmissionType = 'Manual' | 'Automatic' | 'Manual / Automatic';
export type FuelType = 'Petrol' | 'Diesel' | 'Petrol / Diesel';
export type CarCategory = 'Hatchback' | 'Sedan' | 'SUV & 4x4' | '7-Seater MPV';
export type AvailabilityStatus = 'available' | 'booked' | 'maintenance';

export interface Car {
  id: string;
  name: string;
  category: CarCategory;
  transmission: TransmissionType;
  fuelType: FuelType;
  seatingCapacity: number;
  pricePerDay: number;
  image: string;
  gallery: string[];
  isAvailable: boolean;
  status: AvailabilityStatus;
  features: string[];
  depositAmount: number;
  description: string;
  mileage: string;
  engine: string;
  luggageCapacity: string;
  tagline?: string;
}

export type BookingStatus = 'New' | 'Confirmed' | 'Completed' | 'Cancelled';

export interface Booking {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  carId: string;
  carName: string;
  carPrice: number;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  pickupLocation: string;
  totalDays: number;
  estimatedTotal: number;
  message?: string;
  status: BookingStatus;
  createdAt: string;
  adminNotes?: string;
}

export interface SiteSettings {
  businessName: string;
  businessCategory: string;
  phone: string;
  email: string;
  location: string;
  addressFull: string;
  whatsappNumber: string;
  openingHours: string;
  announcementText: string;
  heroHeading: string;
  heroSubtitle: string;
  aboutHeading: string;
}
