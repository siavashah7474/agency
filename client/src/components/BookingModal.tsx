import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { SYSTEMS } from "@/data/systemsData";
import { trackEvent } from "@/components/GoogleAnalytics";

// "Service of interest" options: the four systems, the add-ons, and an escape hatch.
// Value and label are both readable names, so the lead email never shows a URL slug.
const serviceOptions = [
  ...SYSTEMS.map((s) => ({ value: s.name, label: `${s.name} (${s.productLabel})` })),
  { value: "Meta / Google Ads add-on", label: "Meta / Google Ads add-on" },
  { value: "SEO add-on", label: "SEO add-on" },
  { value: "Not sure — help me choose", label: "Not sure — help me choose" },
];

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  // Same rule the server applies (api/index.ts), so the form never accepts a number the API rejects.
  phone: z
    .string()
    .trim()
    .regex(/^[+\d(][\d\s\-().]{4,}$/, "Please enter a valid phone number, e.g. +31 6 1234 5678")
    .refine((v) => v.replace(/\D/g, "").length >= 7, "Please enter a valid phone number, e.g. +31 6 1234 5678"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
  // Honeypot — hidden from humans; the API drops any submission that fills it in.
  website: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
}

export default function BookingModal({
  open,
  onOpenChange,
  defaultService,
}: BookingModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: defaultService || "",
      message: "",
    },
  });

  // Reset form when modal opens or defaultService changes
  useEffect(() => {
    if (open) {
      form.reset({
        name: "",
        email: "",
        phone: "",
        service: defaultService || "",
        message: "",
      });
    }
  }, [open, defaultService, form]);

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    try {
      // Send the readable label (never a slug or the bare value) so the lead email makes sense.
      const serviceLabel = serviceOptions.find((o) => o.value === data.service)?.label ?? data.service;
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, service: serviceLabel }),
      });

      if (!response.ok) {
        let errorMessage = "Failed to submit booking";
        try {
          const error = await response.json();
          errorMessage = error.message || errorMessage;
        } catch {
          // non-JSON error body — use default message
        }
        throw new Error(errorMessage);
      }

      // Track form submission in Google Analytics
      trackEvent("form_submission", "booking", data.service);

      toast({
        title: "Request received!",
        description: "We've emailed you a confirmation and will reply within a few hours with available times for your call.",
      });

      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error && error.message !== "Failed to submit booking"
            ? error.message
            : "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Book Your Free AI Audit</DialogTitle>
          <DialogDescription>
            Fill in the form — we'll reply within a few hours with available times for your free 30-minute strategy call.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
              {...form.register("website")}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+31 6 1234 5678"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service of interest *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={isSubmitting}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {serviceOptions.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What's your main challenge? <span className="text-muted-foreground font-normal">(optional)</span></FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g. We get leads from Facebook Ads but respond too slowly and lose them to competitors..."
                      rows={3}
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Book Strategy Call"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
