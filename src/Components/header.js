import {React, Component} from "react";
import '../CSS/header.css';

class Header extends Component{

    render(){
        return(
            <header>
                <div className="container menu">
                    <ul>
                        <li class="logo"><img src="../image-lienhe/logo.png" alt="logo" /></li>
                        <li id="menucon"><a href="../HTML/trangchu.html">TRANG CHỦ</a></li>
                        <li id="menucon"><a href="../HTML/gioithieu.html">GIỚI THIỆU</a></li>
                        <li id="menucon"><a href="../HTML/sanpham.html">SẢN PHẨM</a></li>
                        <li id="menucon"><a href="../HTML/tintuc.html">TIN TỨC</a></li>
                        <li id="menucon"><a href="../HTML/doitac.html">ĐỐI TÁC</a></li>
                        <li id="menucon"><a href="../HTML/lienhe.html">LIÊN HỆ</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}
export default Header;
