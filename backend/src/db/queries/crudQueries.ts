export function get_all_entitites_query(table_name: string) {
  return `SELECT * FROM ${table_name} WHERE status = 0`;
}
export function get_all_chracters_by_universe_query(table_name: string, universe: string) {
  return `SELECT * FROM ${table_name} WHERE status = 0 and universe_id = '${universe}'`;
}
export function get_all_relationships_by_universe_query(table_name: string, universe: string) {
  return `SELECT * FROM ${table_name} WHERE status = 0 and universe_id = '${universe}'`;
}
export function get_entity_by_id_query(table_name: string, id: string): string {
  return `SELECT * FROM ${table_name} WHERE id = '${id}' AND status = 0`;
}

export function delete_entitites_by_id_query(table_name: string, id: string): string {
  return `UPDATE ${table_name} SET status = 9 WHERE id = '${id}'`;
}

export function create_entity_query(
  tableName: string,
  keys: string[],
  placeholders: string[]
): string {
  return `
  INSERT INTO ${tableName} (${keys.join(", ")})
  VALUES (${placeholders.join(", ")})
  RETURNING *;
  `;
}

export function prepare_update_entity_query(
  tableName: string,
  assignments: string,
  entity_id: string
): string {
  return `
    UPDATE ${tableName}
    SET ${assignments}
    WHERE id = '${entity_id}'
    RETURNING *;
  `;
}
