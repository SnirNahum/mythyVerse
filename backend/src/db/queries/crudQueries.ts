export function get_all_entitites_query(table_name: string) {
  return `SELECT * FROM ${table_name} WHERE status = 0`;
}
export function get_entity_by_id_query(table_name: string, id: string) {
  return `SELECT * FROM ${table_name} WHERE id = '${id}' AND status = 0`;
}

export function delete_entitites_by_id_query(table_name: string, id: string) {
  return `UPDATE ${table_name} SET status = 9 WHERE id = '${id}'`;
}

export function create_entity_query(tableName: string, keys: string[], placeholders: string[]){
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
) {
  return `
    UPDATE ${tableName}
    SET ${assignments}
    WHERE id = '${entity_id}'
    RETURNING *;
  `;
}
