import React ,{ useState , useEffect} from 'react';
import './InterviewPage.css';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition 
const mic = new SpeechRecognition ()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'


function InterviewPage (){
    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    const [savedNotes, setSavedNotes] = useState([])
  
    useEffect(() => {
      handleListen()
    },[isListening])
  
    const handleListen = () => {
      if (isListening) {
        mic.start()
        mic.onend = () => {
          console.log('continue..')
          mic.start()
        }
      } else {
        mic.stop()
        mic.onend = () => {
          console.log('Stopped Mic on Click')
        }
      }
      mic.onstart = () => {
        console.log('Mics on')
      }
  
      mic.onresult = event => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')
        console.log(transcript)
        setNote(transcript)
        mic.onerror = event => {
          console.log(event.error)
        }
      }
    }
  
    const handleSaveNote = () => {
      setSavedNotes([...savedNotes, note])
      setNote('')
    }
    return(
        <>
        <h1>Intervew Records</h1>

        <div className='IV-container'>
            <div className='box'>
                <h2>current note</h2>
                {isListening ? <span>🎙️</span> : <span>🛑</span>}
                <button className='interview-buttons' onClick={handleSaveNote} disabled={!note }>Save Note</button>
                <button className='interview-buttons' onClick={() => setIsListening(prevState => !prevState )}>Start/Stop</button>
                <p>{note}</p>
            </div>
            <div className='box'>
                <h2>Note</h2>
                { savedNotes.map(n => (
                    <p key={n}>{n}</p>
                ))
                }
                <button className='interview-buttons'> Clear Answer </button>
                <button className='interview-buttons'> Submit Answer </button>
            </div>
            
        </div>
        </>
    );
}
export default InterviewPage;
/*

*/