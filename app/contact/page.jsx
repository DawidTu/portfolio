import { MailIcon, HomeIcon, PhoneCall } from "lucide-react"
import Form from "@/components/Form"

const Cotact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Ahoj 👋
            </div>
            <h1 className="h1 max-w-md mb-8">Poďme do toho spolu</h1>
            <p className="subtitle">Pripravený uviesť svoje nápady do života? Kontaktujte ma!</p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary"/>
              <div><a href="mailto:dejvid.tuma@gmail.com">dejvid.tuma@gmail.com</a></div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary"/>
              <div><a target="_blank" href="https://www.google.com/maps/place/908+41+%C5%A0a%C5%A1t%C3%ADn-Str%C3%A1%C5%BEe/@48.6392481,17.0562091,12z/data=!3m1!4b1!4m6!3m5!1s0x476ccebac39c8a9b:0x6b31a31839ad65ef!8m2!3d48.6386939!4d17.1430093!16s%2Fm%2F026h7lc?entry=ttu">Novoveská 898/74, Šaštín-Stráže, 90841</a></div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary"/>
              <div><a href="tel:+421944641938">+421 944641938</a></div>
            </div>
          </div>
          <Form/>
        </div>
      </div>
    </section>
  )
}

export default Cotact