import axios from "axios"
import { OpenApiException } from "../exception/exception"

interface Document {
    openapi: string
}

export async function parseOpenApi(url:string, option?: any): Promise<Document> {
    const response = await axios.get(url)

    if (response.status != 200) {
        throw new  OpenApiException()
    }
    console.log(response)

    // switch 
    switch (response.headers["Content-Type"]) {
        case "text/plain":
            break;
        case "text/yaml":
            break;
    }

    
    return {openapi: "open-api"}
}
