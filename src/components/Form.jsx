import { useState } from "react";
import "../css/Form.css";
import memesData from "../data/memesData";

export default function Form() {
  //useState for Meme Object
  const [memeObj, setMemeObj] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  //useState for All Memes Data
  // eslint-disable-next-line no-unused-vars
  const [allMemeImages, setAllMemeImages] = useState(memesData)

  //Change Image of the Meme | MAIN FUNCTION
  function getMemeImage() {
    const memes = allMemeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * memes.length);
    const imgUrl = memes[randomIndex].url;

    //Change Image URL with useState
    setMemeObj(prevMeme => {
      return {
        ...prevMeme,
        randomImage: imgUrl
      }
    });
  }

  //Execute the main click function
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
      <img className="meme-img" src={memeObj.randomImage} alt="" />
    </div>
  );
}
