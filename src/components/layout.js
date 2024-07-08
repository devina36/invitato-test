import React, { useEffect } from 'react';
import './layout.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Layout({ children }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <div>{children}</div>;
}
