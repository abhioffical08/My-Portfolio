import React from 'react';

const Footer = () => {
  return (
    <footer>
        <div class="top-footer">
            <p>Abhishek Vairagar .</p>
        </div>
        <div class="middle-footer">
            <ul class="footer-menu">
                <li class="footer_menu_list">
                    <a href="#home">Home</a>
                </li>
                <li class="footer_menu_list">
                    <a href="#about">About</a>
                </li>
                <li class="footer_menu_list">
                    <a href="#projects">Projects</a>
                </li>
                <li class="footer_menu_list">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
        <div class="footer-social-icons">
            <div class="icon" onclick="location.href='https://www.linkedin.com/in/abhishekvofficial-718644237/' "><i class="uil uil-linkedin-alt"></i></div>
                <div class="icon" onclick="location.href='https://github.com/abhioffical08' "><i class="uil uil-github-alt"></i></div>
                <div class="icon" onclick="location.href='https://www.instagram.com/vairagarabhi_008?utm_source=qr&igsh=NnM3NHo0cW1mcnBj' "><i class="uil uil-instagram"></i></div>
                <div class="icon" onclick="location.href='https://dribbble.com/Official_abhi08' "><i class="uil uil-dribbble"></i></div>
        </div>
        <div class="bottom-footer">
            <p>Copyright &copy; <a href="#home">Abhishek Vairagar</a> - All rights reserved</p>
        </div>
    </footer>

    // <footer className="footer">
    //   <p>&copy; 2024 Abhishek Vairagar. All rights reserved.</p>
    // </footer>
  );
};

export default Footer;
