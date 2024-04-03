import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Magnetic from './Magnetic/index';

const links = [
  { path: '/', name: 'domov'}, 
  { path: '/projects', name: 'projekty'},
  { path: '/contact', name: 'kontakt'},
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();

  return ( 
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Magnetic key={index}>
          <Link
            id="nav-items" 
            href={link.path}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{y: '-100%'}}
                animate={{y: 0}}
                transition={{type: 'tween'}}
                layoutId='underline'
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        </Magnetic>
      ))}
    </nav>
  )
}

export default Nav;
