import React, {useState,useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
//------- Import Icons ---------//
import {MdNotifications} from 'react-icons/md';
import {BsSearch} from 'react-icons/bs';
import {CgMenueLeft, CgMenuRight} from 'react-icons/cg';

//Internal Import 
import Style from "./NavBar.module.css"; 
import {Discover, HelpCenter,Notification, Profile, SideBar} from './index';
import {Button} from "../componentindex";
import images from "../../img";


const NavBar = () => {
  //-------- Use State Components
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);s
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) =>{
    const btnText = e.target.innerText;
    if(btnText == "Discover"){
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center"){
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image 
              src={images.logo} 
              alt="NFT MARKET PLACE" 
              width={100} 
              height={100}
            />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className="Style.navbar_container_left_box_input_box">
              <input type='text' placeholder="Search NFT"/>
              <BsSearch onClick={()=>{}} className={Style.search_icon}/>
            </div>
          </div>
        </div>

        {/*//END OF LEFT SECTION */}

        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            
            {/*--------- DISCOVER MENU ---------*/}
            <p onClick={(e)=> openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
              <Discover />
            </div>
            )}            
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar