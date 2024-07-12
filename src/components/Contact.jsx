import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-[150vh] bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="https://formsubmit.co/46cb8685652db8214a39fec20525c1c3" method="POST" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - <br /> maidkarshadow@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 placeholder-black' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] placeholder-black' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 placeholder-black' name="message" rows="10" placeholder='Message'></textarea>
            <button type='submit' className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Contact