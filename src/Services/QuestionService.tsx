import axiosinstance from '../APPConfig/AxiosConfig';
import { Question} from '../Models/QuestionModel';



export const getQuestions=() => 
{
    return axiosinstance.get<Question[]>('/api/v1/quiz?limit=5&category=culture_generale&difficulty=facile');
}