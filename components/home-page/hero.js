import Image from "next/image";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/erhan.png"
          alt="An image showing Erhan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I`m Erhan</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        and Next.js{" "}
      </p>
    </section>
  );
}
