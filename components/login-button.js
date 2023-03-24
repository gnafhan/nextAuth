import { Button, Tooltip, IconButton, Avatar } from "@mui/material"
import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data: session } = useSession()
  
  if (session) {
    return (
      <>
     <Tooltip title="Open settings">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={session.user.image} />
              </IconButton>
            </Tooltip>
      </>
    )
  }
  return (
    <>
      <Button variant="contained" onClick={() => signIn()}>Sign in</Button>
    </>
  )
}