"use client"
import { Button } from "@/components/ui/button"

interface PaymentModalProps {
  isOpen: boolean
  onCloseAction: () => void // Renamed to follow Server Action naming convention
  // Add other props as needed
}

export default function PaymentModal({ isOpen, onCloseAction }: PaymentModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-background p-6 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-playfair font-medium mb-4">Complete Your Payment</h2>

        {/* Payment form content */}
        <div className="space-y-4">
          {/* Form fields would go here */}
          <p>Payment details form would go here</p>
        </div>

        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={onCloseAction}>
            Cancel
          </Button>
          <Button className="bg-secondary text-white hover:bg-secondary/90">Pay Now</Button>
        </div>
      </div>
    </div>
  )
}


