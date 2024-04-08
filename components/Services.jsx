import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
        title: 'Webový Vývoj',
        description: 'Od jednoduchých stránok až po komplexné webové aplikácie, budujem digitálne prostredie, ktoré odráža vašu jedinečnosť.',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8}/>,
        title: 'Responsívny Design',
        description: 'Zabezpečujem, aby vaša webová stránka fungovala na rôznych zariadeniach, od počítačov po mobilné telefóny.',
    },
    {
        icon: <Gem size={72} strokeWidth={0.8}/>,
        title: 'Optimalizácia a SEO',
        description: 'Zlepšujem výkon stránky a pomáham zvyšovať jej viditeľnosť vo vyhľadávačoch.',
    },
];

const Services = () => {
  return (
    <section className='my-36'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>Moje služby</h2>
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {servicesData.map((item, index) => {
                    return(
                        <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className='w-[140px] h-[80px] bg-slate-300 dark:bg-background flex justify-center items-center'>{item.icon}</div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4'>{item.title}</CardTitle>
                                <CardDescription className='text-lg'>{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default Services