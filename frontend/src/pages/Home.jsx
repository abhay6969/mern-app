import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
        <div className="h-screen w-full flex flex-col bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-8 justify-between ">
        <img className='w-16 ml-8' src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcLzhGbTh4cU5SZGZUVjUxYVh3bnEyLnN2ZyJ9:weare:F1cOF9Bps96cMy7r9Y2d7affBYsDeiDoIHfqZrbcxAw?width=1200&height=417" alt="" />
        <div className="bg-white pb-8 py-4 px-4 flex flex-col mt-auto items-center">
            <h2 className='text-[30px] font-semibold'>Get Started with Uber</h2>
            <Link to ="/login" className='text-center w-full bg-black py-3 rounded-lg mt-5 text-white'>Continue</Link>
        </div>
        </div>
  )
}

export default Home