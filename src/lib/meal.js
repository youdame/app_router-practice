import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare("SELECT * FROM meals").all();
}

// 조건에 해당하는 하나의 레코드만 원하기에 get 메소드 사용
// 조건에 해당하는 모든 레코드를 원할 경우 all 메소드 사용

// sql injection에 대비하기 위해 ?를 placeholder로 사용함
export async function getMeal(slug) {
  // 주석된 부분은 sql injection에 취약함
  // return db.prepare("SELECT * FROM meals WHERE slug = " + slug).get();

  // 플레이스 홀더로 사용한 부분에 원래 들어가야할 값을 get 메소드의 파라미터로 넘겨줌
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });
  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals 
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES(
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email, 
      @image,
      @slug
    )`
  ).run(meal);
}
