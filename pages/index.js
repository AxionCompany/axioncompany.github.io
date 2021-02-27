import Head from 'next/head'
import { Fragment, useEffect, useState } from "react";
import About from '../components/about';
import Contributors from '../components/contributos';
import Cover from '../components/cover';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import gitApi from "./api/github-api";
import "../styles/Home.module.css";

export default function Home() {
  const [githubData, setGithubData] = useState([]);
  useEffect(async () => {
    let response = await gitApi("repos");
    if (response) {
      console.log(response);
    } else { console.log('error') }
  }, []);

  return (
    <Fragment>

      <Head>
        <title>Axion Open Source</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Cover />
      <Projects /> 
      <Contributors githubData={githubData}/>
      <About />
    </Fragment>
  )
}
