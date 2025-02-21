'use client'
import Image from 'next/image'

import SM64Box from '../../../public/SM64_JP_Box.jpg'
import SSBMBox from '../../../public/SSBM_JP_Box.jpg'
import GithubMarkLogo from '../../../public/github-mark.png'

export default function Page() {
  return <section>
    <h1>Portfolio</h1>
    <ul id={"portfolio-list"}>
      <li>
        <h2>
          Recreation of Super Mario 64 Star Select
          <a href={"https://github.com/DustinAlandzes/super-mario-64-star-select"} className={"code-link"}>
            <Image src={GithubMarkLogo} alt={"Github Link for SM64"} width={25}/></a>
        </h2>
        <a href={"https://alandzes.com/super-mario-64-star-select/"}>
          <Image src={SM64Box} alt={"Super Mario 64 Box"} width={400}/>
        </a>
      </li>

      <li>
        <h2>
          Super Smash Brothers Melee models in the browser
          <a href={"https://github.com/DustinAlandzes/react-three-fiber-ssbm"} className={"code-link"}>
            <Image src={GithubMarkLogo} alt={"Github Link for SSBM"} width={25}/>
          </a>
        </h2>
        <a href={"https://alandzes.com/react-three-fiber-ssbm/"}>
          <Image src={SSBMBox} alt={"Super Smash Brothers Melee Box"} width={400}/>
        </a>
      </li>
    </ul>
  </section>
}
