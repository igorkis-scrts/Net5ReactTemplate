import axios, { AxiosError } from "axios";
import { ApiResponse } from "./ApiResponse";

export class ApiBase {
   protected static async get<TResponseData = any>(url: string, resolveError = false)
     : Promise<ApiResponse<TResponseData>> {

      const apiResponse = new ApiResponse<TResponseData>();

      await axios.get<TResponseData>(url)
        .then((response) => {
           apiResponse.data = response.data;
        })
        .catch((reason: AxiosError) => {
           this.resolveError(reason, apiResponse, resolveError);
        });

      return apiResponse;
   }

   private static resolveError(reason: AxiosError, apiResponse: ApiResponse, resolveError: boolean): void {
      if (resolveError) {
         apiResponse.error = reason.message;
         apiResponse.statusCode = reason.response.status;
      }
      else {
         throw new Error(reason.message);
      }
   }
}
