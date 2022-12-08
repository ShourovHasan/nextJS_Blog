import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import PostCard from '../Components/PostCard/PostCard'
import News from './news'
// import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  return (
    <div className='my-20'>
      <Banner></Banner>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 m-10">
        {
          posts.map(post =>             
            <div
              key={post.id}
              post={post}
              className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-center justify-center">{post.title}</h2>
                <p className="text-justify">{post.body}</p>                
            </div>
        </div>)
        }
      </div>
      <Link href={'/posts'} className='flex justify-center mb-5'>
        <button className="btn btn-primary">See More</button>
      </Link>
      <Footer></Footer>
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      posts: data
    }
  }
}