import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {

    const router = useRouter();

    useEffect(()=>{
        
        setTimeout(()=>{
            router.push('/')
        },5000)

    },[])


    return (
        <div>
            <p>Error 404 , This Page is not Found </p>
            <Link href='/'>Go Home</Link>
        </div>
    );
}
 
export default NotFound
