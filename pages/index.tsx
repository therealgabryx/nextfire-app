import Link from 'next/link'

import Loader from '../components/Loader'
import toast from 'react-hot-toast';

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
      <div> 
        <button onClick={() => { toast.success('hello toast!') }}>
          Toast Me  
        </button> 
      </div>
    </main> 
  ) 
} 