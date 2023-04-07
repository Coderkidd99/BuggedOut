import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { CiPaperplane, CiReceipt } from "react-icons/ci";


export const NavbarData = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <AiIcons.AiFillBook />,
      cName: "nav-text"
    },
    {
      title: "Developers",
      path: "/developers",
      icon: <CiPaperplane />,
      cName: "nav-text"
    },
    {
      title: "Insights",
      path: "/insights",
      icon: <CiReceipt />,
      cName: "nav-text"
    }
  ]
  