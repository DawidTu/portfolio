import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="xs:mt-20 sm:mt-28 md:pt-0 pb-16">
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