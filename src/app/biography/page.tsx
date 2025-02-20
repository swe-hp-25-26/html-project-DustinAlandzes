'use client'
import MuscleGirls from '../../../public/musclegirls.png'
import Hiking from '../../../public/hiking.jpg'
import Image from 'next/image'

export default function Biography() {
  return <section>
    <h1>Biography</h1>
    <p>I was born in Las Vegas, Nevada and have lived in Texas for over 10 years.</p>
    <p>I worked in healthcare for over 3 years building an electronic health record.</p>
    <Image src={Hiking} alt={"Hiking"}/>
    <Image src={MuscleGirls} alt={"Muscle Girls"}/>
  </section>
}
