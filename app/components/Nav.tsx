import Link from "next/link"
import Image from "next/image"
import { auth , signOut, signIn  } from "@/auth"


const Nav = async () => {

    const session = await auth( )


    return (
        <header className="px-5 py-3 bg-white flex justify-between shadow-sm font-work-sans">

            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={32}  />
                </Link>
            </nav>


            <div className="flex items-center gap-5 text-black">
                { session && session?.user ? (
                    <>
                        <Link href="/startup/create">
                            <span>Create</span>
                        </Link>

                        <button onClick={async () => {
                            "use server"

                            await signOut({redirectTo : "/"})
                        }} >
                            <span>Log out</span>
                        </button>

                        <Link href={`/user/${session?.id}`}>
                            <span>{session?.user?.name}</span>
                        </Link>
                    </>)
                    : 
                <button onClick={async () => {
                    "use server";
                    await signIn("github");
                }}>
                    <span>Login</span>
                </button>
                }
            </div>
        </header>
    )
}

export default Nav