import { Inter } from 'next/font/google'
import FormsSignInRegister from '@/components/Forms/SignInRegister'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <main
      className={`flex flex-col px-5 bg-white md:bg-gray-2 ${inter.className}`}
    >
      <div className="container flex flex-1 min-h-full mx-auto px-5 bg-white">
        <FormsSignInRegister />
      </div>
    </main>
  )
}

export default Home
