import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="py-24">
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="h2 max-w-xl text-center mb-8">Chceš zvizualizovať tvoj nápad? Som tu pre teba</h2>
                <Link href='/contact'>
                    <Button>Kontaktuj ma</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Cta