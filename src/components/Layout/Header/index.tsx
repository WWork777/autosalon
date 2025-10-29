'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

type Anchor = { href: `#${string}`; label: string };

const anchorLinks: Anchor[] = [
  { href: '#services', label: 'Фотогалерея' },
  { href: '#features', label: 'Характеристики' },
  // { href: '#plans',    label: 'Планировки' }, // ← если блока нет — закомментируй строку
  { href: '#terms', label: 'Условия' },
  { href: '#contact', label: 'Контакты' },
];

const HEADER_OFFSET = 80; // поправка под высоту шапки при скролле

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  const sideMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(e.target as Node)) {
      setNavbarOpen(false);
    }
  };

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleScroll]);

  // Плавный скролл к якорю с учётом высоты шапки
  const scrollToId = (id: string) => {
    const el = document.querySelector(id) as HTMLElement | null;
    if (!el) return;
    const top =
      el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const onAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomepage) {
      // если не на главной — ведём на /#id
      e.preventDefault();
      window.location.href = `/${href}`;
      return;
    }
    // на главной — плавный скролл
    e.preventDefault();
    scrollToId(href);
    setNavbarOpen(false);
  };

  const textClass =
    isHomepage ? (sticky ? 'text-dark dark:text-white' : 'text-white') : 'text-dark dark:text-white';

  const navClass = `text-sm lg:text-base ${textClass} hover:text-primary transition-colors`;

  return (
    <header
      className={`fixed h-20 py-1 z-50 w-full bg-transparent transition-all duration-300 lg:px-0 px-4 ${sticky ? 'top-3' : 'top-0'}`}
    >
      <nav
        className={`container mx-auto max-w-8xl relative flex items-center justify-between py-3 duration-300 ${sticky ? 'shadow-lg bg-white dark:bg-dark rounded-full top-5 px-4' : 'shadow-none top-0'}`}
      >
        {/* ЛОГО (один контейнер, две версии поверх друг друга) */}
        <Link href="/" aria-label="На главную"
          className="shrink-0 relative w-[150px] h-[68px]">
          {/* светлая версия для тёмного фона / top-of-hero */}
          <Image
            src="/images/header/logo.svg"
            alt="Homely"
            fill
            unoptimized
            className={`
      object-contain
      ${isHomepage ? (sticky ? 'hidden' : 'block') : 'hidden'}
      dark:block
    `}
          />
          {/* тёмная версия для светлого фона / sticky */}
          <Image
            src="/images/header/dark-logo.svg"
            alt="Homely"
            fill
            unoptimized
            className={`
      object-contain
      ${isHomepage ? (sticky ? 'block' : 'hidden') : 'block'}
      dark:hidden
    `}
          />
        </Link>

        {/* ЦЕНТР — МЕНЮ (desktop) */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
          {anchorLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={navClass}
                onClick={(e) => onAnchorClick(e, l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ПРАВО — ТЕМА + ТЕЛЕФОН + БУРГЕР (бургер только mobile) */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* переключатель темы */}
          <button
            className="hover:cursor-pointer"
            aria-label="Переключить тему"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Icon
              icon="solar:sun-bold"
              width={32}
              height={32}
              className={`dark:hidden block ${textClass}`}
            />
            <Icon
              icon="solar:moon-bold"
              width={32}
              height={32}
              className="dark:block hidden text-white"
            />
          </button>

          {/* телефон (скрываем на xs) */}
          <Link
            href="tel:79039073334"
            className={`text-base ${textClass} hidden sm:flex items-center gap-2`}
          >
            <Icon icon="ph:phone-bold" width={22} height={22} />
            <span className="whitespace-nowrap">+7 (903) 907-33-34</span>
          </Link>

          {/* бургер — только на mobile */}
          <button
            onClick={() => setNavbarOpen(true)}
            className={`flex md:hidden items-center gap-3 p-2 rounded-full border ${textClass.includes('text-white')
              ? 'border-white'
              : 'border-dark dark:border-white'
              }`}
            aria-label="Открыть меню"
          >
            <Icon icon="ph:list" width={24} height={24} className={textClass} />
          </button>
        </div>
      </nav>

      {/* затемнение фона при открытом меню */}
      {navbarOpen && <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />}

      {/* МОБИЛЬНОЕ БОКОВОЕ МЕНЮ */}
      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 md:hidden h-full w-full bg-dark shadow-lg transition-transform duration-300 max-w-2xl ${navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50 px-6 sm:px-10 overflow-auto no-scrollbar`}
      >
        <div className="flex items-center justify-between py-5">
          <Link href="/" onClick={() => setNavbarOpen(false)}>
            <Image
              src="/images/header/dark-logo.svg"
              alt="logo"
              width={120}
              height={52}
              unoptimized
            />
          </Link>
          <button
            onClick={() => setNavbarOpen(false)}
            className="bg-white p-3 rounded-full hover:cursor-pointer"
            aria-label="Закрыть меню"
          >
            <Icon icon="ph:x" width={20} height={20} className="text-black" />
          </button>
        </div>

        <nav className="mt-2 mb-8">
          <ul className="flex flex-col gap-2">
            {anchorLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => onAnchorClick(e, item.href)}
                  className="block text-white text-lg py-3 border-b border-white/10 hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto mb-10 flex flex-col gap-3 text-white">
          <p className="text-white/50 text-sm">Связаться</p>
          <Link href="tel:79039073334" className="flex items-center gap-3 text-lg hover:text-primary">
            <Icon icon="ph:phone-bold" width={22} height={22} />
            +7 (903) 907-33-34
          </Link>

          {/* Переключатель темы (в сайдбаре) */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="mt-2 inline-flex items-center gap-2 text-white/90 hover:text-primary"
            aria-label="Переключить тему"
          >
            <Icon icon="solar:moon-bold" width={22} height={22} />
            Тема
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
