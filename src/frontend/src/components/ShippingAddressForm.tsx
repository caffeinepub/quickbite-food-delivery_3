import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { US_STATES } from "../constants/usStates";
import { validateUSZipCode } from "../utils/validation";

export interface ShippingAddress {
  fullName: string;
  streetAddress: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
}

interface ShippingAddressFormProps {
  value: ShippingAddress;
  onChange: (address: ShippingAddress) => void;
  errors?: Partial<Record<keyof ShippingAddress, string>>;
}

export default function ShippingAddressForm({
  value,
  onChange,
  errors = {},
}: ShippingAddressFormProps) {
  const handleChange = (field: keyof ShippingAddress, fieldValue: string) => {
    onChange({ ...value, [field]: fieldValue });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name *</Label>
        <Input
          id="fullName"
          value={value.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          placeholder="John Doe"
          className={errors.fullName ? "border-destructive" : ""}
        />
        {errors.fullName && (
          <p className="text-sm text-destructive">{errors.fullName}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="streetAddress">Street Address *</Label>
        <Input
          id="streetAddress"
          value={value.streetAddress}
          onChange={(e) => handleChange("streetAddress", e.target.value)}
          placeholder="123 Main St"
          className={errors.streetAddress ? "border-destructive" : ""}
        />
        {errors.streetAddress && (
          <p className="text-sm text-destructive">{errors.streetAddress}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="addressLine2">Address Line 2 (Optional)</Label>
        <Input
          id="addressLine2"
          value={value.addressLine2}
          onChange={(e) => handleChange("addressLine2", e.target.value)}
          placeholder="Apt, Suite, Unit, etc."
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            value={value.city}
            onChange={(e) => handleChange("city", e.target.value)}
            placeholder="New York"
            className={errors.city ? "border-destructive" : ""}
          />
          {errors.city && (
            <p className="text-sm text-destructive">{errors.city}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="state">State *</Label>
          <Select
            value={value.state}
            onValueChange={(val) => handleChange("state", val)}
          >
            <SelectTrigger
              id="state"
              className={errors.state ? "border-destructive" : ""}
            >
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              {US_STATES.map((state) => (
                <SelectItem key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.state && (
            <p className="text-sm text-destructive">{errors.state}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="zipCode">ZIP Code *</Label>
        <Input
          id="zipCode"
          value={value.zipCode}
          onChange={(e) => handleChange("zipCode", e.target.value)}
          placeholder="10001"
          className={errors.zipCode ? "border-destructive" : ""}
        />
        {errors.zipCode && (
          <p className="text-sm text-destructive">{errors.zipCode}</p>
        )}
      </div>
    </div>
  );
}
