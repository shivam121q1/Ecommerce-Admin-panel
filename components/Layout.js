import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";




export default function Layout({children}) {
  const { data: session } = useSession()

  if(!session){
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-blue-900">
        <div className="text-center">
          <button onClick={()=>signIn('google')} className="bg-gray-400 p-2 rounded-lg">Login with Google</button>
        </div>
      </div>
     
    );
  }

  return(

    <div className="bg-blue-900 min-h-screen flex ">
      <Nav />
      <div className="bg-white flex-grow mt-1 rounded-lg">
        {children}
      </div>
    </div>
  )
  
}