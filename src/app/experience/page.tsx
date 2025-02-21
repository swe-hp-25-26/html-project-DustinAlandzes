'use client'
import Image from 'next/image'
import HPLogo from '../../../public/HP_Blue_RGB_150_MX.png'
import DrChronoLogo from '../../../public/drchrono_logo_charcoal.png'
import LegalistLogo from '../../../public/legalist_dark.png'

export default function Experience() {
  return <section>
    <h1>Experience</h1>
    <ul id={"experience-list"}>
      <li>
        <a href={"https://hp.com/"}>
          <Image src={HPLogo} alt={"HP Logo"} height={100}/>
        </a>
        HP
        <small>January 2025 - <strong>Now</strong></small>
      </li>
      <li>
        <a href={"https://drchrono.com/"}>
          <Image src={DrChronoLogo} alt={"DrChrono Logo"} height={100}/>
        </a>
        DrChrono
        <small>February 2020 - November 2023</small>
      </li>
      <li>
        <a href={"https://legalist.com"}>
          <Image src={LegalistLogo} alt={"Legalist Logo"} height={ 100}/>
        </a>
        Legalist
        <small>April 2019 - September 2019</small>
      </li>
    </ul>
  </section>
}
