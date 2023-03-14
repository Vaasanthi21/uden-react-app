import {api} from '../apiServices';

const JOBS = '/jobs/v1/jobs';
const COURSES = '/courses/v1/jobs';

export const jobApi = api.injectEndpoints({
    endpoints: (build) => ({
        getJobById: build.query({
            query: (id) => `${JOBS}/${id}/`
        })
    })
})

export const courseApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCourseById: build.query({
            query: (id) => `${COURSES}/${id}/`
        })
    })
})


export const {useGetJobByIdQuery} = jobApi
export const {useGetCourseByIdQuery} = courseApi
