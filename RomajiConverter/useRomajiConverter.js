export default function RomajiConverter(input) {
  const romajiConv = require("@koozaki/romaji-conv");
  const Output = romajiConv(input).toHiragana();
  return Output;
}
