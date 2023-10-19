import axiosinstance from '../APPConfig/AxiosConfig';
import {ApiResponse } from '../Models/QuestionModel';



export const getQuestions=() => 
{
     return axiosinstance.get<ApiResponse>('/api/v1/quiz?limit=5&category=culture_generale&difficulty=facile');

}