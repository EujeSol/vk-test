import { GiphyFetch } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";
import {Gif} from "@giphy/react-components";
import React, { useState, useRef, useEffect, RefObject, LegacyRef, ChangeEvent } from "react";
import { render } from "react-dom";
import './styles/App.css';


interface IMessage {
  id?: String,
  text: String | null,
  time: String,
  author: String
  gif: IGif | null
}

function App() 
{

  const giphyFetch = new GiphyFetch("325xH8P9NlRD19vhJqeFs182GlZcHYmV");
  const [gif, setGif] = useState<IGif | null>(null);
  const [gifs, setGifs] = useState<IGif[] | null>([])
  const [msgType, setMsgType] = useState('empty')

  const [messages, setMessages] = useState<IMessage[]>([])

  const [text, setText] = useState('');

  const textInputRef = useRef<HTMLInputElement>(null)
  const gifAreaRef = useRef<HTMLDivElement>(null)

  const [isVisible, setVisible] = useState(false)

  const testGifText = new RegExp(/^\/gif\s+([A-Za-zа-яёА-ЯЁ0-9_\s]+)/)


  const handleMessage = (e: ChangeEvent<any>) =>
  {
    e.preventDefault()

    if (msgType === 'gif')
    sendGif()
    else if (msgType === 'random gif')
    sendRandomGif()

    else if (msgType !== 'empty')
    sendText(text)

    clearInput()
  }


  const sendText = (msg: string) => 
  {
    const newDate: String = String(new Date().toLocaleTimeString())
    const newMessage =  {
      id: String(Date.now()),
      text: String(msg),
      time: newDate,
      author: 'Евгения',
      gif: null
    }
    setMessages([...messages, newMessage])
  }


  const clearInput = () => 
  {
    setText('') 
  }


  useEffect ( () =>
  {
    if (isVisible)
      fetchGifs()

  }, [isVisible == true])


  async function fetchGifs() 
  {

    const { data } = await giphyFetch.trending({limit: 20})
    setGifs(data)
  }


  const sendRandomGif = async () =>
  {
    const { data } = await giphyFetch.random()

    const newDate: String = String(new Date().toLocaleTimeString())
    const newMessage =
    {
      id: String(Date.now()),
      text: String(''),
      time: newDate,
      author: 'Евгения',
      gif: data
    }

    setMessages([...messages, newMessage])
  }


  const sendGif =  () =>
  {
    const newDate: String = String(new Date().toLocaleTimeString())
    const newMessage =
    {
      id: String(Date.now()),
      text: String(''),
      time: newDate,
      author: 'Евгения',
      gif: gif
    }

    setMessages([...messages, newMessage])
  }


  const fetchSearchGif = async (searchString) =>
  {
    const { data } = await giphyFetch.search(searchString, {limit: 20})
    setGif(data[0])
    setGifs(data)
  }


  useEffect ( () => 
  {
    if ((/^\/gif\s*/).test(text) === true)
    {
      if (gifAreaRef.current)
      gifAreaRef.current.style.display = 'block'
      setVisible(true)
      

      if ((/^\/gif\s*$/).test(text) === true)
      {
        setMsgType('random gif')
      }
      else
      {
          const searchString = testGifText.exec(text)![1]
          fetchSearchGif(searchString)
          setMsgType('gif')
      }
    }
    else if (text === '' || text.trim() === '')
    {
      if (gifAreaRef.current)
      gifAreaRef.current.style.display = 'none'
      setVisible(false)

      setMsgType('empty')
    }
    else 
    {
      if (gifAreaRef.current)
      gifAreaRef.current.style.display = 'none'

      setVisible(false)
      setMsgType('text')
    }

  }, [text])


  const handleGifClick = (theGif: IGif) =>
  {
    if (gifAreaRef.current)
    gifAreaRef.current.style.display = 'none'
    setVisible(false)
    clearInput()

    const newDate: String = String(new Date().toLocaleTimeString())
    const newMessage =
    {
      id: String(Date.now()),
      text: String(''),
      time: newDate,
      author: 'Евгения',
      gif: theGif
    }

    setMessages([...messages, newMessage])
  }


  return (
    <>  
      <div className="App">

      <div className="user-area">
      <div className="message-area">
    
          {messages.map(message => 
              {if (message.gif === null) 
                return (
                  <div key={String(message.id)}>
                    <div className="message"> {message.text} </div>
                    <div className="author-time">{message.author}, {message.time}</div>
                  </div>
                ) 
              else
                return (
                  <div key={String(message.id)}>
                      <Gif hideAttribution noLink className="gif" gif={message.gif} width={150}/>
                      <div className="author-time">{message.author}, {message.time}</div>
                  </div>
                )
              })
          }
      </div>

        <hr/>

        <div ref={gifAreaRef} className="gif-area">
          <div className="gif-grid">   
            {gifs!.map(gif =>
              <Gif 
                hideAttribution noLink 
                gif={gif} width={110} height={110} 
                key={String(gif.id)} onGifClick={(gif:IGif) => handleGifClick(gif)}/>
            )} 
          </div>
        </div>

        <form onSubmit={handleMessage} className="input-area">
          <input 
            type="text"
            className="message-input" 
            placeholder="Введите сообщение..."
            ref={textInputRef}
            value={text}
            onChange={e => setText(e.target.value)}/>

          <button type="none" onClick={handleMessage} className="message-btn">Send</button>
        </form>  
      </div>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
