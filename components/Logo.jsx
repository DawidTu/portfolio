'use client'
import Link from 'next/link'
import Magnetic from './Magnetic/index'

const Logo = () => {
  
  return (
    <Magnetic>
      <div className='text-3xl'>
          <Link href='/'>Dávid Tuma</Link>
      </div>
    </Magnetic>
  )
}

export default Logo