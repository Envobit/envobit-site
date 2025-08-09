// src/components/ui/floating-label-phone-input.tsx

import React, { useState } from "react";
import PhoneInputWithCountrySelect, {
  type Props as PhoneInputProps,
} from "react-phone-number-input";
import { Label } from "./label";
import { cn } from "@/lib/utils";
import { useFormField } from "./form";

const FloatingLabelPhoneInput = React.forwardRef<
  React.ElementRef<typeof PhoneInputWithCountrySelect>,
  Omit<PhoneInputProps<any>, "value" | "onChange"> & {
    value?: string;
    onChange: (value?: string) => void;
  }
>((props, ref) => {
  const { error } = useFormField();
  const [isFocused, setIsFocused] = useState(false);
  const { value, onChange, onBlur, onFocus, ...rest } = props;

  const isFloated = isFocused || !!value;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <div
      className={cn(
        "relative flex items-center h-10 w-full rounded-md border border-input bg-transparent text-sm ring-offset-background",
        "focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        error && "border-destructive focus-within:ring-destructive",
      )}
    >
      <Label
        className={cn(
          "absolute left-3 top-2 z-10 origin-[0] transform bg-white px-1 text-sm text-gray-500 duration-300 pointer-events-none font-normal",
          isFloated ? " -translate-y-5 scale-75" : "translate-y-0 scale-100",
          isFocused && !error && "text-primary",
        )}
      >
        Phone Number *
      </Label>
      <PhoneInputWithCountrySelect
        ref={ref}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="PhoneInput"
        {...rest}
      />
    </div>
  );
});

FloatingLabelPhoneInput.displayName = "FloatingLabelPhoneInput";

export { FloatingLabelPhoneInput };
