import { Navbar } from "@/components"
import Head from "next/head"


export default function Home() {
  return (
    <div>
      <Head>
        <title>SzymCode</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar/>
      </main>
    </div>
  )
}
