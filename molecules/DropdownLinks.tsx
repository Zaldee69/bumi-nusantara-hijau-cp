import React from "react";
import LinkTo from "./../atoms/Link";

const DropdownLinks = () => {
  return (
    <ul className="p-2 bg-base-100">
      <li>
        <LinkTo title="AMDAL" href="/amdal" />
      </li>
      <li>
        <LinkTo title="PERTEK B3" href="/pertek-b3" />
      </li>
      <li>
        <LinkTo title="PERTEK Emisi" href="/pertek/emisi" />
      </li>
      <li>
        <LinkTo title="PERTEK Air Limbah" href="/pertek/limbah" />
      </li>
      <li>
        <LinkTo title="Design Engineering" href="/de" />
      </li>
      <li>
        <LinkTo title="Feasebility Study" href="/fs" />
      </li>
    </ul>
  );
};

export default DropdownLinks;
