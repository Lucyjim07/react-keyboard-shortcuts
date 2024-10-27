import Shortcut from './Shortcut';

const ShortcutsContainer = ({ title, convinations }) => {
  return (
    <>
      <div className='m-4 border-2 border-zinc-950 p-4'>
        <h1 className='text-3xl font-bold text-center mb-4 text-cyan-800'>
          {title}
        </h1>

        <div className='flex flex-col gap-2'>
          {convinations.map((convination, index) => (
            <Shortcut
              key={index}
              convination={convination.convination}
              action={convination.action}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShortcutsContainer;
