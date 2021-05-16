import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/loginHome',
        icon: <AiIcons.AiFillHome />,
        cName: 'mainnav-text',
        
    },
    {
        title: '공지',
        path: '/loginHome/reports',
        icon: <IoIcons.IoIosPaper />,
        cName: 'mainnav-text',
      
    },
    {
        title: '강사',
        path: '/loginHome/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'mainnav-text',
  
    },
    {
        title: '수업',
        path: '/courses',
        icon: <IoIcons.IoMdPeople />,
        cName: 'mainnav-text',
    
    },
    {
        title: '원생',
        path: '/loginHome/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'mainnav-text',
        
    },
    {
        title: '상담',
        path: '/loginHome/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'mainnav-text',
     
    }
]
