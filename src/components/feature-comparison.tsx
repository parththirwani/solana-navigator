import { Check, X } from "lucide-react"

export function FeatureComparison() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-black px-4 md:px-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Traditional vs Blockchain Technology</h2>
            <p className="max-w-[900px] text-gray-400 md:text-xl">
              Exploring how blockchain revolutionizes digital interactions and transactions
            </p>
          </div>
        </div>
        <div className="mt-16 grid max-w-4xl mx-auto gap-8">
          <div className="grid grid-cols-3 items-center gap-4 px-4 py-3 bg-gray-900/50 rounded-lg">
            <div className="font-medium">Feature</div>
            <div className="font-medium text-center">Web2</div>
            <div className="font-medium text-center">Web3</div>
          </div>
          {features.map((feature) => (
            <div key={feature.name} className="grid grid-cols-3 items-center gap-4 px-4 py-3 bg-gray-900/20 rounded-lg">
              <div>{feature.name}</div>
              <div className="flex justify-center">
                {feature.web2 ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : (
                  <X className="h-5 w-5 text-red-500" />
                )}
              </div>
              <div className="flex justify-center">
                {feature.web3 ? (
                  <Check className="h-5 w-5 text-green-500" />
                ) : (
                  <X className="h-5 w-5 text-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    name: "Decentralization",
    web2: false,
    web3: true,
  },
  {
    name: "Smart Contracts",
    web2: false,
    web3: true,
  },
  {
    name: "Asset Tokenization",
    web2: false,
    web3: true,
  },
  {
    name: "Immutable Records",
    web2: false,
    web3: true,
  },
  {
    name: "Permissionless Access",
    web2: false,
    web3: true,
  },
  {
    name: "Programmable Money",
    web2: false,
    web3: true,
  },
  {
    name: "Data Ownership",
    web2: false,
    web3: true,
  },
  {
    name: "Transparent Transactions",
    web2: false,
    web3: true,
  }
]