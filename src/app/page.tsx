import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ArrowRight, Wallet, Send, LineChart, Zap, Shield, Code } from "lucide-react"
import { StepsToWeb3 } from "@/components/steps-to-web3"
import { FeatureComparison } from "@/components/feature-comparison"
import { SecurityFeatures } from "@/components/security-feature"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-24">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Solana Navigator</span>
          </Link>
          <div className=" md:flex ">
            <MainNav />
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
              Log in
            </Link>
            <Button asChild>
              <Link href="/get-started">Get started — it's free</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero section - Black */}
        <section className="w-full py-24  bg-black text-white px-24">
          <div className="container">
           
            <div className="grid gap-8 lg:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col items-start space-y-8">
                <p className="text-sm font-semibold tracking-wide uppercase text-blue-500">BLOCKCHAIN MADE SIMPLE</p>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none lg:text-7xl/none">
                  Launch your Web3 journey today
                </h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  Start your blockchain journey with an interface that feels familiar. No crypto jargon, just simple
                  tools for real-world use.
                </p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Get started — it's free
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-900">
                    View demo
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative h-[600px] w-full">
                  <Image
                    src="/blockchain-integration.avif"
                    alt="Platform preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>  
              </div>
            </div>
          </div>
        </section>

        {/* Features section - White */}
        <section className="w-full py-12 md:py-24 lg:py-32  bg-white text-black px-24">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[600px_1fr] items-center">
              <div className="relative hidden lg:block">
                <div className="relative h-[600px] w-full">
                  <Image
                    src="/email-transaction.webp"
                    alt="Transaction interface"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Send crypto as easily as sending an email
                </h2>
                <p className="text-gray-600 md:text-xl">
                  Our LLM makes blockchain transactions intuitive. No more complicated addresses or
                  confusing gas fees.
                </p>
                <div className="grid gap-4 w-full">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Send className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Simple Transfers</h3>
                      <p className="text-sm text-gray-600">Send SOL to anyone, anywhere, instantly</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Built-in Security</h3>
                      <p className="text-sm text-gray-600">Bank-grade protection for your assets</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Code className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Developer Tools</h3>
                      <p className="text-sm text-gray-600">Advanced features when you need them</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration section - Black */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white px-24">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col items-start space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Seamless integration with your existing tools
                </h2>
                <p className="text-gray-400 md:text-xl">
                  Connect your Web2 applications to the Solana blockchain without changing your entire stack.
                </p>
                <div className="grid gap-4 w-full">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600/20 p-2 rounded-lg">
                      <Zap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">One-Click Integration</h3>
                      <p className="text-sm text-gray-400">Connect your app in minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600/20 p-2 rounded-lg">
                      <LineChart className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Real-time Analytics</h3>
                      <p className="text-sm text-gray-400">Monitor performance instantly</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600/20 p-2 rounded-lg">
                      <Wallet className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Wallet Connect</h3>
                      <p className="text-sm text-gray-400">Support all major wallets</p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start integrating
                </Button>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative h-[600px] w-full">
                  <Image
                    src="/blockchain.webp"
                    alt="Integration dashboard"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section - White */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-black px-24" >
          <div className="container">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to start building?</h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Join thousands of developers who are already building the future of finance with Solana Navigator.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-6 ">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-gray-600">Free plan includes all core features. No credit card required.</p>
              </div>
            </div>
          </div>
        </section>
        <StepsToWeb3 />
        <FeatureComparison />
        <SecurityFeatures />
      </main>
      <footer className="border-t py-6 md:py-0 bg-black text-white px-24">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
              Built by{" "}
              <Link href="#" className="font-medium underline underline-offset-4">
                Solana Navigator
              </Link>
              . The source code is available on{" "}
              <Link href="#" className="font-medium underline underline-offset-4">  
                GitHub
              </Link>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

