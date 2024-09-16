import { useState } from 'react';
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import List from "./components/List";
import "./Styles/App.css";

export default function App() {
    const [data, setData] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const fetchWordData = async (word) => {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (!response.ok) throw new Error('Word not found');
            const result = await response.json();
            setData(result[0]);
        } catch (error) {
            console.error(error);
            setData(null);
        }
    };
    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    return (
        <div className={`w-screen h-screen flex justify-center items-center flex-col pt-8 ${isDarkMode ? 'dark' : ''}`}>
            <div className="w-[736px] h-full">
                <Header isDarkMode={isDarkMode}  toggleTheme={toggleTheme} />
                <SearchBar onSearch={fetchWordData} />
                {data && (
                    <List
                        word={data.word}
                        phonetic={data.phonetic}
                        audio={data.phonetics[0]?.audio}
                        definitions={data.meanings}
                    />
                )}
            </div>
        </div>
    );
}
