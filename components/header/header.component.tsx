import { FC } from "react";

import { HeaderNavigation } from "../header-navigation";
import { Layout } from "../layout";

export const Header: FC = () => {
  return (
    <div className="sticky top-0 px-5 py-4">
      <Layout>
        <header className="grid grid-cols-[1fr,auto]">
          <h1 className="items-center font-semibold text-4xl leading-loose">
            Очень крутое название
          </h1>

          <HeaderNavigation />
        </header>
      </Layout>
    </div>
  );
};
