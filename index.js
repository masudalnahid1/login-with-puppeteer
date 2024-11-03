import puppeteer from "puppeteer";

async function run() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Wait for the username input to be available
    await page.waitForSelector("input[name='username']");
    await page.type("input[name='username']", "Admin"); // Correct selector for username

    // Wait for the password input to be available
    await page.waitForSelector("input[name='password']");
    await page.type("input[name='password']", "admin123"); // Correct selector for password

    // Wait for the submit button to be available and click it
    await page.waitForSelector("button[type='submit']");
    await page.click("button[type='submit']"); // Correct selector for the submit button

    // Wait for navigation to complete
    await page.waitForNavigation();

    // Keep the browser open for a while or until a specific condition
    console.log("Press Ctrl + C to exit...");
    await new Promise(resolve => setTimeout(resolve, 100000)); // Keep it open for 100 seconds

    // Uncomment the line below if you want to close the browser after the operation
    // await browser.close();
}

try {
    run();
} catch (error) {
    console.log(error);
}
