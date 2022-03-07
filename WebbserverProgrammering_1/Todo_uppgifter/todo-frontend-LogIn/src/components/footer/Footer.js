import {FaFacebook, FaComment, FaInstagram, FaTwitter} from "react-icons/fa";

// all the layout is done with Tachyons.io

export default function Footer() {

    return (
        <footer className="pv4 ph3 ph5-ns tc">
            <a className="f3 link dim dark-pink dib h1 w2 br-100 mr4 " href="#" title="">
                <FaFacebook/>
            </a>
            <a className="f3 link dim  dark-pink  dib h1 w2 br-100 mr4 " href="#" title="">
                <FaInstagram/>
            </a>
            <a className="f3 link dim dark-pink dib br-100 h1 w2 mr4 " href="#" title="">
                <FaTwitter/>
            </a>
            <a className="f3 link dim gray dark-pink br-100 h1 w2 mr4 " href="#" title="">
                <FaComment/>
            </a>
            <div className="tc mt4">
                <a href="#" className="f5 link dim dark-pink dib mr3 mr4-ns">Help</a>
                <a href="#" className="f5 link dim dark-pink dib mr3 mr4-ns">Send feedback</a>
                <a href="#" className="f5 link dim dark-pink dib mr3 mr4-ns">About Us</a>
            </div>
            <h6 data-testid='author'  className="tc f7 link dark-pink dib pv1">Copyright © 2022 by Ursula Vallejo Janne</h6>
        </footer>
    )
}