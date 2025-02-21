'use client'
import Image from 'next/image'

import SM64Box from '../../../public/SM64_JP_Box.jpg'
import SSBMBox from '../../../public/SSBM_JP_Box.jpg'

export default function Page() {
  return <section>
    <h1>Portfolio</h1>
    <ul id={"portfolio-list"}>
      <li>
        <h2>Recreation of Super Mario 64 Star Select</h2>
        <a href={"https://alandzes.com/super-mario-64-star-select/"}><Image src={SM64Box} alt={"Super Mario 64 Box"} width={400}/></a>
        <p>https://github.com/DustinAlandzes/super-mario-64-star-select</p>
        <p>https://alandzes.com/super-mario-64-star-select/</p>
      </li>

      <li>
        <h2>Super Smash Brothers Melee rendered in the browser</h2>
        <Image src={SSBMBox} alt={"Super Smash Brothers Melee Box"} width={400}/>
        <p>https://github.com/DustinAlandzes/react-three-fiber-ssbm</p>
        <p>https://alandzes.com/react-three-fiber-ssbm/</p>
      </li>
    </ul>
  </section>
}
