import Head from 'next/head'
import { Fragment } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../styles/Home.module.css'

export default function Home() {
  return (
    <Fragment>

      <Head>
        <title>Axion Open Source</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Footer />
    </Fragment>
  )
}
