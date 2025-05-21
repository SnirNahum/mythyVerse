export function prepare_create_query(
  tableName: string,
  keys: string[],
  placeholders: string[]
) {
  return `
  INSERT INTO ${tableName} (${keys.join(", ")})
  VALUES (${placeholders.join(", ")})
  RETURNING *;
  `;
}

export function prepare_update_query(
  tableName: string,
  entity_id: string,
  keys: string[]
): string {
  const assignments = keys.map((key, i) => `${key} = $${i + 1}`).join(", ");

  return `
    UPDATE ${tableName}
    SET ${assignments}
    WHERE id = '${entity_id}'
    RETURNING *;
  `;
}
export function prepare_placeholders_and_keys(values: Record<string, any>) {
  const keys: string[] = Object.keys(values);
  const placeholders: string[] = keys.map((_, i) => `$${i + 1}`);
  return { keys, placeholders };
}
