import { useState } from 'react';

export default function useClipboard(text) {
    const [clip, setClip] = useState(text);

    const setClipboard = (text) => {
        if (text) {
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            setClip(text);
        }        
    };

    setClipboard(text);

    return setClipboard;
}