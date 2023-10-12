import moment from 'moment'
import Link from 'next/link'
import { useState } from 'react'

import { getRecentPosts, getSimilarPosts } from '../services'

function PostWidget({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if(slug) {
      getSimilarPosts(category, slug).then((result) => setRelatedPosts(result))
    }
    else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }

  }, [slug])

  console.log(relatedPosts)

  return <div>PostWidget</div>
}
export default PostWidget
