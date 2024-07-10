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
  //-------- USESTATE COMPONENTS 
  const [discover, setdiscover] = useState(false);
  const [help, sethelp] = useState(false);
  const [notification, setnotification] = useState(false); 
  const [profile, setprofile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}></div>
    </div>
  )
}

export default NavBar

