import { Schema } from "yaml"
import { string } from "yaml/dist/schema/common/string"

interface Documentation {
    openapi: string
    info: Info
    jsonSchemaDialect: string
    servers: Server[]
    paths: Paths
    webhooks: Map<string, PathItem | Item | Reference>
    components: Components
    security: SecuritRequirement[]
    tags: Tag[]
    externalDocs: ExternalDocumentation
}

// The object provides metadata about the API
interface Info {
    title: string
    summary?: string
    description?: string
    termsOfService?: string
    contact?: Contact
    license?: License
    version: string
}

interface Contact {
    name?: string
    url?: string
    email?: string    
}

interface License {
    name: string
    identifier: string
    url: string
}

interface Server {
    url: string
    description?: string
    variables?: Map<string, ServerVariable>
}

interface ServerVariable {
    enum? : string[]
    default: string
    description: string
}

interface Paths {
    [path: string] : PathItem
}

interface PathItem {
    "$ref"?: string
    summery?: string
    description?: string
    get?: Operation
    put?: Operation
    post?: Operation
    delete?: Operation
    options?: Operation
    head?: Operation
    path?: Operation
    trace?: Operation
    servers?: Server[]
    parameters?: Parameters[] | Reference[]
}

interface Operation {
    tags?: string[]
    summary?: string
    description?: string
    externalDocs?: ExternalDocumentation
    operationId?: string
    parameters?: Parameter[] | Reference[]
    requestBody?: RequestBody | Reference
    responses?: Responses
    callbacks?: Map<string, Callback | Reference>
    deprecated?: boolean
    security?: SecurityRequirement[]
    servers?: Server[]
}

interface ExternalDocumentation {
    description?: string
    url: string
}

interface Parameter {
    name: string
    in: string
    description?: string
    required: boolean = false
    deprecated: boolean = false
    allowEmptyValue: boolean = false
    style?: string
    explode: boolean = false
    allowReserved: boolean = false
    schema?: Schema
    example?: any
    examples?: Map<any, Example | Reference>
    content?: Map<string, Media>
}

interface RequestBody {
    description?: string
    content: Map<string, Media>
    required: boolean = false
}

interface Media {
    schema?: Schema
    example?: any
    examples?: Map<String, Example | Reference>
    encoding?: Map<string, Encoding>
}

interface Encoding {
    contentType?: string
    headers?: Map<string, Header | Reference>
    style: string
    explode: boolean = false
}

interface Responses {
    default?: Response | Reference
    [httpStatusCode: string]: Response | Reference
}

interface Response {
    description?: string
    headers?: Map<string, Header | Reference>
    content?: Map<string, Media>
    links?: Map<string, Link | Reference>
}

interface Callback {
    [expression: string]: PathItem | Reference
}

interface Example {
    summary?: string
    description?: string
    value?: any
    externalValue?: string
}

interface Link {
    operationRef?: string
    operationId?: string
    parameters?: Map<string, any>
    requestBody?: any
    description?: string
    server?: Server
}

interface Header extends Paramter {}

interface Tag {
    name: string
    description?: string
    externalDocs?: ExternalDocumentation
}

interface Reference {
    "$ref": string
    summary?: string
    description?: string
}

interface Schema {
    disscriminator?: Discriminator
    xml?: XML
    externalDocs?: ExternalDocumentation
    example?: any
}

interface Discriminator {
    propertyName: string
    mapping?: Map<string, string>
}

interface XML {
    name?: string
    namespace?: string
    prefix?: string
    attribute: boolean = false
    wrapped?: boolean = false
}

interface SecurityScheme {
    type: string
    description?: string
    name: string
    in: string
    scheme: string
    bearerFormat?: string
    flows: OAuthFlows
    openIdConnectUrl: string
}

interface OAuthFlows {
    implicit?: OAuthFlow
    password?: OAuthFlow
    clientCredentials?: OAuthFlow
    authorizationCode?: OAuthFlow
}

interface OAuthFlow {
    authorizationUrl: string
    tokenUrl: string
    refreshUrl?: string
    scopes: Map<string, string>
}

interface SecurityRequirement {
    [name: string]: string[]
}
