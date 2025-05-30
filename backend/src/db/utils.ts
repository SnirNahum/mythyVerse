import { prepare_update_entity_query } from "./queries/crudQueries";


export function prepare_update_body(
  tableName: string,
  entity_id: string,
  keys: string[]
): string {
  const assignments = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");
  return prepare_update_entity_query(tableName, assignments, entity_id);
}

export function prepare_placeholders_and_keys(values: Record<string, any>) {
  const keys: string[] = Object.keys(values);
  const placeholders: string[] = keys.map((_, i) => `$${i + 1}`);
  return { keys, placeholders };
}

export function get_table_name_by_url(url: string) {
  return url.split("/api/")[1];
}
