import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";


const Header = () => {
    return (
        <>

            <Link href='/'><Image src='/logo.jpg' alt='logo' width={150} height={115} /></Link>
            <Link href='/services'>Services</Link>
            <Link href='devs'>Developers</Link>
            <Link href='about'>About</Link>
            <Link href='contact'>Contact</Link>
            
        </>
    );
}
 
export default Header;