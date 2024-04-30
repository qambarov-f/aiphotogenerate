import React from 'react'
import styles from "./styles.module.scss";
import Link from 'next/link';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';



function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/qambarov-f" target="_blank">
        <FaGithub style={{ fontSize: "30px" }} />
      </Link>

      <Link
        href="https://www.linkedin.com/in/feyruz-gambarov-3136b5247/"
        target="_blank"
      >
        <FaLinkedin style={{ fontSize: "30px" }} />
      </Link>
      <p>
        Made by <b>Feyruz Gambarov</b>
        <br />
        and, built with <b>Next.js</b>
      </p>
    </footer>
  );
}

export default Footer;