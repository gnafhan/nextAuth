import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import { useSession } from "next-auth/react"

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions)
  const { data: sessions } = useSession()

  res.send({content: "haha"})
  console.log(sessions)
}   