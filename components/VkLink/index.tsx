import classNames from "classnames";
import { Icon } from "components/Icon";
import { FC } from "react";

export type VkLinkProps = {
  className?: string;
};

export const VkLink: FC<VkLinkProps> = ({ className }) => (
  <a
    className={classNames("cursor-pointer", className)}
    target="_blank"
    href="https://m.vk.com/public212887000?from=groups%253Fact%253Dlist"
    rel="noopener noreferrer"
  >
    <Icon name="vk" className="h-12 w-12 text-white" />
  </a>
);
