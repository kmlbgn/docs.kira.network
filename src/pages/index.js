import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useBaseUrl from '@docusaurus/useBaseUrl';
import '../../css/docu-notion-styles.css';

function TerminalPage() {
    const [terminalContent, setTerminalContent] = useState('');
    const docsLink = useBaseUrl('/docs/feaf8030-e510-4ce2-8510-26b32ceb9dc8');
    const history = useHistory();

    useEffect(() => {
        const handleEnterPress = (event) => {
            if (event.key === 'Enter') {
                history.push(docsLink);
            }
        };

        fetch('terminal/terminal.txt')
            .then(response => response.text())
            .then(text => setTerminalContent(text));

        window.addEventListener('keydown', handleEnterPress);

        return () => {
            window.removeEventListener('keydown', handleEnterPress);
        };
    }, [history]);


    const linkMappings = {
        "DOCS": docsLink,
        "BLOG": "https://blog.kira.network",
        "TWITTER": "https://twitter.kira.network",
        "TELEGRAM": "https://tg.kira.network",
        "DOCUMENTATION": docsLink
    };

    const colorMappings = {
        "milady@kek:~$": "kira_user",
        "milady@kek:~/kira_network$": "kira_user",
        "PGP: 390D CDCF CE3E 3991 B004 8F3B 2293 FE64 F2D7 1DAB": "pgp",
    };

    const renderContentWithColorsAndLinks = () => {
        return terminalContent.split('\n').map((line, index) => {
            let segments = [line];
    
            Object.entries(colorMappings).forEach(([key, colorClass]) => {
                segments = segments.reduce((acc, segment) => {
                    if (typeof segment === 'string' && segment.includes(key)) {
                        const parts = segment.split(key);
                        const coloredParts = parts.flatMap((part, idx, array) =>
                            idx < array.length - 1 ? [part, <span key={`${index}-${key}-${idx}`} className={colorClass}>{key}</span>] : part
                        );
                        return [...acc, ...coloredParts];
                    } else {
                        return [...acc, segment];
                    }
                }, []);
            });
    
            return (
                <React.Fragment key={index}>
                    {segments.map((segment, segIndex) => 
                        typeof segment === 'string'
                            ? segment.split(/(\s+)/).map((word, wordIndex) => {
                                const key = `${index}-${segIndex}-${wordIndex}`;
                                const link = linkMappings[word];
                                return link 
                                    ? <a key={key} href={link} rel="noopener noreferrer">{word}</a>
                                    : <span key={key}>{word}</span>;
                            })
                            : segment
                    )}
                    <br />
                </React.Fragment>
            );
        });
    };
    
    

    return (
        <pre className="terminal">
            {terminalContent ? renderContentWithColorsAndLinks() : 'Loading...'}
        </pre>
    );
}

export default TerminalPage;
