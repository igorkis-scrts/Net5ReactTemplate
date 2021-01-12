import { ApiResponse } from "./ApiResponse";

export class ApiBase {
    protected static async get<TResponseData = any>(url: string): Promise<ApiResponse<TResponseData>> {
        const response: Response = await fetch(url);

        const apiResponse = new ApiResponse<TResponseData>();
        apiResponse.statusCode = response.status;

        if (response.ok) {
            apiResponse.data = await response.json();
        }
        else {
            apiResponse.error = await response.text();
        }

        return apiResponse;
    }
}
