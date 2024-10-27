import './App.css';
import ShortcutsContainer from './components/ShortcutsContainer';
import shortcuts from './data/shortcuts.js';

function App() {
  return (
    <>
      <h1 className='text-4xl font-bold text-center text-rose-600'>
        Visual Studio Code
      </h1>
      <h2 className='text-2xl text-center'>Keyboard Shortcuts for Windows</h2>
      <div>
        <label htmlFor='search'>Search: </label>
        <input
          className='border-2 border-zinc-950 px-2'
          type='text'
          id='search'
          placeholder='Search...'
        />
      </div>
      <div>
        {shortcuts.map((shortcutGroup, index) => (
          <ShortcutsContainer
            key={index}
            title={shortcutGroup.title}
            convinations={shortcutGroup.convinations}
          />
        ))}
      </div>
    </>
  );
}

export default App;
