'use client'
import Link from "next/link";
import { Button } from './ui/button';
import { Download, Send } from "lucide-react";
import DevImg from "./DevImg";
import Badge from "./Badge";

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from 'react-icons/ri';
import Socials from "./Socials";

const Hero = () => {
   
  return (
    <section className='h-screen pt-16 xl:pt-28 bg-no-repeat bg-cover dark:bg-none'>
        <div className='container mx-auto'>
            <div className='flex gap-x-8 justify-around'>
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                    <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
                    <h1 className='h1'>Ahoj, volám sa David Tuma</h1>
                    <p id="headline" className="text-muted-foreground text-lg font-light max-w-[530px] mx-auto xl:mx-0 my-10">
                    a som začínajúci programátor na ceste za poznaním. 
                    Moja fascinácia kódovaním začala nedávno a som nadšený, že sa s vami môžem 
                    podeliť o svoje rozvíjajúce sa zručnosti. Preskúmajte moje portfólio, aby 
                    ste boli svedkami mojich skromných začiatkov a malých víťazstiev, ktoré poháňajú moju vášeň pre učenie.
                    </p>
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                        <Link href='/contact'>
                            <Button className="gap-x-2">Kontakt <Send size={18}/></Button>
                        </Link>
                    </div>
                    <div>
                        <Socials 
                        containerStyles='flex gap-x-6 justify-center xl:justify-start'
                        iconStyles='text-foreground text-[22px] hover:scale-150 transition ease-in-out'
                        />
                    </div>
                </div>


                <div className="hidden xl:flex relative">
                    <Badge 
                    containerStyles='absolute top-[24%] -left-[8rem]'
                    icon={ <RiBriefcase4Fill/> } 
                    endCountNum={1} 
                    badgeText='Rok skúseností'
                    />
                    <Badge 
                    containerStyles='absolute top-[80%] -left-[5rem]'
                    icon={ <RiTodoFill/> } 
                    endCountNum={4} 
                    badgeText='Projekty'
                    />
                    <Badge 
                    containerStyles='absolute top-[59%] -right-16'
                    icon={ <RiTeamFill/> } 
                    endCountNum={2} 
                    badgeText='Štastný klienti'
                    />
                    <DevImg 
                    containerStyles='w-[345px] h-[505px] bg-no-repeat relative bg-bottom '
                    imgSrc='/hero/developer.png'
                    imageStyles='rounded-xl'
                    />
                </div>
            </div>
            <p className="subtitle absolute right-3 bottom-24 rotate-90 hidden md:block">Skrolujte</p>
            <div className="hidden md:block absolute right-9 bottom-[4.5rem] animate-bounce">
                <RiArrowDownSLine className="text-2xl text-primary"/>
            </div>
        </div>
    </section>
  )
}

export default Hero