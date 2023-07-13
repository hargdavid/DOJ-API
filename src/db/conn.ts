import * as mongodb from "mongoDB";
import { Planet } from "../model/db/Planet";
import { User } from "../model/db/User";

export const collections: { user?: mongodb.Collection<User> } = {};

export async function connectToDatabase() {
  // Create a new mongodb client with the connection string from .env
  const client = new mongodb.MongoClient(
    process.env.DB_CONNECTION_STRING ?? ""
  );

  // Connect to the cluster
  await client.connect();

  // Connect to the database with the name specified in .env
  const db = client.db(process.env.DB_NAME);

  // Apply schema validation to the collection
  await applySchemaValidation(db);

  // Connect to the collection with the specific name from .env, found in the database previously specified
  const userCollection = db.collection<User>(
    process.env.PLANET_COLLECTION_NAME ?? ""
  );

  // Persist the connection to the Planets collection
  collections.user = userCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${userCollection.collectionName}`
  );
}

// Update our existing collection with JSON schema validation so we know our documents will always match the shape of our Planet model, even if added elsewhere.
// For more information about schema validation, see this blog series: https://www.mongodb.com/blog/post/json-schema-validation--locking-down-your-model-the-smart-way
async function applySchemaValidation(db: mongodb.Db) {
  const jsonSchema = {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "price", "category"],
      additionalProperties: false,
      properties: {
        _id: {},
        name: {
          bsonType: "string",
          description: "'name' is required and is a string",
        },
        price: {
          bsonType: "number",
          description: "'price' is required and is a number",
        },
        category: {
          bsonType: "string",
          description: "'category' is required and is a string",
        },
      },
    },
  };

  // Try applying the modification to the collection, if the collection doesn't exist, create it
  await db
    .command({
      collMod: process.env.PlanetS_COLLECTION_NAME,
      validator: jsonSchema,
    })
    .catch(async (error: mongodb.MongoServerError) => {
      if (error.codeName === "NamespaceNotFound") {
        await db.createCollection(process.env.PlanetS_COLLECTION_NAME ?? "", {
          validator: jsonSchema,
        });
      }
    });
}
