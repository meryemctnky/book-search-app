import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full bg-olive'>
      <div className='container mx-auto flex justify-between'>
        <div className='flex flex-col justify-between sm:flex-row py-2'>
          <p className='text-md text-jet'>&copy; 2023 Meryem Çetinkaya</p>
        </div>
        <div className='sm:flex-row py-2'>
          <ul className='flex list-none'>
            <li className='ml-3'>
              <Link
                href='https://github.com/meryemctnky'
                rel='noopener noreferrer'
              >
                <BsGithub className='text-jet text-2xl' />
              </Link>
            </li>
            <li className='ml-3'>
              <Link
                href='https://www.linkedin.com/in/meryem-cetinkaya/'
                rel='noopener noreferrer'
              >
                <button type='button' className='text-jet text-2xl'>
                  <BsLinkedin />{' '}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
