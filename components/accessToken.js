import { useSession, signIn, signOut } from "next-auth/react"
export default function Token() {
  const { data } = useSession()
  if (!data) return
  const { accessToken } = data
  return <button onClick={()=> console.log(data)}>check</button>
}