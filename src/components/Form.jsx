import { useState } from "react";
import "../css/Form.css";
import memesData from "../data/memesData";

export default function Form() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memes = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memes.length);
    const imgUrl = memes[randomIndex].url;

    setMemeImage(imgUrl);
  }

  const handleClick = (event) => {
    event.preventDefault();
    getMemeImage();
  };

  return (
    <div>
      <form className="create--form" action="">
        <div className="create--subcontainer">
          <input className="create--form__input" type="text" />
          <input className="create--form__input" type="text" />
        </div>
        <div className="create--subcontainer">
          <button className="create--form__button" onClick={handleClick}>
            Get a new image
          </button>
        </div>
      </form>
      <img className="meme-img" src={memeImage} alt="" />
    </div>
  );
}
