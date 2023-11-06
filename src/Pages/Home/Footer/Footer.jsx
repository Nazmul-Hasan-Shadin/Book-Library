import React from 'react';

const Footer = () => {
    return (
        <footer className="footer my-10 grid-rows-2 p-10 bg-neutral text-neutral-content rounded-xl">
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover  dark:text-white   "> Book Sell </a> 
          <a className="link link-hover  dark:text-white ">Free Borrowed Book</a> 
          <a className="link link-hover  dark:text-white "> Subscription </a> 
          <a className="link link-hover  dark:text-white ">Education </a>
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover  dark:text-white ">About us</a> 
          <a className="link link-hover  dark:text-white ">Contact</a> 
          <a className="link link-hover  dark:text-white ">Jobs</a> 
          <a className="link link-hover  dark:text-white ">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover  dark:text-white ">Terms of use</a> 
          <a className="link link-hover  dark:text-white ">Privacy policy</a> 
          <a className="link link-hover  dark:text-white ">Cookie policy</a>
        </nav> 
        <nav>
          <header className="footer-title">Social</header> 
          <a className="link link-hover  dark:text-white ">Twitter</a> 
          <a className="link link-hover  dark:text-white ">Instagram</a> 
          <a className="link link-hover  dark:text-white ">Facebook</a> 
          <a className="link link-hover  dark:text-white ">Github</a>
        </nav> 
        <nav>
          <header className="footer-title">Explore</header> 
          <a className="link link-hover  dark:text-white ">Features</a> 
          <a className="link link-hover  dark:text-white ">Enterprise</a> 
          <a className="link link-hover  dark:text-white ">Security</a> 
          <a className="link link-hover  dark:text-white ">Pricing</a>
        </nav> 
        <nav>
          <header className="footer-title">Apps</header> 
          <a className="link link-hover  dark:text-white ">Mac</a> 
          <a className="link link-hover  dark:text-white ">Windows</a> 
          <a className="link link-hover  dark:text-white ">iPhone</a> 
          <a className="link link-hover  dark:text-white ">Android</a>
        </nav>
      </footer>
    );
};

export default Footer;