import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import pfp from "../public/pfp.jpg";

export default function Home() {
  return (
    <div>
      <Image src={pfp} alt="Uma foto minha!!!!" width={200} height={200}/> 
      <h1>João Victor Rocha Fernanandes</h1>
      <p>Me chamo João, gosto de igrejas com telhado pontudo, risotto e o poeta inglês John Keats. 
        Programo aplicações full-stack, sei usar frameworks, desbloqueio iPhone, troco chuveiro elétrico e faço edições de vídeo/imagem.
        Se conecte comigo em outras redes:<br>
        </br> <Link href="https://github.com/naoehcleber"> Github</Link><br>
        </br>
        <Link href="www.linkedin.com/in/joão-victor-rocha-980a12290">LinkedIn</Link>
      </p>
    </div>
  );
}
