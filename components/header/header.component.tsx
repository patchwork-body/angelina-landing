import { Padding } from "../padding";

export const Header = () => {
  return (
    <div>
      <Padding>
        <header className="grid grid-cols-[1fr,auto] px-4 py-2">
          <h1 className="font-semibold text-4xl">British Puggy</h1>

          <nav className="grid">
            <ul className="grid grid-cols-[repeat(3,auto)] items-center text-center gap-x-4">
              <li>Подделиться</li>
              <li>Блог</li>
              <li>О нас</li>
            </ul>
          </nav>
        </header>
      </Padding>
    </div>
  );
};
