export interface SubscriptionPlan {
  id: string
  name: string
  monthlyPrice: number
  yearlyPrice: number
  features: string[]
  buttonText: string
}
