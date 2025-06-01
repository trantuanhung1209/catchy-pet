import { FaArrowUp } from 'react-icons/fa6';
import './Footer.css';
import logoFooter from '/images/svg/logo-footer.webp';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaYoutube } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const socialMediaLinks = [
    { icon: <FaFacebookF />, link: 'https://www.facebook.com/' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/' },
    { icon: <FaTwitter />, link: 'https://www.twitter.com/' },
    { icon: <FaTiktok />, link: 'https://www.tiktok.com/' },
    { icon: <FaYoutube />, link: 'https://www.youtube.com/' },
];

export const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div className="scroll-top w-[40px] h-[40px] fixed bottom-[50px] right-[50px] bg-[#f9a529] hover:bg-[#b57310] p-[5px] rounded-full flex justify-center items-center cursor-pointer z-50">
                    <FaArrowUp className="text-white text-[26px]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                </div>
                <div className="inner-top pt-[60px]">
                    <div className="container max-w-[1340px] mx-auto">
                        <div className="inner-logo flex justify-center items-center mb-[50px]">
                            <img src={logoFooter} alt="logo" />
                        </div>
                        <nav className="inner-menu mb-[30px]">
                            <ul className="flex justify-center items-center">
                                <li>
                                    <NavLink to="/" className="text-[18px] px-[30px] text-white hover:text-[#b57310]">Trang chủ</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/spa" className="text-[18px] px-[30px] text-white hover:text-[#b57310]">Dịch vụ Spa</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products" className="text-[18px] px-[30px] text-white hover:text-[#b57310]">Sản phẩm</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/new" className="text-[18px] px-[30px] text-white hover:text-[#b57310]">Tin tức</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="text-[18px] px-[30px] text-white hover:text-[#b57310]">Liên hệ</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/book" className="text-[18px] px-[30px] text-white hover:text-[#b57310]">Đặt lịch</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="inner-social">
                            <ul className="flex justify-center items-center gap-[40px]">
                                {socialMediaLinks.map((socialLink, index) => (
                                    <li key={index}>
                                        <a href={socialLink.link} target="_blank" rel="noopener noreferrer" className="text-[20px] font-bold px-[15px] text-white hover:text-[#b57310]">{socialLink.icon}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="inner-copyright">
                    <div className="container max-w-[1340px] mx-auto">
                        <p className="text-[16px] text-center text-white">Copyright © 2025 By <b>Hune</b>. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}