import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div>
      <Image
      src="https://firebasestorage.googleapis.com/v0/b/gift-c0314.appspot.com/o/MacBook%20Air%20-%206%20(2).png?alt=media&token=55f9f398-24ef-45d4-9c63-20df43e44286"
      alt="Picture of the author"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
    />
    </div>
  )
}

export default About
