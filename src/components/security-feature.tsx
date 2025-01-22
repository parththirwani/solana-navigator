import { Shield, Lock, Key } from "lucide-react"

export function SecurityFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Bank-Grade Security</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl">
              Your security is our top priority. We implement multiple layers of protection to keep your assets safe.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 mt-16">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="bg-blue-600/20 p-4 rounded-full">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Asset Protection</h3>
            <p className="text-gray-400">
              Your assets are secured by military-grade encryption and multi-signature technology.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="bg-blue-600/20 p-4 rounded-full">
              <Lock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Secure Storage</h3>
            <p className="text-gray-400">Multi-factor authentication to protect your account.</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="bg-blue-600/20 p-4 rounded-full">
              <Key className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Access Control</h3>
            <p className="text-gray-400">
              We use token delegation method to protrct your public and private key.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

