async function test() {
    try {
        console.log("Calling /addPositions...");
        const res1 = await fetch('https://zerodha-backend-six.vercel.app/addPositions');
        const text1 = await res1.text();
        console.log("addPositions response:", text1);

        console.log("Calling /allPositions...");
        const res2 = await fetch('https://zerodha-backend-six.vercel.app/allPositions');
        const json2 = await res2.json();
        console.log("allPositions count:", json2.length);
        console.log("First item:", json2[0]);
    } catch(err) {
        console.error("Error:", err.message);
    }
}
test();
