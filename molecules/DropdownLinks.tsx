import React from "react";
import LinkTo from "./../atoms/Link";

const DropdownLinks = () => {
  return (
    <ul className="p-2 bg-base-100">
      <li>
        <LinkTo title="AMDAL" href="/amdal" />
      </li>
      <li>
        <LinkTo title="PERTEK" href="/pertek" />
      </li>
      <li>
        <LinkTo title="Design Engineering" href="/design-engineering" />
      </li>
    </ul>
  );
};

export default DropdownLinks;
