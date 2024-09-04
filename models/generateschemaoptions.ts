import { SchemaDefinition, SchemaDefinitionType } from "mongoose";

export interface GenerateSchemaOptions<T> {
  schema: SchemaDefinition<SchemaDefinitionType<T>>;
  identifier: String;
  hasUserField: Boolean;
}
