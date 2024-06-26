import { useState } from "react";
import { useName } from "../contexts/name";
import "./MultiPage.css";
import MultiInstruction from "./MultiInstruction";

function MultiPage() {
  const [changeInterface, setChangeInterface] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
    handleInstruction();
  };

  const { names } = useName();
  const [namesIndex, setNamesIndex] = useState(0);

  const handleCount = () => {
    setChangeInterface(!changeInterface);
    if (changeInterface === true) {
      setNamesIndex(namesIndex + 1);
      if (namesIndex >= names.length - 1) {
        setNamesIndex(0);
      }
    }
  };

  const handleInstruction = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <button onClick={handleClick} className="menu-instruction">
        Instructions
      </button>
      <div className="text-instruction">
        {menuOpen && <MultiInstruction setMenuOpen={setMenuOpen} />}
      </div>
      <section className="section-multi">
        {changeInterface === true ? (
          <div className="play">
            <h2 className="h2-multi">{names[namesIndex].name}</h2>
            <h2 className="h2-multi">Rigole un coup !</h2>
          </div>
        ) : (
          <div className="play">
            <h2 className="h2-multi">A vos rires !</h2>
          </div>
        )}
        <button className="button-multi" onClick={handleCount}>
          Suivant
        </button>
      </section>
    </>
  );
}

export default MultiPage;
