import React from 'react';
import {FaLinkedin, FaInstagram, FaTelegram, FaGithub} from 'react-icons/fa';
import {ListNetworks,} from './Networksytled';

const socialMedias = [
  {
    id:'linkedin',
    icon: <FaLinkedin />,
    link:'https://www.linkedin.com/in/luiz-anderson-11b097220/'
  },
  {
    id:'instagram',
    icon: <FaInstagram />,
    link:'https://www.instagram.com/anderson.dev22/'
  },
  {
    id:'github',
    icon: <FaGithub />,
    link:'https://github.com/AndersonDev22/'
  },
  // {
  //   id:'telegram',
  //   icon: <FaTelegram />,
  //   link:'https://www.linkedin.com/in/luiz-anderson-11b097220/'
  // },
  
  
];

const Networks: React.FC = () => {

  return(
    
    <ListNetworks>
      
    {
      socialMedias.map(media => (
        <a key={media.id} href={media.link} target="_blank" rel="noopener noreferrer">
          {media.icon}
        </a>
      ))
    }    
      
    </ListNetworks>
 
 );
}
export default Networks;