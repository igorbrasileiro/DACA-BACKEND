import dotenv from 'dotenv';
const { parsed: ENVIRONMENT_VARIABLES } = dotenv.config();

ENVIRONMENT_VARIABLES.SALT_FACTOR = Number(ENVIRONMENT_VARIABLES.SALT_FACTOR);

export default ENVIRONMENT_VARIABLES;
