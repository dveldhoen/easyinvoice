import easyinvoice from "../src/lib/easyinvoice";
import isBase64 from "is-base64";

describe("Important tests", () => {
  test("Check if PDF is returned as base64", async () => {
    const result: any = await easyinvoice.createInvoice({
      mode: "development",
    });

    expect(isBase64(result.pdf)).toBe(true);
  });

  test("Check if rate limiter works", async () => {
    // First make sure we reach the rate limit
    const promises = [];
    for (let i = 0; i < 25; i++) {
      promises[i] = easyinvoice.createInvoice({
        mode: "production",
      });
    }
    try {
      await Promise.all(promises);
    } catch {
      // Do nothing
    }

    // Then make one extra call to check the statusCode
    try {
      await easyinvoice.createInvoice({
        mode: "production",
      });
    } catch (error: any) {
      expect(error.statusCode).toBe(429);
      expect(error.message).toBe("ThrottlerException: Too Many Requests");
    }
  });
});
