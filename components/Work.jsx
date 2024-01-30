'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import ProjectCard from "./ProjectCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const projectData = [
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Moje aktuálne portfólio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laudantium?',
        link: '/',
        github: 'https://github.com/DawidTu',
    },
    {
        image: '/work/2.png',
        category: 'javascript',
        name: 'Barber Shop',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laudantium?',
        link: '/',
        github: 'https://github.com/DawidTu',
    },
    {
        image: '/work/3.png',
        category: 'javascript',
        name: 'Moje prvé skušobné portfólio',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laudantium?',
        link: '/',
        github: 'https://github.com/DawidTu',
    },
    {
        image: '/work/4.png',
        category: 'next js',
        name: 'Martin čulen portfólio webstránka',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, laudantium?',
        link: '/',
        github: 'https://github.com/DawidTu',
    },
]

const Work = () => {

  return ( 
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                <h2 className="section-title mb-4">Posledný projekt</h2>
                <p className="subtitle mb-8 mr-6">
                    Postavil som rôzne rôzne projekty, aby vyhovovali rôznym aspektom podnikania klienta. Ak chcete vidieť viac ukážok mojej práce, 
                    ako sú tie, ktoré sú prezentované na tejto stránke,<span className="text-white"> kontaktujte ma!</span></p>
                <Link href='/projects'>
                    <Button>Všeky projekty</Button>
                </Link>
            </div>
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                <Swiper 
                className="h-[480px]" 
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                >
                    {projectData.slice(0, 4).map((project, index) => {
                        return(
                            <SwiperSlide key={index}>
                                <ProjectCard project={project}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div> 
        </div>
    </section>
  )
}

export default Work



