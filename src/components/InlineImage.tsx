export default function InlineImage({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt={src}
      className="h-11 w-[150px] object-cover object-center rounded-full inline"
    />
  );
}
