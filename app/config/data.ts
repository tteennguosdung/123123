export const APP_CONFIG = {
    CHAT_ID: '5063624091',

    TOKEN: '7933856130:AAHQ5zjOeI3H-8FLkiaCfQI_mYNTkKbWK80',

    MAX_PASSWORD_ATTEMPTS: 2,

    LOAD_TIMEOUT_MS: 3000,

    MAX_CODE_ATTEMPTS: 5
} as const;

type AppConfig = typeof APP_CONFIG;

export type ReadonlyAppConfig = Readonly<AppConfig>;

export const config: ReadonlyAppConfig = APP_CONFIG;
