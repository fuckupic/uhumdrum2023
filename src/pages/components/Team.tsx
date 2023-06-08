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

  return (
    <div className="p-8 bg-main-gradient">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {teamMembers.map((item, index) => (
          <div
            key={index}
            className="relative mb-4 bg-[#2a2a2a] rounded-2xl p-4 overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleItemClick(item.url)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 left-4 text-xl text-white">
              {item.title}
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  )
}

export default Team
