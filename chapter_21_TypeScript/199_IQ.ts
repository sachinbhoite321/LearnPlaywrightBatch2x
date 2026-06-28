function buildEndpoint(base: string, path: string): string {

    return base + path;
}

function isSuccessCode(code: number): boolean {
    return code >= 200 && code < 300;
}

function logTestStep(step: string): void {
    console.log("[STEP]" + step);
}

console.log(buildEndpoint("https://api.com", "/user"));
console.log("200 is success", isSuccessCode(200));
console.log("400 is success", isSuccessCode(400));
logTestStep("Navigate to login page");