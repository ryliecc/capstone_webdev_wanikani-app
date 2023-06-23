import exampleData from "../src/data.js";

export default function HomePage() {
  const VocabList = exampleData.map((item) => {
    const key = item.id;
    const characters = item.data.characters;
    const readings = item.data.readings.map((reading) => {
      return { reading };
    });
    const meanings = item.data.meanings.map((meaning) => {
      return { meaning };
    });
    return (
      <li className="vocabulary-item" key={key}>
        <span className="characters">{characters}</span>
        <span className="readings">{readings}</span>
        <span className="meanings">{meanings}</span>
      </li>
    );
  });

  return <ul>{VocabList}</ul>;
}
