const Key = ({ keyName }) => {
  return (
    <>
      <span className='text-sm font-bold font-mono text-zinc-950 border-zinc-900 border-2 px-4 py-2 bg-pink-500 rounded'>
        {keyName}
      </span>
    </>
  );
};

export default Key;
