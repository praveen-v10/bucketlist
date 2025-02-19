import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div>
       <div className="">
       {/* <div className='w-[60%] h-screen '>

</div> */}
        <div className="">
        <Image
      src="https://firebasestorage.googleapis.com/v0/b/gift-c0314.appspot.com/o/MacBook%20Air%20-%205%20(2).png?alt=media&token=52c66a72-acd2-4837-b068-ce161c2d2869"
      alt="Picture of the author"
      width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: 'auto' }}
    />
          {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <div
              className="bg-white bg-opacity-90 p-6 rounded-lg flex justify-center items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <h1 className="text-black text-4xl text-center font-semibold font-PS select-none  ">
                We are ready to collaborate
              </h1>
            </div>

            <div
              className="mx-auto mt-4 p-6 pt-8 w-[700px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-400"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <p className=" text-xl text-white font-bold">
                Elevate Your Commute: Exclusive Taxi Partnership for IT
                <br />
                Professionals
              </p>
              <p className="text-white text-lg pt-10">
                Upgrade your daily commute with our dedicated taxi service
                tailored for IT professionals. Enjoy better prices and superior
                service, ensuring a hassle-free journey to and from work. Say
                goodbye to transportation worries and hello to a smoother, more
                efficient way to travel. Join us in enhancing your team&apos;
                commuting experience today!
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Hero
