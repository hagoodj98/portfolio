
import React from "react";
import Image from "next/image";
import styles from './styles/home.module.css'
import Button from "./components/Button";
import background from '../public/Vector 12 (4).svg'
import me from '../public/male-placeholder-image.jpeg'

export default function Home() {
    return (
        <main>
            <h1>huh</h1>
            <div className="container-fluid">
              <div className={styles.backgroundwave}>
                <Image src={background}  alt="this is a background"/>
                <div>
                  <h1>Portfilio</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae consequuntur harum. Quia perspiciatis adipisci, minus fugit minima nemo eos unde suscipit ipsum, cumque, distinctio qui dolorum amet ut illum?</p>
                  <Button />
                </div>
                <div>
                  <Image src={me} alt="this is me"/>
                </div>
              </div>
            </div>
        </main>
    );
  }