import  moxios from 'moxios'
import { testStore } from '../../utils'
import { fetchPosts } from '../actions'


describe("fetchPosts Action",() => {

    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    it("Should updare the store ",() => {

        const expectedState = {
            posts: [
                {
                    title : "Test title",
                    body: "Test body"
                },
                {
                    title : "Test title",
                    body: "Test body"
                },
                {
                    title : "Test title",
                    body: "Test body"
                }


            ]
        }

        const store = testStore();

        moxios.wait(()=> {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status : 200,
                response : expectedState
            })
        })
            return store.dispatch(fetchPosts()).then(
                () => {
                    const newState = store.getState()
                    expect(newState.posts).toEqual(expectedState)
                }
            )
        

       



    })
})
