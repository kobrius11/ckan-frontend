export interface LoginResult {
    id: string,
    name: string,
    fullname: string | null,
    email: string,
    apikey: string | null,
    created: string,
    reset_key: string | null,
    about: string | null,
    last_active: string | null,
    activity_streams_email_notifications: boolean,
    sysadmin: boolean,
    state: string,
    image_url: string | null,
    plugin_extras: string | null,
    frontend_token: string 
}