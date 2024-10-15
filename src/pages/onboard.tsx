
import { Book, Trophy, GraduationCap, Rocket } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useNavigate } from 'react-router-dom'

export default function OnBoard() {
    const navigate = useNavigate()

    async function handleAuth() {
        navigate("/auth")

    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 flex flex-col justify-center items-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-purple-800">
            Welcome to Acquel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center">
              <Rocket className="w-12 h-12 text-purple-600" />
            </div>
          </div>
          <p className="text-center text-gray-600 mb-8">
            Embark on your learning journey and unlock your potential with Acquel!
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { Icon: Book, text: "Access courses" },
              { Icon: Trophy, text: "Earn certificates" },
              { Icon: GraduationCap, text: "Expert instructors" },
              { Icon: Rocket, text: "Learn at your pace" },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <item.Icon className="w-5 h-5 text-purple-500" />
                <span className="text-sm text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
          <Button onClick={handleAuth} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </Button>
        </CardContent>
        <CardFooter className="bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-center text-gray-500 w-full">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}