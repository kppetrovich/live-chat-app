import React from 'react'

export const CTX = React.createContext();

/*
    data in rooms should be like:
    {from : 'username'
    msg: 'text'
    room: 'main'},

    state {
         room1: [
                {data1}, {data2, {data3}]
          room2: [
                {data4}, {data5}, {data6}]
        }
*/
const initState ={
        general: [
            {from: 'qwe', msg:'hi'},
            {from: 'qwe', msg:'hi'},
            {from: 'qwe', msg:'hi'},
        ],
        topic: [
            {from: 'qwe', msg:'hi'},
            {from: 'qwe', msg:'hi'},

        ]
};

function reducer(state, action) {
    const {from, msg, room} = action.payload;
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [room]: [
                    ...state[room],
                    {
                        from,
                        msg
                    }
                ]
            };


        default:
            return state
    }
}


export default function Store(props) {

    const  reducerHook = React.useReducer(reducer, initState);

    return (
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    )
}
