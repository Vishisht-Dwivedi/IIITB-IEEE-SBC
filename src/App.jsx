import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Page from './components/Page/Page'
import Events from './components/Events/Events'
import Teams from './components/Teams/Teams'
import Students from './components/students/students'
import Join from './components/Join/Join'
import Footer from './components/Footer/Footer'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const App = () => {
  return (
    <>
      <main>
        <Page />
        <Navbar />
        <Home />
        <About />
        <Events />
        <Teams />
        <Students />
        <Join />
      </main>
      <Footer />
    </>
  )
}

export default App