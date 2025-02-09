import React from 'react';
import Image from "next/image";
import './Header.css';

export default function Header() {
  return (
    <div className="container">
      <div className="container text-center">
        <div className="d-flex justify-content-around">
          <div className="topa">
            <Image 
              src="/img/สล็อตเว็บตรง-1024x1024.webp" 
              width={1024} 
              height={1024} 
              className='top' 
              alt="สล็อตเว็บตรง" 
            />
            <div className="d-grid gap-2 mt-3">
              <a href="https://pgautofree.shop" className="btn btn-custom btn-login" type="button">
                <h4>เข้าสู่ระบบ</h4>
              </a>
            </div>
          </div>
          <div className="topb">
            <Image 
              src="/img/ฝาก-ถอน-Auto-1024x1024.webp" 
              width={1024} 
              height={1024} 
              className='top'  
              alt="ฝาก-ถอน" 
            />
            <div className="d-grid gap-2 mt-3">
              <a href="https://pgautofree.shop" className="btn btn-custom btn-register" type="button">
                <h4>สมัครสมาชิก</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
