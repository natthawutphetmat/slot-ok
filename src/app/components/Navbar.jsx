"use client";  // เพิ่มบรรทัดนี้ที่ด้านบนสุด

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
      
        <Link className="navbar-brand" href="/">
          <Image src="/img/logo.webp" alt="Logo" width={50} height={50} />
        </Link>

     
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                เกี่ยวกับเรา
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">
                บริการ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                ติดต่อเรา
              </Link>
            </li>

    
            <li className="nav-item">
              <Link className="btn btn-danger ms-3" href="/login">
                singIn
              </Link>
              <Link className="btn btn-warning ms-3" href="/login">
              singup
              </Link>
            </li>





          </ul>
        </div>
      </div>
    </nav>
  );
}
