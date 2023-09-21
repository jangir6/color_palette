import "./CopiedMessage.css";

function CopiedMessage({ mode, copiedHexValue }) {
  return (
    <div className={`copied-message ${mode}`}>
      {copiedHexValue} Copied
    </div>
  );
}

export default CopiedMessage;
