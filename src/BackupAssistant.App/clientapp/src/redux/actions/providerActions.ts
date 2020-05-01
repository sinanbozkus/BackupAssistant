import axios from 'axios'

export function getProviderTypesSuccess(providerTypes : any){
    return {type: "GETPROVIDERTYPES_SUCCESS", payload: providerTypes}
}

export function getProviderTypes(){
    return function(dispatch : any){
        axios.get('/lookup/getprovidertypes')
        .then(function(response){
            {
                dispatch(getProviderTypesSuccess(response.data));
            }
        });
    }
}
