import { GenerateSchemaOptions } from "../models/generateschemaoptions";

export function generateSchema<T>({
  schema,
  identifier,
  hasUserField = true,
}: GenerateSchemaOptions<T>) {}
