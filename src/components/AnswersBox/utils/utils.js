import svgDesktop from "./svgDesktopPaths";
import svgMobile from "./svgMobilePaths";

export default function bgImgSubHandler(
  windowParams,
  eventType,
  letter,
  value
) {
  if (windowParams > 1280) {
    if (letter === "A" && value === "correct") {
      return `url(${svgDesktop.dtCorrectA})`;
    }
    if (letter === "B" && value === "correct") {
      return `url(${svgDesktop.dtCorrectB})`;
    }
    if (letter === "C" && value === "correct") {
      return `url(${svgDesktop.dtCorrectC})`;
    }
    if (letter === "D" && value === "correct") {
      return `url(${svgDesktop.dtCorrectD})`;
    }
    if (letter === "A" && value === "incorrect") {
      return `url(${svgDesktop.dtIncorrectA})`;
    }
    if (letter === "B" && value === "incorrect") {
      return `url(${svgDesktop.dtIncorrectB})`;
    }
    if (letter === "C" && value === "incorrect") {
      return `url(${svgDesktop.dtIncorrectC})`;
    }
    if (letter === "D" && value === "incorrect") {
      return `url(${svgDesktop.dtIncorrectD})`;
    }

    if (letter === "A" && eventType === "click") {
      return `url(${svgDesktop.dtSelectedA})`;
    }
    if (letter === "B" && eventType === "click") {
      return `url(${svgDesktop.dtSelectedB})`;
    }
    if (letter === "C" && eventType === "click") {
      return `url(${svgDesktop.dtSelectedC})`;
    }
    if (letter === "D" && eventType === "click") {
      return `url(${svgDesktop.dtSelectedD})`;
    }

    if (letter === "A" && eventType === "mouseover") {
      return `url(${svgDesktop.dtHoverA})`;
    }
    if (letter === "B" && eventType === "mouseover") {
      return `url(${svgDesktop.dtHoverB})`;
    }
    if (letter === "C" && eventType === "mouseover") {
      return `url(${svgDesktop.dtHoverC})`;
    }
    if (letter === "D" && eventType === "mouseover") {
      return `url(${svgDesktop.dtHoverD})`;
    }

    if (letter === "A" && eventType === "mouseleave") {
      return `url(${svgDesktop.dtInactiveA})`;
    }
    if (letter === "B" && eventType === "mouseleave") {
      return `url(${svgDesktop.dtInactiveB})`;
    }
    if (letter === "C" && eventType === "mouseleave") {
      return `url(${svgDesktop.dtInactiveC})`;
    }
    if (letter === "D" && eventType === "mouseleave") {
      return `url(${svgDesktop.dtInactiveD})`;
    }

    switch (letter) {
      case "A":
        return svgDesktop.dtInactiveA;
      case "B":
        return svgDesktop.dtInactiveB;
      case "C":
        return svgDesktop.dtInactiveC;
      case "D":
        return svgDesktop.dtInactiveD;
      default:
        return "ERR";
    }
  } else if (windowParams <= 1280) {
    if (letter === "A" && value === "correct") {
      return `url(${svgMobile.mobCorrectA})`;
    }
    if (letter === "B" && value === "correct") {
      return `url(${svgMobile.mobCorrectB})`;
    }
    if (letter === "C" && value === "correct") {
      return `url(${svgMobile.mobCorrectC})`;
    }
    if (letter === "D" && value === "correct") {
      return `url(${svgMobile.mobCorrectD})`;
    }
    if (letter === "A" && value === "incorrect") {
      return `url(${svgMobile.mobIncorrectA})`;
    }
    if (letter === "B" && value === "incorrect") {
      return `url(${svgMobile.mobIncorrectB})`;
    }
    if (letter === "C" && value === "incorrect") {
      return `url(${svgMobile.mobIncorrectC})`;
    }
    if (letter === "D" && value === "incorrect") {
      return `url(${svgMobile.mobIncorrectD})`;
    }

    if (letter === "A" && eventType === "click") {
      return `url(${svgMobile.mobSelectedA})`;
    }
    if (letter === "B" && eventType === "click") {
      return `url(${svgMobile.mobSelectedB})`;
    }
    if (letter === "C" && eventType === "click") {
      return `url(${svgMobile.mobSelectedC})`;
    }
    if (letter === "D" && eventType === "click") {
      return `url(${svgMobile.mobSelectedD})`;
    }

    switch (letter) {
      case "A":
        return svgMobile.mobInactiveA;
      case "B":
        return svgMobile.mobInactiveB;
      case "C":
        return svgMobile.mobInactiveC;
      case "D":
        return svgMobile.mobInactiveD;
      default:
        return "ERR";
    }
  }
}
