import * as React from "react";

export function IconBoxFill(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <line x1="-100" y1="8" x2="0" y2="8" stroke="black" strokeWidth="1" />
      <path
        fillRule="evenodd"
        d="M15.528 2.973a.75.75 0 01.472.696v8.662a.75.75 0 01-.472.696l-7.25 2.9a.75.75 0 01-.557 0l-7.25-2.9A.75.75 0 010 12.331V3.669a.75.75 0 01.471-.696L7.443.184l.004-.001.274-.11a.75.75 0 01.558 0l.274.11.004.001 6.971 2.789zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339z"
      />
      <line x1="16" y1="8" x2="260" y2="8" stroke="black" strokeWidth="1" />
    </svg>
  );
}
