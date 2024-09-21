import { useState } from 'react';
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import List from "./components/List";
import "./Styles/App.css";

export default function App() {
    const [data, setData] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedFont, setSelectedFont] = useState('');


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
        <div className={` overflow-x-hidden  h-screen w-screen ${isDarkMode ? 'dark' : ''}`}>
        <div className=" flex justify-center items-center flex-col pt-8">
            <div className="w-[736px] ">
                <Header selectedFont={selectedFont} setSelectedFont={setSelectedFont} isDarkMode={isDarkMode}  toggleTheme={toggleTheme} />
                <SearchBar  selectedFont={selectedFont} isDarkMode={isDarkMode} onSearch={fetchWordData} />
                {data && (
                    <List 
                    selectedFont={selectedFont} 
                    isDarkMode ={isDarkMode}
                        word={data.word}
                        phonetic={data.phonetics[1]?.text}
                        audio={data.phonetics[0]?.audio}
                        definitions={data.meanings}
                        sourceUrls={data.sourceUrls}
                    />
                )}
            </div>
        </div>
                </div>

    );
}
