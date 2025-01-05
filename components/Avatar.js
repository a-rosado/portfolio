import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none relative" style={{ top: '-120px'}}>
      <Image
        src={'/avatar1.PNG'}
        width={737}
        height={678}
        alt=""
        className="translate-z-0 w-full h-full rounded-full"
      />
    </div>
  );
};

export default Avatar;
