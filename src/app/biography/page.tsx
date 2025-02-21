'use client'
import MuscleGirls from '../../../public/musclegirls.png'
import Hiking from '../../../public/hiking.jpg'
import Image from 'next/image'

export default function Biography() {
  return <section>
    <h1>Biography</h1>
    <p id={"biography-text"}>I was born in Las Vegas, Nevada and currently live in Texas with my dog Ollie 🐶<br/><br/>
      I worked in healthcare for over 3 years building an electronic health record 📋
    </p>
    <Image src={Hiking} alt={"Hiking"} width={300}/>
    <Image src={MuscleGirls} alt={"Muscle Girls"} width={300}/>
  </section>
}
