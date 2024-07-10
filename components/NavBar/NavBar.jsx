import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link';

// ----Importing Icons----------------------// 
import {MdNotifications} from 'react-icons/md';
import {BsSearch} from "react-icons/bs";
import {CgMenueLeft, CgMenueRight} from "react-icons/cg";

//-------- Intranal Import ------------------// 
import Style from './NavBar.module.css';
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import {Button} from '../componentindex';
import images from '../../img';


const NavBar = () => {
  //-------- USESTATE COMPONENTS ---------// 
  const [discover, setdiscover] = useState(false);
  const [help, sethelp] = useState(false);
  const [notification, setnotification] = useState(false); 
  const [profile, setprofile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover"){
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center"){
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    }else{
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = (e) => {
    if(!notification){
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    }else{
      setNotification(false);
    }
    
  };

  const openProfile = () => {
    if(!profile){
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    }else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if(!openSideBar){
      setOpenSideMenu(true);
    }else{
      setOpenSideMenu(false);
    }
  }

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image 
            src={images.logo} 
            alt="NFT MARKET PLACE" 
            width={100} 
            height={100}/>
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT"/>
              <BsSearch onClick={()=>{}} className={Style.search_icon}/>
            </div>
          </div>
        </div>

        {/*// End of Left Section */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            {/* Discover Menu */}
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
                <div className={Style.navbar_container_right_discover_box}>
                 <Discover/>
              </div>
            )}            
          </div>
          {/* Help Center */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e)=> openMenu(e)}>Help Center</p>
            {help &&(
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          {/* Notification */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications 
            className={Style.notify} 
            onClick={() => openNotification}
            />
            {notification && <Notification/>}
          </div>
          {/* Create Button Section */}
          <div className={Style.navbar_container_right_button}>
            <Button btnText="Create"/>
          </div>

            {/* User Profile */}
            <div className={Style.navbar_container_right_profile_box}>
              <div className={Style.navbar_container_right_profie}>
                <Image 
                 src={images.user1}
                 alt="Profile" 
                 width={40} 
                 height={40} 
                 onClick={()=> openProfile()}
                 className={Style.navbar_container_right_profie}
                 />
                 {profile && <Profile/>}
              </div>
            </div>

            {/* Menu Button */}
            <div className={Style.navbar_container_right_menuBtn}>
              <CgMenueRight className={Style.menuIcon}
                onClick={() => openSideBar()}
              />
            </div>
        </div>
      </div>

      {/* Sidebar Component */}
      {
        openSideMenu && (
          <div className={Style.SideBar}>
            <SideBar setOpenSideMenu={setOpenSideMenu}/>
          </div>
        )
      }
    </div>
  ); 
}

export default NavBar