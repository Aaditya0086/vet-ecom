import React from "react";
import { Link } from "react-router-dom";
import {FaInstagram, FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa"
import { motion } from "framer-motion";

export default function Footer() {

    const [move, setMove] = React.useState(false);

  return (
    <div>
      <footer>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-10 mx-auto">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <h2>Company</h2>
                            <ul>
                                <li>
                                    <Link to="/aboutUs">About</Link>
                                </li>
                                <li>
                                    <Link to="/aboutUs">About</Link>
                                </li>
                                <li>
                                    <Link to="/aboutUs">About</Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h2>Services</h2>
                            <ul>
                                <li>
                                    <Link to="/aboutUs">About</Link>
                                </li>
                                <li>
                                    <Link to="/aboutUs">About</Link>
                                </li>
                                <li>
                                    <Link to="/aboutUs">About</Link>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h2>Products</h2>
                            <ul>
                                <li>
                                    <Link to="/aboutUs">About</Link>
                                </li>
                                <li>
                                    <Link to="/aboutUs">About</Link>
                                </li>
                                <li>
                                    <Link to="/aboutUs">About</Link>
                                </li>
                        
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <h2>Follow Us</h2>
                            <div className="row">
                                <div className="col-3 mx-auto my-4">
                                    <a href="https://www.instagram.com/accounts/login/?" target={"_blank"} rel="noreferrer">
                                     <motion.div animate={{rotate: [0, 0, 0, 360] }} transition={{repeat: Infinity, duration: 4 }} whileHover={{scale:1.3}}>
                                     <FaInstagram color={'purple'} size={'3.5rem'}/>
                                     </motion.div>
                                    </a>
                                </div>
                                <div className="col-3 mx-auto my-4">
                                    <a href="https://www.facebook.com" target={"_blank"} rel="noreferrer">
                                    <motion.div whileHover={{scale:1.3}}>
                                        <FaFacebook color={'darkblue'} size={'3.5rem'}/>
                                        </motion.div>
                                    </a>
                                </div>
                                <div className="col-3 mx-auto my-4">
                                    <a href="https://www.youtube.com" target={"_blank"} rel="noreferrer">
                                    <motion.div animate={{rotate: [0, 0, 0, 360] }} transition={{repeat: Infinity, duration: 4 }} whileHover={{scale:1.3}}>
                                        <FaYoutube color={'red'} size={'3.5rem'}/>
                                        </motion.div>
                                    </a>
                                </div>
                                <div className="col-3 mx-auto my-4">
                                    <a href="https://www.twitter.com" target={"_blank"} rel="noreferrer">
                                    <motion.div animate={{ y: move ? 1 : -1}} transition={{ type: "spring", bounce: 55}} whileHover={{scale:1.3}} onClick={() => {
                                        setMove(!move);
                                    }}>
                                    <FaTwitter color={'blue'} size={'3.5rem'}/>
                                    </motion.div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="mt-5">
                <p className="main-hero-para text-center">Copyright @ 2022 Megavet. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}
