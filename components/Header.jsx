import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import Link from 'next/link'

import { getCategories } from '../services'



function Header() {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div
      className={`container mx-auto px-10 mb-8 ${styles.headerContainer}`}
      //  className="container mx-auto px-10 mb-8"
    >
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/" class="flex flex-col justify-start items-start">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Alexander Brandt
            </span>
            <span className="cursor-pointer font-light text-xl text-white">
              Lehrer - Bildungsjournalist
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>











  )
}
export default Header
