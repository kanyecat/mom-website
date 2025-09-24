import styles from './style';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Navbar, Home, ExperimentsSketches, About, Footer, NotFound, 
  Exhibitions, Performances, Lectures, DefenseMechanism } from './components';
import { BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Routes, 
  Route, 
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<ExperimentsSketches />} />
        <Route path="/about" element={<About />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
        <Route path="/performances" element={<Performances />} />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

const Root = () => {
  return (
    <AnimatePresence mode='wait'>
      <div className='bg-primary w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} z-20`}>
            <Navbar />
          </div>
        </div>
        <div className='w-full z-0'>
          <div className='bg-cover fixed top-0 right-0 bg-hanji-white w-full h-[100vh] z-0'/>
          <Outlet />
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} z-20`}>
            <Footer />
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default App;