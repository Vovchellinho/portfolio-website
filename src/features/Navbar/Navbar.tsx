import Image from "next/image";
import { ThemeToggle } from "./Navbar.components/ThemeToggle";
import { Link } from "./Navbar.components/Link";
import { Button } from "@shared/ui/Button";
import { Icon } from "@shared/ui/Icon";

import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles['Navbar']}>
      <Image
        src="/logos/logo.svg"
        alt="Logo of developer"
        width={12}
        height={21}
      />
      <div className={styles['Navbar-Menu']}>
        <ul className={styles['Navbar-MenuList']}>
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#work">Work</Link></li>
        </ul>
        <div className={styles['Navbar-Actions']}>
          <ThemeToggle />
          <Link href="https://github.com/Vovchellinho" target="_blank">
            <Icon icon="github" />
          </Link>
          <div className={styles['Navbar-ActionsBurger']} >
            <Icon icon="burger" />
          </div>
        </div>
        <div className={styles['Navbar-Contact']}>
          <Button href="https://github.com/Vovchellinho">Contact me</Button>
        </div>
      </div>
    </nav>
  );
};