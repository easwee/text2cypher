import { DbConnectionData } from "../config";

export function parseClientDatabases(clientDatabases: string): DbConnectionData[] {
    let databases: any[];
  
    try {
      databases = JSON.parse(clientDatabases);
    } catch {
      return [];
    }
  
    return databases.filter((database) =>
      isValidDatabase(database)
    );
  }
  
function isValidDatabase(database: any) {
    return (
        database &&
        typeof database === "object" &&
        typeof database.name === "string" &&
        database.name.trim() !== "" &&
        typeof database.uri === "string" &&
        database.uri.trim() !== "" &&
        typeof database.username === "string" &&
        database.username.trim() !== "" &&
        typeof database.password === "string" &&
        database.password.trim() !== ""
    );
}