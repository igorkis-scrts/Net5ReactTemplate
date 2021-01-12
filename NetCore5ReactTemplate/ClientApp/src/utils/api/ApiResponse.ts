export class ApiResponse<TResponseData = any> {
    public statusCode: number;
    public data: TResponseData;
    public error: string;

    constructor() {
        this.statusCode = null;
        this.data = null;
        this.error = "";
    }

    public hasError(): boolean {
        return Boolean(this.error);
    }

    public hasClientError(): boolean {
        return this.hasError()
            && this.statusCode >= 400
            && this.statusCode < 500
            && !this.hasTimeoutError();
    }

    public hasTimeoutError(): boolean {
        return this.hasError()
            && this.statusCode === 408;
    }
}
