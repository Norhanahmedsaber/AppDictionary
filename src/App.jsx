import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import "./Styles/App.css";
import List from "./components/List"; // Correct import for List component

const word = [
  {
    word: "hello",
    phonetic: "həˈləʊ",
    phonetics: [
      {
        text: "həˈləʊ",
        audio: "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3",
      },
      {
        text: "hɛˈləʊ",
      },
    ],
    origin: "early 19th century: variant of earlier hollo ; related to holla.",
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [
          {
            definition: "used as a greeting or to begin a phone conversation.",
            example: "hello there, Katie!",
            synonyms: [],
            antonyms: [],
          },
        ],
      },
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition: "an utterance of ‘hello’; a greeting.",
            example: "she was getting polite nods and hellos from people",
            synonyms: [],
            antonyms: [],
          },
        ],
      },
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition: "say or shout ‘hello’.",
            example: "I pressed the phone button and helloed",
            synonyms: [],
            antonyms: [],
          },
        ],
      },
    ],
  },
];

export default function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col pt-8">
      <div className="w-[736px] h-full border border-red-500">
        <Header />
        <SearchBar />
        <List
          word={word[0].word}
          phonetic={word[0].phonetic}
          audio={word[0].phonetics[0].audio}
          deifinations={word[0].meanings} // Correct data mapping for meanings
        />
      </div>
    </div>
  );
}
