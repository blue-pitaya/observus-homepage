import { src } from "observus/attributes";
import { a, code, div, h1, h2, img, p, pre } from "observus/tags";
import logo from "/logo.svg";
import { attr, mount, text } from "observus";
import "./style.css";
import { styleObj } from "observus/attributes";
import { cls } from "observus/attributes";
import { style } from "observus/attributes";

function BodySection() {
  return div(
    styleObj({
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      marginTop: "48px",
    }),
    h2(text("Getting started")),
    p(text("You can install observus by running:")),
    pre(cls("code-block"), code(text("pnpm add observus"))),
    p(
      text(
        "Documentation will be added soon. Meanwhile you can read source code ",
      ),
      a(
        attr(
          "href",
          "https://github.com/blue-pitaya/observus/blob/master/src/observus-core.ts",
        ),
        text("here"),
      ),
      text(
        ". Core library is only about 500 lines of code without any tricks to minify it.",
      ),
    ),
    h2(text("Inspirations"), style("margin-top: 60px;")),
    p(text("Laminar (scala.js lib), grecha.js"))
  );
}

function LogoSection() {
  return div(
    styleObj({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }),
    img(
      src(logo),
      styleObj({
        width: "140px",
      }),
    ),
    h1(text("OBSERVUS")),
    p(text("Simple and minimal reactive UI library for web.")),
  );
}

function MainPage() {
  return div(
    styleObj({
      display: "flex",
      flexDirection: "column",
    }),
    LogoSection(),
    BodySection(),
  );
}

mount(document.querySelector("#app")!, MainPage());
