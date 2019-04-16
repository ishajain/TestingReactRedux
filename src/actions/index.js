import jsonPlaceHolder from '../api/jsonPlaceholder'
import {FETCH_POSTS} from "./types"
export const getPosts = () => async dispatch =>  
{
  const posts = await jsonPlaceHolder.get("/posts")
  return {
      type : FETCH_POSTS,
      payload : posts.data
  }
}