import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';


export const getStaticProps = async() => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return({
    props:{devs:data}
  }
  )

}

const Team = ({devs}) => {
    return (
    <>
    <Head>
      <title>Team | Knexta</title>
    </Head>
    <div>
    <h1>Team of Developers</h1>

    {devs.map((dev)=>(
      <Link href={`/devs/${dev.id}`} key={dev.id}>
        <h2>{dev.name}</h2>
      </Link>
    ))}

    </div>
    </>
    );
}
 
export default Team;