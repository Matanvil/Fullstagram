import postUpload from "../uploadPost";

describe("postUpload", () => {
  describe("when given falsey arg", () => {
    test("should throw exception", async () => {
      await expect(postUpload(null)).rejects.toContain("Cannot read property");
    });
  });
});
