
import { Book, Trophy, GraduationCap, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ImprovedOnboardingScreen1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white flex flex-col">
      {/* Top Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 space-y-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-400 rounded-full opacity-20 animate-pulse delay-300"></div>
        
        <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg relative z-10">
          <Rocket className="w-20 h-20 text-purple-600" />
        </div>
        <h1 className="text-5xl font-bold text-center leading-tight relative z-10">
          Welcome to
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300">
            Acquel
          </span>
        </h1>
        <p className="text-center text-xl opacity-90 max-w-md relative z-10">
          Embark on your learning journey and unlock your potential with our innovative platform!
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-t-3xl p-8 space-y-8 relative z-20 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6">
          What you'll get
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {[
            { Icon: Book, text: "Access diverse courses" },
            { Icon: Trophy, text: "Earn certificates" },
            { Icon: GraduationCap, text: "Learn from experts" },
            { Icon: Rocket, text: "Personalized learning" },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-500 bg-opacity-30 rounded-full flex items-center justify-center">
                <item.Icon className="w-6 h-6 text-purple-200" />
              </div>
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button 
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-4 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        {/* Additional Info */}
        <div className="flex items-center justify-center space-x-2 text-sm opacity-80">
          <CheckCircle2 className="w-4 h-4" />
          <span>No credit card required</span>
        </div>

        {/* Terms and Conditions */}
        <p className="text-xs text-center opacity-70 mt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  )
}