import { Modal } from "./Modal";
import { useState } from 'react';

function App() {
  const BUTTON_WRAPPER_STYLES = {
    position: 'relative',
    zIndex: 1
  }

  const OTHER_CONTENT_STYLES = {
    position: 'relative',
    zIndex: 2,
    color: 'white',
    backgroundColor: 'navy',
    padding: '10px'
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES}>
        <button onClick={() => setIsOpen(true)}>Open Model</button>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      </Modal>
    <div style={OTHER_CONTENT_STYLES}>Content</div>
    </>
  );
}

export default App;
