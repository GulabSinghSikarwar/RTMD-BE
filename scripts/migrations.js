// Import necessary modules
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to generate migration files for each schema
function generateMigrationsForSchemas(schemas) {
  schemas.forEach(schema => {
    // Generate migration file for the schema
    const migrationCommand = `npx sequelize-cli migration:generate --name migrate-${schema}`;
    console.log(`Generating migration file for ${schema} schema...`);
    execSync(migrationCommand, { stdio: 'inherit' });
  });
}

// Function to execute migrations for each schema
function executeMigrationsForSchemas(schemas) {
  schemas.forEach(schema => {
    // Execute migrations for the schema
    const migrateCommand = `npx sequelize-cli db:migrate --migrations-path=./migrations-${schema}`;
    console.log(`Executing migrations for ${schema} schema...`);
    execSync(migrateCommand, { stdio: 'inherit' });
  });
}

// Main function
function main() {
  // Define list of schemas (replace with your actual list)
  const schemas = ['User'];

  // Generate migration files for each schema
  generateMigrationsForSchemas(schemas);

  // Execute migrations for each schema
  executeMigrationsForSchemas(schemas);

  console.log('All migrations executed successfully.');
}

// Run the main function
main();
