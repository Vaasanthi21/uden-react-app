import {api} from '../apiServices';

const ASSOCOATION = '/v1/association-request';
const CONTACT = '/v1/contact-request';

export const assocoationRequest = api.injectEndpoints({
    endpoints: (build) => ({
        postAssociationRequest: build.mutation({
            query:(data)=>({
                method:'POST',
                url:ASSOCOATION,
                body:data,
                mode:'cors'
            }), 
        })
    })
})

export const contactRequest = api.injectEndpoints({
    endpoints: (build) => ({
        postContactRequest: build.mutation({
            query:(data)=>({
                method:'POST',
                url:CONTACT,
                body:data,
            }), 
        })
    })
})


export const {usePostAssociationRequestMutation} = assocoationRequest
export const {usePostContactRequestMutation} = contactRequest
