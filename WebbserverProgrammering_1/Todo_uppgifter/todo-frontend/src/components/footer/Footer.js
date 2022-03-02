import {FaFacebook, FaComment, FaInstagram, FaTwitter} from "react-icons/fa";

// all the layout is done with Tachyons.io

export default function Footer() {

    return (
        <footer className="pv4 ph3 ph5-ns tc">
            <a className="f2 link dim yellow dib h1 w2 br-100 mr4 " href="#" title="">
                <FaFacebook/>
            </a>
            <a className="f2 link dim  yellow  dib h1 w2 br-100 mr4 " href="#" title="">
                <FaInstagram/>
            </a>
            <a className="f2 link dim yellow dib br-100 h1 w2 mr4 " href="#" title="">
                <FaTwitter/>
            </a>
            <a className="f2 link dim gray yellow br-100 h1 w2 mr4 " href="#" title="">
                <FaComment/>
            </a>
            <div className="tc mt4">
                <a href="#" className="f4 link dim yellow dib mr3 mr4-ns">Help</a>
                <a href="#" className="f4 link dim yellow dib mr3 mr4-ns">Send feedback</a>
                <a href="#" className="f4 link dim yellow dib mr3 mr4-ns">Privacy</a>
                <a href="#" className="f4 link dim yellow dib">Terms</a>
            </div>
            <h6 className="tc f6 link yellow dib pv4">Copyright © 2022 by Ursula Vallejo Janne</h6>
        </footer>
    )
}