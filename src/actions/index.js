import axios  from 'axios'
import {FETCH_POSTS} from "./types"
export const fetchPosts = () => async dispatch =>  
{
 const posts = await axios.get("https://jsonplaceholder.typicode.com/posts")
  dispatch({
      type : FETCH_POSTS,
      payload : posts.data
  })
}