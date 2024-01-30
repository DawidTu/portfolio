import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Nav from './Nav';
import Link from 'next/link';
import Socials from './Socials';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer'/>
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <h1 className='text-center text-4xl'><Link href='/'>David Tuma</Link></h1>
            <Nav 
            containerStyles='flex flex-col items-center gap-y-6'
            linkStyles='text-2xl'
            />
          </div>
            <Socials 
            containerStyles='flex gap-x-4'
            iconStyles='text-2xl'
            />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav