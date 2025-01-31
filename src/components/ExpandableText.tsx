import React from "react";

interface Props {
  maxChar?: number;
  children: React.ReactNode;
}

const ExpandableText = ({ maxChar = 100, children }: Props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  if (children && children.toString().length <= maxChar) {
    return <p>{children}</p>;
  }

  if (expanded) {
    return (
      <>
        <p>{children}</p>
        <button onClick={handleClick}>
          {expanded ? "Read less" : "Read more"}
        </button>
      </>
    );
  }

  const text = children?.toString().substring(0, maxChar);

  return (
    <>
      <p>{text} ...</p>
      <button onClick={handleClick}>
        {expanded ? "Read less" : "Read more"}
      </button>
    </>
  );
};

export default ExpandableText;
