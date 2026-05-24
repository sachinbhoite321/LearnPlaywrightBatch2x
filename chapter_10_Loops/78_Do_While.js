let retry = 0;

do {

    console.log("Execute a code !");
    console.log("retrying ", retry);
    retry++;

} while (retry < 3);