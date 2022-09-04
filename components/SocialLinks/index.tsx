import classNames from "classnames";
import { ExternalLink } from "components/ExternalLink";
import { Icon } from "components/Icon";
import { FC } from "react";

export const SocialLinks: FC<{ vertical?: boolean }> = ({ vertical }) => {
  return (
    <ul
      className={classNames("grid place-items-center", {
        "grid-flow-row gap-y-4": vertical,
      })}
    >
      <li className="hover:scale-125 hover:m-2 transition-all">
        <ExternalLink href="https://m.vk.com/public212887000?from=groups%253Fact%253Dlist">
          <Icon name="vk" className="h-12 w-12 text-white hover:text-vk-brand transition-colors" />
        </ExternalLink>
      </li>

      <li>
        <ExternalLink href="https://m.vk.com/public212887000?from=groups%253Fact%253Dlist">
          <Icon name="vk" className="h-12 w-12 text-white" />
        </ExternalLink>
      </li>

      <li>
        <ExternalLink href="https://m.vk.com/public212887000?from=groups%253Fact%253Dlist">
          <Icon name="vk" className="h-12 w-12 text-white" />
        </ExternalLink>
      </li>
    </ul>
  );
};
