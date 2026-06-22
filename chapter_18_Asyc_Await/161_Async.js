async function testApi() {

    try {
        let result = await Promise.reject("Error with 500");
    } catch (error) {
        console.log('Error : ' + error);
    } finally {
        console.log("Clean up");
    }


}

testApi();