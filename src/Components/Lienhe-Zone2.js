import React, { Component } from 'react'
import '../CSS/body.css'

export default class LienheZone2 extends Component {
  render() {
    return (
        <section className="container-fluid zone2">
            <div className="zone2-nd">
                <img src="../image-lienhe/sp-1.jpg" alt="" />
                <form action="" method="post">
                    <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
                    <input type="text" placeholder="Họ tên" />
                    <input type="email" placeholder="Email" />
                    <input type="tel" placeholder="Số điện thoại" />
                    <input type="text" placeholder="Nội dung" />
                    <button>Gửi</button>
                </form>
            </div>
    </section>
    )
  }
}
