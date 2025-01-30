"use client";
import './Footer.css';
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGift,
  faUserPlus,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; // นำเข้า CSS แยกไฟล์

export default function Footer() {
  return (
    <footer id="footer" className="footer-wrapper bg-dark text-light mt-5 pt-4">
      {/* เมนูสำหรับมือถือ */}
      <div className="menu-mobile shadow-lg">
        <div className="menu-mobile-row">
          <Link href="/" className="menu-mobile-btn">
            <FontAwesomeIcon icon={faHome} />
            <p>หน้าแรก</p>
          </Link>
        </div>
        <div className="menu-mobile-row">
          <Link href="https://t.ly/AZZ" className="menu-mobile-btn">
            <FontAwesomeIcon icon={faGift} />
            <p>โปรโมชั่น</p>
          </Link>
        </div>
        <div className="menu-mobile-row">
          <Link href="https://t.ly/AZZ" className="menu-mobile-btn">
            <FontAwesomeIcon icon={faUserPlus} />
            <p>สมัครสมาชิก</p>
          </Link>
        </div>
        <div className="menu-mobile-row">
          <Link href="https://t.ly/AZZ" className="menu-mobile-btn">
            <FontAwesomeIcon icon={faPlay} />
            <p>ทดลองเล่น</p>
          </Link>
        </div>
        <div className="menu-mobile-row">
          <Link href="https://line.me/ti/p/@bfgun" className="menu-mobile-btn">
            <FontAwesomeIcon icon={faLine} />
            <p>ติดต่อเรา</p>
          </Link>
        </div>
      </div>

      {/* เมนูหลัก Footer */}
      <div className="footer-widgets text-center">
        <div className="container">
          <div className="row">
            {/* เมนู */}
            <div className="col-md-4">
              <h5 className="text-uppercase fw-bold">เมนู</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/sitemap_index.xml">Sitemap</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">นโยบายความเป็นส่วนตัว</Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">ข้อกำหนด และเงื่อนไข</Link>
                </li>
                <li>
                  <Link href="/contact-us">ติดต่อเรา</Link>
                </li>
                <li>
                  <Link href="/blog">บทความ</Link>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <div className="col-md-4">
              <Link href="/">
                <img
                  src="/img/logo.webp"
                  alt="hazennd.org"
                  width={120}
                  height={120}
                  className="footer-logo"
                />
              </Link>
            </div>

            {/* ข้อมูลเว็บไซต์ */}
            <div className="col-md-4">
              <h5 className="text-uppercase fw-bold">hazennd.org</h5>
              <p>
                มาสมัครเล่นเว็บคลิ๊กง่ายๆ สล็อตเว็บตรง PG SLOT เว็บตรง
                ไม่มีขั้นต่ำ ทางเข้า API แท้
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom text-center py-3 mt-3">
        <p className="m-0">© 2025 hazennd.org. All rights reserved.</p>
      </div>

      {/* ปุ่มกลับขึ้นด้านบน */}
      <a href="#top" className="back-to-top">
        ↑ กลับขึ้นด้านบน
      </a>
    </footer>
  );
}
