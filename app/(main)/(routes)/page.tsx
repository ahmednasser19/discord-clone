import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <UserButton afterSignOutUrl="/" />
      <Button >Add Server</Button>
      <p className='text-3xl font-bold text-indigo-500'>Hello discord clone</p>
<ModeToggle />
    </>
  )
}
