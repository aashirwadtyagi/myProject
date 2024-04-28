class ApiResponse {
    constructor(
        statusCode,
        data,
        message = "Success"
    ){
        this.statusCode = statusCode; // http status code e.g 200, 404 etc... (required)
        this.data = data || null; // any additional information about the response (optional)
        this.message = message || "Success"; // success or failure message (optional)
    }
}