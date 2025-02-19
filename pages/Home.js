
import React from 'react'
import Image from 'next/image'

function Home() {
  return (
    <>
      {/* <Hero/>
      <About/> */}
<div>
        <Image
        src="/assets/logo/im.png"
        alt="Picture of the author"
        width={0}
    height={0}
    sizes="100vw"
    style={{ width: '100%', height: 'auto' }}
      />
</div>
    </>
  )
}

export default Home
