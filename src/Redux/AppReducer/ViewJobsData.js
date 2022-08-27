import { useQuery } from "react-query";
import axios from "axios";
import Company from "../../Pages/Companies/Company";

const fetchCompnys = CompanyId =>{
  return axios.get("http://localhost:8080/Company/${CompanyId}")
}

export const ViewJobsData=(CompanyId) =>{

  return useQuery(['jobs', CompanyId],()=> fetchCompnys(CompanyId))

}
