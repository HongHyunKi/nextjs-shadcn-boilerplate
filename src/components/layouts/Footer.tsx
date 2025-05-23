import Link from 'next/link';
import IconGithub from '@/components/common/IconGithub';

export const Footer = () => {
  return (
    <footer className="my-4 flex flex-col items-center justify-center gap-4 text-center print:hidden">
      <div className="flex justify-center gap-4">
        <Link href="https://github.com/HongHyunKi" target="_blank">
          <IconGithub
            className="fill-accent-foreground transition hover:fill-gray-400"
            height={30}
            width={30}
          />
        </Link>
      </div>
      <div>
        © 2025. <span className="font-semibold">Hyunki</span> all rights
        reserved.
      </div>
    </footer>
  );
};
