import { Button } from "@/components/ui/button"
import { Wallet, Send, LineChart } from "lucide-react"

export function StepsToWeb3() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Three steps to Web3</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl">
              Getting started with Solana has never been easier. Follow these simple steps to begin your journey.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16 mt-16">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="bg-blue-600/20 p-4 rounded-full">
              <Wallet className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">1. Create Account</h3>
            <p className="text-gray-400">
              Sign up with your email. No blockchain knowledge needed - we'll handle the technical setup.
            </p>
            <Button variant="link">Learn more →</Button>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="bg-blue-600/20 p-4 rounded-full">
              <Send className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">2. Add Funds</h3>
            <p className="text-gray-400">
              Deposit funds using your credit card or bank transfer. We'll convert it to SOL automatically.
            </p>
            <Button variant="link">Learn more →</Button>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="bg-blue-600/20 p-4 rounded-full">
              <LineChart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">3. Start Trading</h3>
            <p className="text-gray-400">Send, receive, and track your transactions with our intuitive interface.</p>
            <Button variant="link">Learn more →</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

