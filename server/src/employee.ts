import {TigrisDataTypes, TigrisSchema,} from "@tigrisdata/core/dist/types";

export interface Employee {
    name: string;
    position: string;
    level: string;
    id?: string;
}

export const employeeSchema: TigrisSchema<Employee> = {
    id: {
        type: TigrisDataTypes.INT64,
        primary_key: {
            order: 1,
            autoGenerate: true,
        },
    },
    name: {
        type: TigrisDataTypes.STRING,
    },
    position: {
        type: TigrisDataTypes.STRING,
    },
    level: {
        type: TigrisDataTypes.STRING,
    }
};
