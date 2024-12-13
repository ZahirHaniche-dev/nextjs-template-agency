import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[100dvh]">
      <div className="max-w-md space-y-8 p-4 text-center">
        <div className="flex justify-center">
          <Link href="/" className="flex items-center z-10">
            <img
              src="/images/logo.svg"
              alt="Logo ZH DEV"
              className="w-36"
            />
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-white/90 tracking-tight">
          Page Introuvable
        </h1>
        <p className="text-base text-white/80">
          La page que vous recherchez a peut-être été supprimée, son nom a été modifié ou elle est temporairement indisponible.
        </p>

        <div className="mt-8 flex justify-center z-10">
          <Link href="/">
            <Button className="justify-center whitespace-nowrap rounded-full font-semibold ring-offset-white transition-colors border border-customGreen 
                bg-transparent text-customGreen hover:bg-customGreen hover:text-primary h-[56px] px-8 text-sm tracking-[2px] uppercase flex items-center gap-2">
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
