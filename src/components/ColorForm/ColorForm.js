import "./ColorForm.css";

function ColorForm({ schemeData, handleChange, mode }) {
  return (
    <form className="color-form">
      <label htmlFor="color-input" className="visually-hidden">
        choose a color
      </label>
      <input
        type="color"
        id="color-input"
        className={`color-input select-${mode} color-input-${mode}`}
        name="selectedColor"
        value={schemeData.selectedColor}
        onChange={handleChange}
      />
      <label htmlFor="selectedScheme" className="visually-hidden">
        choose color pattern
      </label>
      <select
        name="selectedScheme"
        id="selectedScheme"
        className={`scheme-select select-${mode}`}
        value={schemeData.selectedScheme}
        onChange={handleChange}
      >
        <option value="monochrome">Monochrome</option>
        <option value="monochrome-dark">Monochrome Dark</option>
        <option value="monochrome-light">Monochrome Light</option>
        <option value="analogic">Analogic</option>
        <option value="complement">Complement</option>
        <option value="analogic-complement">Analogic Complement</option>
        <option value="triad">Triad</option>
        <option value="quad">Quad</option>
      </select>
      <label htmlFor="numColors" className="visually-hidden">
        Number of pattern
      </label>
      <select
        name="numColors"
        id="numColors"
        className={`num-colors select-${mode}`}
        value={schemeData.numColors}
        onChange={handleChange}
      >
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    </form>
  );
}

export default ColorForm;
