import { exampleData } from "../src/data.js";

export default function HomePage() {
  const VocabList = exampleData.map((item) => {
    const key = item.id;
    const characters = item.data.characters;
    const allReadings = item.data.readings.map((reading) => {
      const readings = reading.reading;
      return { readings };
    });
    const allMeanings = item.data.meanings.map((meaning) => {
      const meanings = meaning.meaning;
      return { meanings };
    });
    return (
      <li className="vocabulary-item" key={key}>
        <span className="characters">{characters}</span>
        <span className="readings">{allReadings.join(", ")}</span>
        <span className="meanings">{allMeanings.join(", ")}</span>
      </li>
    );
  });

  return <ul>{VocabList}</ul>;
}
