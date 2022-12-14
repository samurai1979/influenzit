import { axiosInstance } from "./axios";

export const getProjects = (url) => {
    return axiosInstance().get(url ? url : "/projects")
}
export const getProject = (id) => {
    return axiosInstance().get(`/projects/${id}`)
}
export const createProjectMilestone = (id, data) => {
    return axiosInstance().post(`/projects/${id}/milestones`, data)
}
export const updateProjectMilestone = (id, data, milestoneId) => {
    return axiosInstance().patch(`/projects/${id}/milestones/${milestoneId}`, data)
}
export const updateProject = (id, data) => {
    return axiosInstance().patch(`/projects/${id}`, data,)
}
