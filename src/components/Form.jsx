import "../css/Form.css";

export default function Form() {
  return (
    <form className="create--form" action="">
      <div className="create--subcontainer">
        <input className="create--form__input" type="text" />
        <input className="create--form__input" type="text" />
      </div>
      <div className="create--subcontainer">
        <button className="create--form__button">Get a new image</button>
      </div>
    </form>
  );
}
