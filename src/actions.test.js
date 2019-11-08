import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants';
import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from 'fetch-mock';

const mockStore = configureMockStore([thunkMiddleware])

describe('setSearchField', () => {
    it('should create an action to search robots', () => {
        const text = 'wooo'
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }

        expect(actions.setSearchField(text)).toEqual(expectedAction)
    });
});

describe('requestRobots', () => {  
    afterEach(() => {
        fetchMock.restore()
    })
  
    it('handles requesting robots API', () => { 
        const store = mockStore();       
        store.dispatch(actions.requestRobots())
        const action = store.getActions();        
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING,
        }

        expect(action[0]).toEqual(expectedAction)
    });

    it('handles SUCCESS requesting robots API', () => {    
        const mockRobot = [{
            id: 123,
            name: 'test',
            username: 'testtest',
            email: 'test@gmail.com'
        }]
        
        fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', {
            body: { robots: mockRobot},
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [
            {
                type: REQUEST_ROBOTS_PENDING
            },
            {
                type: REQUEST_ROBOTS_SUCCESS,
                payload: {robots: mockRobot} 
            }
        ]

        const store = mockStore({ robots: [] }); 
        
        
        return store.dispatch(actions.requestRobots()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
          })
    });

    it('handles FAILED requesting robots API', () => {
        fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', {throws: new Error('test error')})

        const store = mockStore();

        const expectedActions = [
            {
                type: REQUEST_ROBOTS_PENDING
            },
            {
                type: REQUEST_ROBOTS_FAILED,
                payload: new Error('test error')
            }
        ]

        return store.dispatch(actions.requestRobots()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});