describe("Check some performance metrics", () => {
  it("check page load time", () => {
    cy.visit("https://demoqa.com/", {
      onBeforeLoad: (win) => {
        win.performance.mark("start-loading");
      },
      onLoad: (win) => {
        win.performance.mark("end-loading");
      },
    })
      .its("performance")
      .then((p) => {
        p.measure("pageLoad", "start-loading", "end-loading");
        const measure = p.getEntriesByName("pageLoad")[0];
        assert.isAtMost(measure.duration, 10000);
      });
  });

  it("check image load time", () => {
    cy.visit("https://demoqa.com/");
    cy.window().then((win) => {
      const foundImages = win.performance
        .getEntriesByType("resource")
        .filter((x) => x.name.endsWith("WB.svg"));
      const loadTime = foundImages[0].connectEnd;
      const imgFullName = foundImages[0].name;
      expect(foundImages).to.have.length(1);
      expect(
        loadTime,
        `Loading time for image ----${imgFullName}----`
      ).to.be.lte(2500);
    });
  });

  it("ensure max load time for images", () => {
    cy.visit("https://demoqa.com/")
      .its("performance")
      .then((p) => {
        const imgs = p
          .getEntriesByType("resource")
          .filter((x) => x.initiatorType === "img");
        const slowestImg = imgs.reduce(
          (p, c) => (c.duration > p.duration ? c : p),
          { duration: 0 }
        );
        assert.isAtMost(
          slowestImg.duration,
          400,
          `image '${slowestImg.name}' should be loaded in reasonable time`
        );
      });
  });

  it("ensure that no image failed to load", () => {
    cy.visit("https://demoqa.com/");
    cy.get("img").each((img) => expect(img[0].naturalWidth).to.not.equal(0));
  });
});
