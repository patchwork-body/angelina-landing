import { FC } from "react";
import Link from "next/link";

import { InlineList } from "../inline-list";

export const HeaderNavigation: FC = () => (
  <nav className="grid">
    <InlineList>
      <Link href="#">Подделиться</Link>
      <Link href="#">Блог</Link>
      <Link href="#">О нас</Link>
    </InlineList>
  </nav>
);
