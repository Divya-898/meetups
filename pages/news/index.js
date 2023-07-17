import Link from 'next/link'
import React from 'react'

function NewsPage() {
  return (
    <>
     <h1>The news page</h1><ul>
      <li>
      <Link href='/news/nextjs-is-a-great-framework'>NextJs is a greate framework </Link></li>
      <li>NextJs is a greate framework</li>
     </ul>
    </>
  )
}

export default NewsPage
