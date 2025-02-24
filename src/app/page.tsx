'use client'

import HPLogo from "../../public/HP_Blue_RGB_150_MX.png";
import SolutionsArchitectProfessional from "../../public/aws-solutions-architect-professional.png";
import Image from "next/image";

export default function Home() {
  return <section id={"home"}>
    <p id={"home-dog-emoji"}>🐶</p>
    <Image src={HPLogo} alt={"HP Logo"} width={400}/>
    <Image src={SolutionsArchitectProfessional} alt={"Solutions Architect Professional"} width={400}/>
  </section>
}
