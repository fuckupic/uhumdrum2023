import React from 'react'
import Masonry from 'react-masonry-css'
import styles from './Portfolio.module.css'

const Team = () => {
  const teamMembers = [
    {
      name: 'Tady',
      surname: 'Kapic',
      role: 'Creative, UX/UI',
      image: '/images/project1.jpg',
    },
    {
      name: 'Štěpán',
      surname: 'Varvařovský',
      role: '',
      image: '/images/project2.jpg',
    },
    {
      name: 'Vojta',
      surname: 'Janovič',
      role: '',
      image: '/images/project3.jpg',
    },
    {
      name: 'Vojta',
      surname: 'Janovič',
      role: '',
      image: '/images/project3.jpg',
    },
    // Add more portfolio items here
  ]

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  const handleItemClick = (url: string) => {
    window.open(url, '_blank')
  }

  return <div className="p-8 bg-main-gradient"></div>
}

export default Team
