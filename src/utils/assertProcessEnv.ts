/**
 * Function returns specified env variable if it is presented in process.env
 * Otherwise it throws error
 */
export default function assertProcessEnv(key: string): string {
    const value = process.env[key];
    if (value === undefined) {
        throw new Error(`'${key}' must be provided as environment variable!`);
    }

    return value;
}
