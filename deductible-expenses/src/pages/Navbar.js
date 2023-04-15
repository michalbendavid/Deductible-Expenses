import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../context/auth.Context";

// import styles from "./Navbar.module.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  if (user)
    return (
      <nav className={styles.navbar}>
        <button onClick={logout}> Sign Out </button>
        <ul className={styles.navList}>
          <CustomLink href="/calender"> Calender</CustomLink>
          <CustomLink href="/form"> Form</CustomLink>
        </ul>
      </nav>
    );
}

function CustomLink({ href, children }) {
  const { asPath } = useRouter();
  const isActive = asPath === href;

  return (
    <li className={isActive ? styles.active : ""}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
}