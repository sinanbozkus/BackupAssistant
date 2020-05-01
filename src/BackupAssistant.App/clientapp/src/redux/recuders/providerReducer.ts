import React from 'react'

export default function providerReducer(state : any = [], action : any) {
        switch (action.type) {
            case "GETPROVIDERTYPES_SUCCESS":
                return action.payload;
            default:
                return state;
        }
}
