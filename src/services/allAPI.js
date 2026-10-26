import axiosService from "../api/axiosService"


/// saveResumeAPI - called by components userInput When finish button clicked
export const saveResumeAPI=async(resumeDetails)=>{
    return await axiosService('POST','/resumes',resumeDetails)
}

// viewResumeAPI - called by vie components when resume added
export const viewResumeAPI=async(resumeId)=>{
    return await axiosService('GET',`/resumes/${resumeId}`,{})
}


///getAllResumesAPI - called by allResumes Components when resume added
export const getAllResumesAPI=async()=>{
    return await axiosService('GET',`/resumes/`,{})
}

////deleteResumeAPI - called by allResumes Components when delete button licked
export const deleteResumesAPI=async(resumeId)=>{
    return await axiosService('DELETE',`/resumes/${resumeId}`,{})
}

//downloadResumeAPI called by allResumes Components Vie when download button clicked
export const downloadResumeAPI=async(resumeDetails)=>{
    return await axiosService('POST',`/downloads`,resumeDetails)
}

//getAlldownloadResumeAPI called by Components all download components when component loading 
export const getAlldownloadResumeAPI=async()=>{
    return await axiosService('GET',`/downloads`,{})
}

///updateResumeAPI - called by component edit when button clicked 
export const updateResumeAPI=async(resumeId,resumeDetails)=>{
    return await axiosService('PUT',`/resumes/${resumeId}`,resumeDetails)
}