"use client";
type Props = {
  children?: string | React.ReactNode;
};

export default function Code(props: Props) {
  return (
    <>
      {typeof props.children === "string" ? (
        <code>
          {props.children}
        </code>
      ) : (
        <code>{props.children}</code>
      )}
    </>
  );
}
