import Head from 'next/head'
import { Fragment } from 'react';
import About from '../components/about';
import Contributors from '../components/contributos';
import Cover from '../components/cover';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment>

      <Head>
        <title>Axion Open Source</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Cover />
      <Projects /> 
      <Contributors />
      <About />
    </Fragment>
  )
}
