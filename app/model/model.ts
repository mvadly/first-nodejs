
export interface ResponseService {
    statusCode: number
    data: {
        status: boolean,
        message: string,
        data?: any
    }
}

export const responseService = (statusCode: number, message: string, data?: any): ResponseService => {
    let status: boolean = false
    if (statusCode.toString().substring(0, 1) === "2") {
        status = true
    }

    return {
        statusCode: statusCode,
        data: {
            status: status,
            message: message,
            data: data
        }
    }
}
