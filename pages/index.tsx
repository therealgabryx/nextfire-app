import Link from 'next/link'

export default function Home({ }) {
  return (
    <main>
      <h1>Home</h1>
      <div>
        <Link prefetch={false} href={{
          pathname: '/[username]',
          query: { username: 'gabryx' }
        }}> 
          <a>Gabryx's Profile</a>
        </Link>
      </div> 
    </main>
  ) 
} 