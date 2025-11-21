export const COOKIE_OPTION = {
    httpOnly: true,
    secure: false, // Set to false for development/testing in Postman
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    path: '/',
};