import MediaQueryGenerator from "./MediaQueryGenerator";

const media = new MediaQueryGenerator(
  {
    md: "40em",
    lg: "60em"
  },
  {
    md: "39em",
    lg: "59em"
  }
);

describe("Helper MediaQueryGenerator", () => {
  test("render MediaQueries less", () => {
    expect(media.lessThan("md")).toBe("@media(max-width: 39em)");
  });
  test("render MediaQueries more", () => {
    expect(media.moreThan("md")).toBe("@media(min-width: 40em)");
  });
  test("render MediaQueries between", () => {
    expect(media.between("md", "lg")).toBe(
      "@media(min-width: 40em) and (max-width: 59em)"
    );
  });
});
