import React,{useState} from 'react'
import { Link } from 'react-router-dom'
// import {CaptainDataContext} from '../context/CaptainDataContext'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

const UserSignup = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [userData,setUserData] = useState({});



  const submitHandler =async (e) => {
    e.preventDefault();
    setUserData({
      fullname:{
        firstname:firstName,
        lastname:lastName
      },
      email,
      password,

    })
    console.log(userData)
    // const response = await axios.post('http://localhost:4000/captain/register',userData);
    if(response.status === 200){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token',data.token);
      navigate('/home');
    }
    setEmail('');
    setFirstName('');
    setLastName('');
    setPassword('');

  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <h3 className='text-lg font-medium mb-2'>What's Your Name</h3>
          <div className='flex gap-4 mb-5'>
            <input required className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base' type="text" placeholder='First name' value={firstName} onChange={(e)=>{
              setFirstName(e.target.value);
            }} />
            <input required className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base' type="text" placeholder='Last name' value={lastName} onChange={(e)=>{
              setLastName(e.target.value);
            }} />
          </div>
          <h3 className='text-lg font-medium mb-2'>What's Your Email?</h3>
          <input required className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base' type="email" placeholder='email@gmail.com' value={email} onChange={(e)=>{
              setEmail(e.target.value);
            }} />
          <h3 className='text-lg font-medium mb-2 mt-4'>Enter Password?</h3>
          <input required className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base' type="password" placeholder='Password' value={password} onChange={(e)=>{
              setPassword(e.target.value);
            }} />
  
          <button className='bg-[#6db480] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base mt-4'>Create Account</button>
        </form>
        <p className='text-center'>Already have a account? <Link to="/login" className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
      <p className='text-[10px] mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
      Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default UserSignup