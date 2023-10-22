import axios from "axios"
import { OpenApiException } from "../exception/exception"
import YAML from 'yaml'

export async function parseOpenApi(url  :string, option?: any): Promise<Documentation> {
    const response = await axios.get(url)

    if (response.status != 200) {
        throw new OpenApiException()
    }

    // switch 
    switch (response.headers["content-type"]) {
        case "application/json":
            return response.data
        case "text/yaml":
            return YAML.parse(response.data)
        case "text/plain":
            break 
    }

    throw new OpenApiException()
}
