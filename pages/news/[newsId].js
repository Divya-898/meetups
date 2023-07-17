import { useRouter } from 'next/router'
import React from 'react'

function DetailPage() {
  const router = useRouter();
 const newsId = router.query.newsId;
  return (
    <div>
      DetailPage
    </div>
  )
}

export default DetailPage
