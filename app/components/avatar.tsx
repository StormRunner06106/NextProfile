import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 100 }) => {
  return (
    <div
      className={`w-${size} h-${size} rounded-full overflow-hidden`}
      style={{ borderRadius: '25px' }}
    >
      <Image
        src={`/${src}`}
        alt={alt}
        width={size}
        height={size}
        style={{ height: size.toString() + 'px' }}
      />
    </div>
  );
};

export default Avatar;
