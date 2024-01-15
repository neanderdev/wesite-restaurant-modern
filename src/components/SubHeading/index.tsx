import { images } from '../../constants';

interface SubHeadingProps {
  title: string;
}

export function SubHeading({ title }: SubHeadingProps) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className='p__cormorant'>{title}</p>

      <img src={images.spoon} alt="Spoon" className='spoon__img' />
    </div>
  );
}
