import {Collection, Tigris, TigrisClientConfig} from "@tigrisdata/core";
import {Employee, employeeSchema} from "./employee";

export const collections: {
    employees?: Collection<Employee>;
} = {};

export async function connectToDatabase(uri: string, clientId?: string, clientSecret?: string) {
    const config = getClientConfig(uri, clientId, clientSecret);
    const client = new Tigris(config);

    const db = await client.createDatabaseIfNotExists("meanStackExample");

    // A strongly typed collection is created using the data model and no additional JSON schema validation is needed
    collections.employees = await db.createOrUpdateCollection<Employee>("employees", employeeSchema);
}

function getClientConfig(uri: string, clientId?: string, clientSecret?: string): TigrisClientConfig {
    const config: TigrisClientConfig = {
        serverUrl: uri
    }

    if (clientId === undefined || clientSecret === undefined) {
        config["insecureChannel"] = true;
    } else {
        config["clientId"] = clientId;
        config["clientSecret"] = clientSecret;
    }

    return config;
}
