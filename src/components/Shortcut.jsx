import Key from './Key';

const Shortcut = ({ convination, action }) => {
  return (
    <>
      <div className='flex bg-zinc-300 p-4 justify-between'>
        <div>
          {convination.map((item, index) => {
            return (
              <div className='inline' key={index}>
                <Key keyName={item} />
                {index !== convination.length - 1 && ' + '}
              </div>
            );
          })}
        </div>
        <div className='text-md'>{action}</div>
      </div>
    </>
  );
};

export default Shortcut;
