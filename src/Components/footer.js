import React, { Component } from 'react'
import '../CSS/footer.css'

export default class Footer extends Component {
  render() {
    return (
        <footer style={{position: 'absolute'}}>
        <div class="contact-2">
            <ul id="contact-2-1">
                <li><h4>Thông tin chung</h4></li>
                <li><h3>CÔNG TY TNHH HOÀNG HOAN</h3></li>
                <li>
                    <img src=".../image-lienhe/phone-logo.png" alt="" />   
                    <p>0999.999.999</p>
                </li>
                <li>
                    <img src=".../image-lienhe/email-logo.png" alt=""/> 
                    <p>cskh@hoanghoan.vn</p>
                </li>
                <li>
                    <img src=".../image-lienhe/location-logo.png" alt="" /> 
                    <p>Số 1 Nguyễn Trãi, Thanh Xuân, Hà Nội</p>
                </li>
            </ul>
            <ul id="contact-2-2">
                <li><h4>Về chúng tôi</h4></li>
                <li><a href="../HTML/gioithieu.html">Giới thiệu</a></li>
                <li><a href="../HTML/sanpham.html">Sản phẩm</a></li>
                <li><a href="../HTML/tintuc.html">Tin tức</a></li>
                <li><a href="../HTML/doitac.html">Đối tác</a></li>
                <li><a href="../HTML/lienhe.html">Liên hệ</a></li>
            </ul>
            <ul id="contact-2-3">
                <li><h4>Kết nối với chúng tôi</h4></li>
                <li>
                    <img src="../image-lienhe/facebook.png" alt="" />
                    <img src="../image-lienhe/Zalo.png" alt="" />
                    <img src="../image-lienhe/mail.png" alt="" />
                </li>
                <li><img src="../image-lienhe/Layer 32.png" alt="" /></li>
            </ul>
        </div>
    </footer>
    )
  }
}

