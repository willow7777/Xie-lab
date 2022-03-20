import { getData, postData } from '../assets/js/request';



export const getIndex = (data) => getData('/home/getIndex', data)

export const getNews = (data) => postData('/news/findAllNews', data)

export const publication = (data) => postData('/publication/findAllPublication', data)
export const findAllMember = (data) => postData('/user/findAllMember', data)