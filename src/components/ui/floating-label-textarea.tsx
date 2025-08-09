import * as React from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useFormField } from "./form";

export interface FloatingLabelTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const FloatingLabelTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FloatingLabelTextareaProps
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <div className="relative">
      <Textarea
        ref={ref}
        id={formItemId}
        className={cn(
          "peer w-full border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          "focus:border-primary focus-within:border-none",
          className,
        )}
        placeholder=" "
        {...props}
      />
      <Label
        htmlFor={formItemId}
        className={cn(
          "absolute left-3 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-1 text-sm text-gray-500 duration-300 font-normal",
          "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1 peer-focus:text-primary",
          error ? "text-destructive peer-focus:text-destructive" : "",
        )}
      >
        {props["aria-label"]}
      </Label>
    </div>
  );
});
FloatingLabelTextarea.displayName = "FloatingLabelTextarea";

export { FloatingLabelTextarea };
