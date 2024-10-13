import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Coins, Globe, Layers } from "lucide-react"

export default function HyperCapital() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="p-6 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            HyperCapital
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#features" className="hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section id="hero" className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Revolutionizing Economics and Society
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              HyperCapital is a research organization focused on initiating a revolution in economics and society. 
              We create innovative relations beyond Capitalism without breaking it.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Learn More <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-8 text-center">About HyperCapital</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-2xl mb-4">
                  HyperCapital is a social experiment based on Blockchain technology. We aim to help all people who are 
                  weakened under the power of Capital, while recognizing that we are all Capitalists too.
                </p>
                <p className="text-2xl">
                  Our innovative approach creates new economic relations that extend beyond traditional Capitalism, 
                  offering new opportunities and empowerment to individuals in the digital age.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/hypercapital.jpg" 
                  alt="HyperCapital Concept" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold mb-12 text-center">Key Features of HyperCapital</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Layers className="mr-2 text-purple-400" />
                    Create Your Nature Assets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Manage and grow your digital assets in a secure, blockchain-based Nature Account.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="mr-2 text-purple-400" />
                    Publish Your Assets in Mycelium Market
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Showcase your financial profile and connect with like-minded individuals in our decentralized market.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Coins className="mr-2 text-purple-400" />
                    Circulate Your Assets in DApps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Leverage your assets across various decentralized applications, maximizing their potential and utility.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="cta" className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-6">Join the HyperCapital Revolution</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of the future of economics and society. Empower yourself and others through innovative blockchain-based solutions.
            </p>
            <Button className="bg-white text-purple-900 hover:bg-gray-200">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} HyperCapital. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">A social experiment based on Blockchain technology.</p>
        </div>
      </footer>
    </div>
  )
}
