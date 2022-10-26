import {Collection, Tigris, TigrisClientConfig} from "@tigrisdata/core";
import {Employee, employeeSchema} from "./employee";

export const collections: {
    employees?: Collection<Employee>;
} = {};

export async function connectToDatabase(uri: string, clientId?: string, clientSecret?: string) {
    const client = new Tigris({serverUrl: uri, clientId: clientId, clientSecret: clientSecret});

    const db = await client.createDatabaseIfNotExists("meanStackExample");

    // A strongly typed collection is created using the data model and no additional JSON schema validation is needed
    collections.employees = await db.createOrUpdateCollection<Employee>("employees", employeeSchema);
}
