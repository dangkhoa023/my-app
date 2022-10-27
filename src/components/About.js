import React from 'react'

import DANGKHOA from '../image/KHOAA.jpg'
function About() {
  return (
    <div className="container-about">
    <div>
      <div className="title-heading">Sinh Viên Thực Hiện</div>
      <img
        className="image-about"
        src={DANGKHOA}
        alt="Nguyễn Trương Đăng Khoa avatar"
      />
    </div>

    <div className="container-desc__wrapper">
      <div className="container-desc">
        <p className="context">Name: Nguyễn Trương Đăng Khoa</p>
        <p className="context">MSSV: 46.01.104.086</p>
        <p className="context">Trường: ĐHSP TP.HCM</p>
        <p className="context">KHOA:CNTT</p>
      </div>
    </div>
  </div>
  )
}

export default About