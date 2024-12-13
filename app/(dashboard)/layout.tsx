'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CircleIcon, Home, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@/lib/auth';
import { signOut } from '@/app/(login)/actions';
import { useRouter } from 'next/navigation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useUser();
  const router = useRouter();

  async function handleSignOut() {
    setUser(null);
    await signOut();
    router.push('/');
  }

  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center z-10 hover:scale-105 transition-transform duration-200"
        >
          <img src="/images/logo.svg" alt="Logo ZH DEV" className="w-36" />
        </Link>

        <div className="flex items-center space-x-11 z-10">
          <Link
            href="/dev"
            className="text-customGreen border-b-2 border-customGreen capitalize font-medium hover:text-customGreen hover:scale-105 transition-transform duration-200"
          >
            Mes Services
          </Link>
          <Link
            href="/training"
            className="text-customGreen border-b-2 border-customGreen capitalize font-medium hover:text-customGreen hover:scale-105 transition-transform duration-200"
          >
            Mes Formations
          </Link>
          {user ? (
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer size-9 hover:scale-105 transition-transform duration-200">
                  <AvatarImage alt={user.name || ''} />
                  <AvatarFallback>
                    {user.email.split(' ').map((n) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="flex flex-col gap-1">
                <DropdownMenuItem className="cursor-pointer hover:scale-105 transition-transform duration-200">
                  <Link href="/dashboard" className="flex w-full items-center">
                    <Home className="mr-2 h-4 w-4" />
                    <span>Tableau de bord</span>
                  </Link>
                </DropdownMenuItem>
                <form action={handleSignOut} className="w-full">
                  <button type="submit" className="flex w-full">
                    <DropdownMenuItem className="w-full flex-1 cursor-pointer hover:scale-105 transition-transform duration-200">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Déconnexion</span>
                    </DropdownMenuItem>
                  </button>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              asChild
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white 
              transition-colors bg-customGreen text-primary hover:bg-transparent hover:border hover:border-customGreen hover:text-customGreen hover:scale-105 transition-transform duration-200 h-[44px] px-6"
            >
              <Link href="/sign-up">Inscription</Link>
            </Button>
          )}
        </div>
      </div>
    </header>

  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.7, duration: 0.3, ease: 'easeIn' } }}
      >
        <Header />
        {children}
      </motion.div>
      
    </section>
  );
}
