import React from 'react'
import ecoland from '../assets/ecolandnew.png'
const Body = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={ecoland} alt="/" />
        <div className='flex flex-col justify-center'>
          <p className='text-green-500 font-bold'>ECOLAND</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            CAPSTONE
          </h1>
          <p>
            EcoLand Platform Penyewaan Lahan untuk Bisnis Hijau di Indonesia. Proyek ini dibuat dengan tujuan memfasilitasi proses penyewaan tanah untuk usaha dengan kategori “Bisnis Hijau” di Indonesia.
          </p>
          <button className='bg-green-500 w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0'>CARI LAHAN</button>
        </div>

      </div>
    </div>
  )
}

export default Body;