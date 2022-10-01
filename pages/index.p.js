import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from "next/script";
import { useMediaQuery } from './useMediaQuery';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ApiUrl } from "./config";
import Data from "../public/Words.json";


function getRandom() {
  return Data[Math.floor(Math.random() * Data.length)]
}

function LoadGame(md, score, setScore, Game, setGame) {
  return <>
    <div className={styles.scorebox}>
      {score || 0}
    </div>
    <header className={styles.header}>
      <div className={styles.imgbox}>
        <Image width={50} height={50} src="https://img.icons8.com/color/48/000000/q-cute.png" />
      </div>
      <div className={styles.ques}>
        Choose Correct spelling or meaningful word.
      </div>
    </header>
    <main className={styles.main}>
      <div id="options">
        {Game == undefined && <button onClick={() => setGame(getRandom())}>Load</button>}
        {Game && Game["o"].map(v => {
          return <p style={{ fontSize: 30 }}>
            <input type="checkbox" style={{ width: 20, height: 30 }} onClick={() => { setGame(getRandom()) }} />
            <span style={{ marginLeft: 10 }}>{v}</span></p>
        })}
      </div>
    </main>
  </>
}

function HomePage(md, setGameState) {
  return (<>
    <div className="cartoon" style={{ width: "max-content", width: "100%", height: "max-content" }}>
      <header className={styles.header}>
        <h1>Spell IT</h1>
        <h3 style={{ marginTop: "5rem" }}>
          <strike>W</strike>Right
          <Image height={28} width={28} src="https://img.icons8.com/flat-round/64/000000/checkmark.png" />
        </h3>
      </header>
      <main className={styles.main}>
        <div className={styles.design} style={{ width: !md ? "50%" : "98%" }}>
          <div className={styles.playButton}>
            <div className={styles.playB} onClick={() => { setGameState("startgame") }}>
              Play
            </div>
          </div>
        </div>
      </main>
    </div>
  </>
  )
}


export default function Home() {
  const router = useRouter();
  const [gameState, setGameState] = useState();
  const [score, setScore] = useState();
  const [Game, setGame] = useState();
  const md = useMediaQuery(960);
  if (gameState == "startgame") {
    return LoadGame(md, score, setScore, Game, setGame);
  }
  return HomePage(md, setGameState);
}
