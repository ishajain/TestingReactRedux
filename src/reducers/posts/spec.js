//Reducer returns the default state when
//1 . the action.type does not match and
//2.  state is not passed

import {  FETCH_POSTS } from "../../actions/types"
import postsReducer from  './reducer'
describe("Posts Reducer",() => {
    it("Should return the default state",() => {
       const newState = postsReducer(undefined,{})
       expect(newState).toEqual([])
    })

    it("Should return the new state if receiving type",() => {
        const posts = [{ title: "Test 1"}, { title: "Test 1"}, { title: "Test 1"}]
        const newState = postsReducer({title: "Test4"},{
            type: FETCH_POSTS,
            payload : posts
        })
        expect(newState).toEqual(posts)
     })
})
