import type { ShippingAddress } from "../components/ShippingAddressForm";

export function validateUSZipCode(zip: string): boolean {
  // Matches XXXXX or XXXXX-XXXX format
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zip);
}

export function validateShippingAddress(
  address: ShippingAddress,
): Partial<Record<keyof ShippingAddress, string>> {
  const errors: Partial<Record<keyof ShippingAddress, string>> = {};

  if (!address.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!address.streetAddress.trim()) {
    errors.streetAddress = "Street address is required";
  }

  if (!address.city.trim()) {
    errors.city = "City is required";
  }

  if (!address.state) {
    errors.state = "State is required";
  }

  if (!address.zipCode.trim()) {
    errors.zipCode = "ZIP code is required";
  } else if (!validateUSZipCode(address.zipCode)) {
    errors.zipCode = "Invalid ZIP code format (use XXXXX or XXXXX-XXXX)";
  }

  return errors;
}

export function formatShippingAddress(address: ShippingAddress): string {
  const lines = [
    address.fullName,
    address.streetAddress,
    address.addressLine2,
    `${address.city}, ${address.state} ${address.zipCode}`,
  ];

  return lines.filter((line) => line.trim()).join("\n");
}
