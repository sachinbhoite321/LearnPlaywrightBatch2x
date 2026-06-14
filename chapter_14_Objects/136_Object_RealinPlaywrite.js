const env = {

    BASE_URL: "https://staging.myapp.com",
    TIMEOUT: 3000,
    RETRIES: 3,
    BROWSER: "Chrome"

}

const EXPECTED_RESPONSE = {

    status: 200,
    body: {
        user: { role: "admin", active: "true" }
    }
}