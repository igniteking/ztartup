import { type SchemaTypeDefinition } from "sanity";
import { startup } from "./startups";
import { author } from "./author";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup],
};
